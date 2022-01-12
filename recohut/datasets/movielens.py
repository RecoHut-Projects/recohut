# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/datasets/datasets.movielens.ipynb (unless otherwise specified).

__all__ = ['ML1mDataset', 'ML1mDataModule', 'ML1mDataset_v2', 'ML1mDataModule_v2', 'ML1mDataset_v3',
           'ML1mDataModule_v3', 'ML100kDataset']

# Cell
from typing import Any, Iterable, List, Optional, Tuple, Union, Callable
import os

import pandas as pd
import numpy as np

import torch

from ..utils.common_utils import *
from .bases.common import Dataset
from .bases.interactions import InteractionsDataset, InteractionsDataModule
from .bases.sequential import SequentialDataset, SequentialDataModule

# Cell
class ML1mDataset(InteractionsDataset):
    url = "http://files.grouplens.org/datasets/movielens/ml-1m.zip"

    @property
    def raw_file_names(self):
        return 'ratings.dat'

    def download(self):
        path = download_url(self.url, self.raw_dir)
        extract_zip(path, self.raw_dir)
        from shutil import move, rmtree
        move(os.path.join(self.raw_dir, 'ml-1m', self.raw_file_names), self.raw_dir)
        rmtree(os.path.join(self.raw_dir, 'ml-1m'))
        os.unlink(path)

    def load_ratings_df(self):
        df = pd.read_csv(self.raw_paths[0], sep='::', header=None, engine='python')
        df.columns = ['uid', 'sid', 'rating', 'timestamp']
        # drop duplicate user-item pair records, keeping recent ratings only
        df.drop_duplicates(subset=['uid', 'sid'], keep='last', inplace=True)
        return df

# Cell
class ML1mDataModule(InteractionsDataModule):
    dataset_cls = ML1mDataset

# Cell
class ML1mDataset_v2(SequentialDataset):
    url = "http://files.grouplens.org/datasets/movielens/ml-1m.zip"

    @property
    def raw_file_names(self):
        return 'ratings.dat'

    def download(self):
        path = download_url(self.url, self.raw_dir)
        extract_zip(path, self.raw_dir)
        from shutil import move, rmtree
        move(os.path.join(self.raw_dir, 'ml-1m', self.raw_file_names), self.raw_dir)
        rmtree(os.path.join(self.raw_dir, 'ml-1m'))
        os.unlink(path)

    def load_ratings_df(self):
        df = pd.read_csv(self.raw_paths[0], sep='::', header=None, engine='python')
        df.columns = ['uid', 'sid', 'rating', 'timestamp']
        return df

# Cell
class ML1mDataModule_v2(SequentialDataModule):
    dataset_cls = ML1mDataset_v2

# Cell
class ML1mDataset_v3(SequentialDataset):
    url = "http://files.grouplens.org/datasets/movielens/ml-1m.zip"

    def __init__(self, data_dir, data_type='train', *args, **kwargs):
        super().__init__(data_dir, data_type, *args, **kwargs)
        if data_type == 'train':
            self.ratings_frame = pd.read_csv(self.processed_paths[0], delimiter=",")
        elif data_type == 'valid':
            self.ratings_frame = pd.read_csv(self.processed_paths[1], delimiter=",")
        elif data_type == 'test':
            self.ratings_frame = pd.read_csv(self.processed_paths[2], delimiter=",")

    @property
    def raw_file_names(self):
        return ['ratings.dat', 'movies.dat', 'users.dat']

    @property
    def processed_file_names(self):
        return ['train.csv', 'valid.csv', 'test.csv']

    def download(self):
        path = download_url(self.url, self.raw_dir)
        extract_zip(path, self.raw_dir)
        from shutil import move, rmtree
        for raw_file_name in self.raw_file_names:
            move(os.path.join(self.raw_dir, 'ml-1m', raw_file_name), self.raw_dir)
        rmtree(os.path.join(self.raw_dir, 'ml-1m'))
        os.unlink(path)

    def load_ratings_df(self):
        df = pd.read_csv(self.raw_paths[0], sep='::', header=None, engine='python')
        df.columns = ['uid', 'sid', 'rating', 'timestamp']
        return df

    def load_movies_df(self):
        df = pd.read_csv(self.raw_paths[1], sep='::', header=None, engine='python')
        df.columns = ["sid", "title", "genres"]
        return df

    def load_users_df(self):
        df = pd.read_csv(self.raw_paths[2], sep='::', header=None, engine='python')
        df.columns = ["uid", "sex", "age_group", "occupation", "zip_code"]
        return df

    def process(self):
        ## movies
        movies = self.load_movies_df()
        movies["year"] = movies["title"].apply(lambda x: x[-5:-1])
        movies.year = pd.Categorical(movies.year)
        movies["year"] = movies.year.cat.codes
        movies["sid"] = movies["sid"].astype(str)

        genres = ["Action","Adventure","Animation","Children's","Comedy","Crime",
                "Documentary","Drama","Fantasy","Film-Noir","Horror","Musical",
                "Mystery","Romance","Sci-Fi","Thriller","War","Western"]

        for genre in genres:
            movies[genre] = movies["genres"].apply(
                lambda values: int(genre in values.split("|"))
            )

        ## users
        users = self.load_users_df()
        users.sex = pd.Categorical(users.sex)
        users["sex"] = users.sex.cat.codes
        users.age_group = pd.Categorical(users.age_group)
        users["age_group"] = users.age_group.cat.codes
        users.occupation = pd.Categorical(users.occupation)
        users["occupation"] = users.occupation.cat.codes
        users.zip_code = pd.Categorical(users.zip_code)
        users["zip_code"] = users.zip_code.cat.codes
        users["uid"] = users["uid"].astype(str)

        # ratings
        ratings = self.load_ratings_df()
        ratings['timestamp'] = pd.to_datetime(ratings['timestamp'], unit='s')
        ratings["sid"] = ratings["sid"].astype(str)
        ratings["uid"] = ratings["uid"].astype(str)

        # Transform the movie ratings data into sequences
        # First, let's sort the the ratings data using the unix_timestamp,
        # and then group the movie_id values and the rating values by user_id.
        # The output DataFrame will have a record for each user_id, with two
        # ordered lists (sorted by rating datetime): the movies they have rated,
        # and their ratings of these movies.

        ratings_group = ratings.sort_values(by=["timestamp"]).groupby("uid")

        ratings_data = pd.DataFrame(
            data={
                "uid": list(ratings_group.groups.keys()),
                "sids": list(ratings_group.sid.apply(list)),
                "ratings": list(ratings_group.rating.apply(list)),
                "timestamps": list(ratings_group.timestamp.apply(list)),
            }
        )

        # Now, let's split the movie_ids list into a set of sequences of a fixed
        # length. We do the same for the ratings. Set the sequence_length variable
        # to change the length of the input sequence to the model. You can also
        # change the step_size to control the number of sequences to generate for
        # each user.
        ratings_data.sids = ratings_data.sids.apply(
            lambda ids: self.create_sequences(ids, self.history_size, self.step_size)
        )
        ratings_data.ratings = ratings_data.ratings.apply(
            lambda ids: self.create_sequences(ids, self.history_size, self.step_size)
        )
        del ratings_data["timestamps"]

        # After that, we process the output to have each sequence in a separate
        # records in the DataFrame. In addition, we join the user features with
        # the ratings data.
        ratings_data_movies = ratings_data[["uid", "sids"]].explode(
            "sids", ignore_index=True
        )
        ratings_data_rating = ratings_data[["ratings"]].explode("ratings", ignore_index=True)
        ratings_data_transformed = pd.concat([ratings_data_movies, ratings_data_rating], axis=1)
        ratings_data_transformed = ratings_data_transformed.join(
            users.set_index("uid"), on="uid"
        )
        ratings_data_transformed.sids = ratings_data_transformed.sids.apply(
            lambda x: ",".join(x)
        )
        ratings_data_transformed.ratings = ratings_data_transformed.ratings.apply(
            lambda x: ",".join([str(v) for v in x])
        )
        del ratings_data_transformed["zip_code"]
        ratings_data_transformed.rename(
            columns={"sids": "sequence_sids", "ratings": "sequence_ratings"},
            inplace=True,
        )
        # Finally, we split the data into training and testing splits, with 85%
        # and 15% of the instances, respectively, and store them to CSV files.
        random_selection = np.random.rand(len(ratings_data_transformed.index)) <= 0.85
        train_data = ratings_data_transformed[random_selection]
        test_data = ratings_data_transformed[~random_selection]

        # save
        train_data.to_csv(self.processed_paths[0], index=False, sep=",")
        test_data.to_csv(self.processed_paths[1], index=False, sep=",")
        test_data.to_csv(self.processed_paths[2], index=False, sep=",")

    def __len__(self):
        return len(self.ratings_frame)

    def __getitem__(self, idx):
        data = self.ratings_frame.iloc[idx]
        user_id = data.uid
        movie_history = eval(data.sequence_sids)
        movie_history_ratings = eval(data.sequence_ratings)
        target_movie_id = movie_history[-1:][0]
        target_movie_rating = movie_history_ratings[-1:][0]
        movie_history = torch.LongTensor(movie_history[:-1])
        movie_history_ratings = torch.LongTensor(movie_history_ratings[:-1])
        sex, age_group, occupation = data.sex, data.age_group, data.occupation
        output = (user_id, movie_history, target_movie_id, movie_history_ratings,
                  target_movie_rating, sex, age_group, occupation)
        return output

# Cell
class ML1mDataModule_v3(SequentialDataModule):
    dataset_cls = ML1mDataset_v3

# Cell
class ML100kDataset(Dataset):
    url = 'https://files.grouplens.org/datasets/movielens/ml-100k.zip'

    def __init__(self, root):
        super().__init__(root)

    @property
    def raw_file_names(self) -> str:
        return ['u1.base', 'u1.test', 'u4.test', 'allbut.pl', 'u.item',
                'ua.test', 'u.occupation', 'u3.test', 'u5.base', 'ub.test',
                'u2.test', 'u3.base', 'u.genre', 'u.data', 'u4.base',
                'u5.test', 'u.info', 'README', 'ub.base', 'mku.sh', 'u2.base',
                'u.user', 'ua.base']

    @property
    def processed_file_names(self) -> str:
        raise NotImplementedError

    def download(self):
        path = download_url(self.url, self.raw_dir)
        extract_zip(path, self.raw_dir)
        from shutil import move, rmtree
        file_names = os.listdir(osp.join(self.raw_dir, 'ml-100k'))
        for file_name in file_names:
            move(osp.join(self.raw_dir, 'ml-100k', file_name), self.raw_dir)
        rmtree(osp.join(self.raw_dir, 'ml-100k'))
        os.unlink(path)

    def process(self):
        raise NotImplementedError