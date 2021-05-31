import numpy as np
import ot


def cost_matrix(x_size, y_size):
    """Compute cost matrix which contains pairwise distances between locations of pixels"""
    nx, ny = x_size, y_size
    x = np.linspace(0,1, nx)
    y = np.linspace(0,1, ny)
    xv, yv = np.meshgrid(y, x)
    coors = np.vstack((xv.flatten(), yv.flatten())).T
    coors = coors[:, (1, 0)]
    C = ot.dist(coors, coors, metric='sqeuclidean')
    return C
