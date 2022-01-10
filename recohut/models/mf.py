# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/models/models.mf.ipynb (unless otherwise specified).

__all__ = ['MF']

# Cell
from typing import Any, Iterable, List, Optional, Tuple, Union, Callable
import os

import torch
from torch import nn
from torch.nn import functional as F

from .bases.common import PointModel

# Cell
class MF(PairModel):
    """A matrix factorization model trained using SGD and negative sampling."""

    def __init__(self, n_users, n_items, embedding_dim):
        super().__init__()
        self.user_embedding = nn.Embedding(
            num_embeddings=n_users, embedding_dim=embedding_dim
        )
        self.item_embedding = nn.Embedding(
            num_embeddings=n_items, embedding_dim=embedding_dim
        )
        self.user_bias = nn.Parameter(torch.zeros((n_users)))
        self.item_bias = nn.Parameter(torch.zeros((n_items)))
        self.bias = nn.Parameter(torch.Tensor([0]))

    def forward(self, users, items):
        return (
                self.bias +
                self.user_bias[users] +
                self.item_bias[items] +
                (self.user_embedding(users).mul(self.item_embedding(items))).sum(dim=-1)
        )