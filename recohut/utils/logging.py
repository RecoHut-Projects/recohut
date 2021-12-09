# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/utils/logging.ipynb (unless otherwise specified).

__all__ = ['set_logger']

# Cell
import os
from pathlib import Path
import logging

# Cell
def set_logger(log_path):
    """A Python module.

    Args:
        log_path (str): Path where you want to save the log file

    Examples:
        ```python
        set_logger('./model_a.log')
        logging.info('Model A Logging Test Success')
        ```
    """
    log_dir = str(Path(log_path).parent)
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)

    # logs may not show in the file without the two lines
    for handler in logging.root.handlers[:]:
        logging.root.removeHandler(handler)

    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s P%(process)d %(levelname)s %(message)s',
                        handlers=[logging.FileHandler(log_path, mode='w'),
                                  logging.StreamHandler()])