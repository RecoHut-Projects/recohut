# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/models/layers/models.layers.activation.ipynb (unless otherwise specified).

__all__ = ['Dice']

# Cell
import torch
from torch import nn

# Cell
class Dice(nn.Module):
    def __init__(self, input_dim, eps=1e-9):
        super(Dice, self).__init__()
        self.bn = nn.BatchNorm1d(input_dim, affine=False, eps=eps, momentum=0.01)
        self.alpha = nn.Parameter(torch.zeros(input_dim))

    def forward(self, X):
        p = torch.sigmoid(self.bn(X))
        output = p * X + (1 - p) * self.alpha * X
        return output