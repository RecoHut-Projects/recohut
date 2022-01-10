# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/models/models.deepfm.ipynb (unless otherwise specified).

__all__ = ['FactorizationMachine', 'DeepFM', 'DeepFMv2']

# Cell
import torch

from .layers.common import FeaturesEmbedding, FeaturesLinear, MultiLayerPerceptron

# Cell
class FactorizationMachine(torch.nn.Module):

    def __init__(self, reduce_sum=True):
        super().__init__()
        self.reduce_sum = reduce_sum

    def forward(self, x):
        """
        :param x: Float tensor of size ``(batch_size, num_fields, embed_dim)``
        """
        square_of_sum = torch.sum(x, dim=1) ** 2
        sum_of_square = torch.sum(x ** 2, dim=1)
        ix = square_of_sum - sum_of_square
        if self.reduce_sum:
            ix = torch.sum(ix, dim=1, keepdim=True)
        return 0.5 * ix

class DeepFM(torch.nn.Module):
    """
    A pytorch implementation of DeepFM.
    Reference:
        H Guo, et al. DeepFM: A Factorization-Machine based Neural Network for CTR Prediction, 2017.
    """

    def __init__(self, field_dims, embed_dim, mlp_dims, dropout):
        super().__init__()
        self.linear = FeaturesLinear(field_dims)
        self.fm = FactorizationMachine(reduce_sum=True)
        self.embedding = FeaturesEmbedding(field_dims, embed_dim)
        self.embed_output_dim = len(field_dims) * embed_dim
        self.mlp = MultiLayerPerceptron(self.embed_output_dim, mlp_dims, dropout)

    def forward(self, x):
        """
        :param x: Long tensor of size ``(batch_size, num_fields)``
        """
        embed_x = self.embedding(x)
        x = self.linear(x) + self.fm(embed_x) + self.mlp(embed_x.view(-1, self.embed_output_dim))
        return torch.sigmoid(x.squeeze(1))

# Cell
from collections import namedtuple, defaultdict

import torch
from torch import nn as nn

# Internal Cell
class FM(nn.Module):
    def __init__(self, p, k):
        super(FM, self).__init__()
        self.p = p
        self.k = k
        self.linear = nn.Linear(self.p, 1, bias=True)
        self.v = nn.Parameter(torch.Tensor(self.p, self.k), requires_grad=True)
        self.v.data.uniform_(-0.01, 0.01)
        self.drop = nn.Dropout(0.3)

    def forward(self, x):
        linear_part = self.linear(x)
        inter_part1 = torch.pow(torch.mm(x, self.v), 2)
        inter_part2 = torch.mm(torch.pow(x, 2), torch.pow(self.v, 2))
        pair_interactions = torch.sum(torch.sub(inter_part1, inter_part2), dim=1)
        self.drop(pair_interactions)
        output = linear_part.transpose(1, 0) + 0.5 * pair_interactions
        return output.view(-1, 1)

# Cell
class DeepFMv2(nn.Module):
    def __init__(self, feat_sizes, sparse_feature_columns, dense_feature_columns,dnn_hidden_units=[400, 400,400], dnn_dropout=0.0, ebedding_size=4,
                 l2_reg_linear=0.00001, l2_reg_embedding=0.00001, l2_reg_dnn=0, init_std=0.0001, seed=1024,
                 device='cpu'):
        super(DeepFMv2, self).__init__()
        self.feat_sizes = feat_sizes
        self.device = device
        self.dense_feature_columns = dense_feature_columns
        self.sparse_feature_columns = sparse_feature_columns
        self.embedding_size = ebedding_size
        self.l2_reg_linear = l2_reg_linear

        self.bias = nn.Parameter(torch.zeros((1, )))
        self.init_std = init_std
        self.dnn_dropout = dnn_dropout

        self.embedding_dic = nn.ModuleDict({feat:nn.Embedding(self.feat_sizes[feat], self.embedding_size, sparse=False)
                                            for feat in self.sparse_feature_columns})
        for tensor in self.embedding_dic.values():
            nn.init.normal_(tensor.weight, mean=0, std=self.init_std)
        self.embedding_dic.to(self.device)

        self.feature_index = defaultdict(int)
        start = 0
        for feat in self.feat_sizes:
            if feat in self.feature_index:
                continue
            self.feature_index[feat] = start
            start += 1

        self.input_size = self.embedding_size * len(self.sparse_feature_columns)+len(self.dense_feature_columns)
        # fm
        self.fm = FM(self.input_size, 10)

        # DNN
        self.dropout = nn.Dropout(self.dnn_dropout)
        self.hidden_units = [self.input_size] + dnn_hidden_units
        self.Linears = nn.ModuleList([nn.Linear(self.hidden_units[i], self.hidden_units[i+1]) for i in range(len(self.hidden_units)-1)])
        self.relus = nn.ModuleList([nn.ReLU() for i in range(len(self.hidden_units)-1)])
        for name, tensor in self.Linears.named_parameters():
            if 'weight' in name:
                nn.init.normal_(tensor, mean=0, std=self.init_std)
        self.dnn_outlayer = nn.Linear(dnn_hidden_units[-1], 1, bias=False).to(self.device)


    def forward(self, x):
        # x shape 1024*39

        sparse_embedding = [self.embedding_dic[feat](x[:, self.feature_index[feat]].long()) for feat in self.sparse_feature_columns]
        sparse_embedding = torch.cat(sparse_embedding, dim=-1)
        # print(sparse_embedding.shape)  # batch * 208

        dense_value = [x[:, self.feature_index[feat]] for feat in
                            self.dense_feature_columns]

        dense_value = torch.cat(dense_value, dim=0)
        dense_value = torch.reshape(dense_value, (len(self.dense_feature_columns), -1))
        dense_value = dense_value.T
        # print(dense_value.shape) # batch * 13

        input_x = torch.cat((dense_value, sparse_embedding), dim=1)
        # print(input_x.shape) # batch * 221

        fm_logit = self.fm(input_x)

        for i in range(len(self.Linears)):
            fc = self.Linears[i](input_x)
            fc = self.relus[i](fc)
            fc = self.dropout(fc)
            input_x = fc
        dnn_logit = self.dnn_outlayer(input_x)

        y_pre = torch.sigmoid(fm_logit+dnn_logit+self.bias)
        return y_pre