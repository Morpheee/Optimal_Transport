#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed May 26 22:50:25 2021

@author: bananasacks
"""

import numpy as np
import os
os.chdir("/Users/bananasacks/Desktop/Optimal Transport Internship/Optimal_Transport/pascalle_s_drafts/test_algos_draft")

#from load_data import load_data


#seed = 42
#parameters = np.load(" ./Data/parameters_barycenters_pairs3_0.1.npy")


#print(nonoise[1])

#CURR_DIR = os.path.dirname(os.path.realpath(__file__))

#parameters = np.load(CURR_DIR + "/Data/parameters_barycenters_pairs3_0.1.npy", allow_pickle=True)

#print(parameters)


#files = np.load(../CURR_DIR+ "/test_algos/data/artificial_data_lvl_0.000_mean_0.000.npy")

#print(files.shape )

import matplotlib.pyplot as plt
import numpy as np
import ot





data = np.load("data/artificial_data_lvl_0.000_mean_0.000.npy")
data = data[:3] #to truncate the dataset for testing
print(data.shape)
print(data[0].shape)
data = np.reshape(data, (len(data), 2500))
print(data.shape)
print(data[0].shape)
print(data[0])


        
#data = data.reshape((-1, x_size * y_size))        
        
        
        
        
        
        
    #print(data[i].ravel())
    #print(new_data.shape) 
    #print(new_data[0].shape) 
    #print(new_data[0])
    
    ##flatten the data so it is a [2500, N] array
    #print(data[0].shape)
    #print(np.prod(data[0].shape))
    #print(data[0].reshape(np.prod(data[0].shape)))
        
