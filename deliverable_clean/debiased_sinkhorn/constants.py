#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: bananasacks
"""


"""
CONSTANTS

n = number of images or image pairs
max_iter = maximum number of iterations
grouping = mult or pairs
    -if many: Uses debiased sinkhorn method to calculate the barycenters for groups of random images
    -if pairs: Uses debiased sinkhorn method to calculate the barycenters for pairs of random images
"""

import os


CURR_DIR = os.path.dirname(os.path.realpath(__file__))
DATAPATH_NOISE = CURR_DIR + "/artificial_data.npy"
DATAPATH_NONOISE = CURR_DIR + "/artificial_data_no_noise.npy"

N = 5
grouping = "pairs"
epsilon = [.001, .05, .075, .1, .15, .2, .3, .5, .7]
width = 50
max_iter = int(1e3)




"""

"""

