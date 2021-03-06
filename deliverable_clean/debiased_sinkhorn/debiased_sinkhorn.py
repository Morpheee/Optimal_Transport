#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: bananasacks
"""

import sinkhorn_barycenters as sink
import numpy as np
from time import time
import torch

from constants import N, grouping, max_iter

"""
This algorithm takes runs the Sinkhorn Debiased algorithm to compute the barycenter either
-one barycenter between a collection of images OR
-a barycenter for each pair of images
"""



#Put P here


def debiased_sinkhorn(img_index, P_nonoise, K_nonoise, P_noise, K_noise):
    t = time()
    qnonoise = []
    qnoise = []
    print("running Debiased Sinkhorn Algorithm...")
    if grouping == "many":
        qnonoise = sink.barycenter(P_nonoise, K_nonoise, reference="debiased", maxiter = max_iter)
        qnoise = sink.barycenter(P_noise, K_noise, reference="debiased", maxiter = max_iter)

    
    elif grouping == "pairs":
        for i in range(len(img_index)):
            P = torch.stack([P_nonoise[i][0], P_nonoise[i][1]], dim=0)
            #print(P_nonoise[i][0].shape)
            #print(P.shape)
            q = sink.barycenter(P, K_nonoise, reference="debiased", maxiter = max_iter)
            qnonoise.append(q)
        for i in range(len(img_index)):
            P = torch.stack([P_noise[i][0], P_noise[i][1]], dim=0)
            q = sink.barycenter(P, K_noise, reference="debiased", maxiter = max_iter)
            qnoise.append(q)
            
                    
    else:
        print("Error: Please specify proper grouping in constants.py")
        sys.exit()
        
    print("DONE. t =",round(time()-t,2),"s.")    
    return qnonoise, qnoise


