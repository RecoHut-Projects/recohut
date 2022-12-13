# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/utils/utils.data.ipynb (unless otherwise specified).

__all__ = ['list_datasets', 'load_dataset', 'generate_time_series', 'generate_abtest_data']

# Cell
import pandas as pd
import numpy as np
import tempfile
import os
import scipy.stats as stats

from .common_utils import download_url

# Cell
def list_datasets(top_n:int=None):
    """
    Retruns a pandas dataframe of all the available datasets and info

    Args:
        top_n (int): returns only top_n rows
    """
    url = 'https://docs.google.com/spreadsheets/d/1wY_83y2ltu6tzMNHFOQRNslrgb0VWH_wa7zP7lT6AvM/export?gid=0&format=csv'
    df = pd.read_csv(url, index_col=[0]).fillna('NA')
    if top_n:
        return df.head(top_n)
    return df

# Cell
def load_dataset(data_id, data_dir=None, log=False):
    dataset_list = list(list_datasets().index)
    assert data_id in dataset_list, f'data id not exist, available ids are {dataset_list}'

    if data_dir is None:
        data_dir = os.path.join(tempfile.gettempdir(), data_id)

    data_info = list_datasets().loc[data_id]
    path = download_url(data_info.url, data_dir, log=log)

    if data_info.format == 'parquet.snappy':
        df = pd.read_parquet(path)

    return df

# Cell
def generate_time_series(batch_size, n_steps, seed=42):
    np.random.seed(seed)
    freq1, freq2, offsets1, offsets2 = np.random.rand(4, batch_size, 1)
    time = np.linspace(0, 1, n_steps)
    series = 0.5 * np.sin((time - offsets1) * (freq1 * 10 + 10))  #   wave 1
    series += 0.2 * np.sin((time - offsets2) * (freq2 * 20 + 20)) # + wave 2
    series += 0.1 * (np.random.rand(batch_size, n_steps) - 0.5)   # + noise
    return series[..., np.newaxis].astype(np.float32)

# Cell
def generate_abtest_data(N_A, N_B, bcr, d_hat, days=None, control_label='A',
                         test_label='B', seed=None):
    """Returns a pandas dataframe with synthetic A/B experiment data
    Example:
    Parameters:
        N_A (int): sample size for control group
        N_B (int): sample size for test group
            Note: final sample size may not match N_A provided because the
            group at each row is chosen at random (50/50).
        bcr (float): baseline conversion rate; conversion rate of control group
        d_hat (float): difference between the groups
        days (int): optional; if provided, a column for 'ts' will be included
            to divide the data in chunks of time
            Note: overflow data will be included in an extra day
        control_label (str)
        test_label (str)
        seed (int)
    Returns:
        pd.DataFrame: the generated ctr dataframe
        pd.DataFrame: summary dataframe
    """
    p_A = bcr
    p_B = bcr + d_hat # conversion rate of test group

    if seed:
        np.random.seed(seed)

    # initiate empty container
    data = []

    # total amount of rows in the data
    N = N_A + N_B

    # distribute events based on proportion of group size
    group_bern = stats.bernoulli(N_A / (N_A + N_B))

    # initiate bernoulli distributions from which to randomly sample
    A_bern = stats.bernoulli(p_A)
    B_bern = stats.bernoulli(p_B)

    for idx in range(N):
        # initite empty row
        row = {}
        # for 'ts' column
        if days is not None:
            if type(days) == int:
                row['ts'] = idx // (N // days)
            else:
                raise ValueError("Provide an integer for the days parameter.")
        # assign group based on 50/50 probability
        row['group'] = group_bern.rvs()

        if row['group'] == 0:
            # assign conversion based on provided parameters
            row['converted'] = A_bern.rvs()
        else:
            row['converted'] = B_bern.rvs()
        # collect row into data container
        data.append(row)

    # convert data into pandas dataframe
    df = pd.DataFrame(data)

    # transform group labels of 0s and 1s to user-defined group labels
    df['group'] = df['group'].apply(
        lambda x: control_label if x == 0 else test_label)

    # summary dataframe
    ab_summary = df.pivot_table(values='converted', index='group', aggfunc=np.sum)
    # add additional columns to the pivot table
    ab_summary['total'] = df.pivot_table(values='converted', index='group', aggfunc=lambda x: len(x))
    ab_summary['rate'] = df.pivot_table(values='converted', index='group')

    return df, ab_summary