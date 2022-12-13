# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/models/models.embedding.ipynb (unless otherwise specified).

__all__ = ['EmbeddingNet', 'get_list', 'GroupEmbedding']

# Cell
import torch
from itertools import zip_longest
from torch import nn

# Cell
class EmbeddingNet(torch.nn.Module):
    """
    Creates a dense network with embedding layers.

    Args:

        n_users:
            Number of unique users in the dataset.
        n_items:
            Number of unique items in the dataset.
        n_factors:
            Number of columns in the embeddings matrix.
        embedding_dropout:
            Dropout rate to apply right after embeddings layer.
        hidden:
            A single integer or a list of integers defining the number of
            units in hidden layer(s).
        dropouts:
            A single integer or a list of integers defining the dropout
            layers rates applyied right after each of hidden layers.

    """
    def __init__(self, n_users, n_items,
                 n_factors=50, embedding_dropout=0.02,
                 hidden=10, dropouts=0.2):

        super().__init__()
        hidden = get_list(hidden)
        dropouts = get_list(dropouts)
        n_last = hidden[-1]

        def gen_layers(n_in):
            """
            A generator that yields a sequence of hidden layers and
            their activations/dropouts.

            Note that the function captures `hidden` and `dropouts`
            values from the outer scope.
            """
            nonlocal hidden, dropouts
            assert len(dropouts) <= len(hidden)

            for n_out, rate in zip_longest(hidden, dropouts):
                yield torch.nn.Linear(n_in, n_out)
                yield torch.nn.ReLU()
                if rate is not None and rate > 0.:
                    yield torch.nn.Dropout(rate)
                n_in = n_out

        self.u = torch.nn.Embedding(n_users, n_factors)
        self.m = torch.nn.Embedding(n_items, n_factors)
        self.drop = torch.nn.Dropout(embedding_dropout)
        self.hidden = torch.nn.Sequential(*list(gen_layers(n_factors * 2)))
        self.fc = torch.nn.Linear(n_last, 1)
        self._init()

    def forward(self, users, items, minmax=None):
        features = torch.cat([self.u(users), self.m(items)], dim=1)
        x = self.drop(features)
        x = self.hidden(x)
        out = torch.sigmoid(self.fc(x))
        if minmax is not None:
            min_rating, max_rating = minmax
            out = out*(max_rating - min_rating + 1) + min_rating - 0.5
        return out

    def _init(self):
        """
        Setup embeddings and hidden layers with reasonable initial values.
        """

        def init(m):
            if type(m) == torch.nn.Linear:
                torch.nn.init.xavier_uniform_(m.weight)
                m.bias.data.fill_(0.01)

        self.u.weight.data.uniform_(-0.05, 0.05)
        self.m.weight.data.uniform_(-0.05, 0.05)
        self.hidden.apply(init)
        init(self.fc)

# Cell
def get_list(n):
    if isinstance(n, (int, float)):
        return [n]
    elif hasattr(n, '__iter__'):
        return list(n)
    raise TypeError('layers configuraiton should be a single number or a list of numbers')

# Cell
class GroupEmbedding(nn.Module):
    """
    Embedding Network
    """

    def __init__(self, embedding_size: int, user_num: int, item_num: int):
        """
        Initialize Embedding
        :param embedding_size: embedding size
        :param user_num: number of users
        :param item_num: number of items
        """
        super(GroupEmbedding, self).__init__()
        self.user_embedding = nn.Embedding(user_num + 1, embedding_size)
        self.item_embedding = nn.Embedding(item_num + 1, embedding_size)
        self.user_attention = nn.Sequential(
            nn.Linear(embedding_size, embedding_size),
            nn.ReLU(),
            nn.Linear(embedding_size, 1)
        )
        self.user_softmax = nn.Softmax(dim=-1)

    def forward(self, group_members, history):
        """
        Forward
        :param group_members: group members
        :param history: browsing history of items
        :return: embedded state
        """
        embedded_group_members = self.user_embedding(group_members)
        group_member_attentions = self.user_softmax(self.user_attention(embedded_group_members))
        embedded_group = torch.squeeze(torch.inner(group_member_attentions.T, embedded_group_members.T))
        embedded_history = torch.flatten(self.item_embedding(history), start_dim=-2)
        embedded_state = torch.cat([embedded_group, embedded_history], dim=-1)
        return embedded_state