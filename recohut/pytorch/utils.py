# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/pytorch/utils.ipynb (unless otherwise specified).

__all__ = ['seed_everything']

# Cell
import sys
import os
import numpy as np
import torch
import random

# Cell
def seed_everything(seed=40):
    """sets the random seed to establish deterministic behaviors

    Args:
        seed (int): the random seed integer
    """
    random.seed(seed)
    os.environ["PYTHONHASHSEED"] = str(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)
    torch.backends.cudnn.deterministic = True