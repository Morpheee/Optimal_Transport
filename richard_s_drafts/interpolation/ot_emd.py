#! /usr/bin/env python3

import ot
import numpy as np

def ot_emd(hist1, hist2, c):

    coupling = ot.emd(hist1, hist2, M = c)

    return coupling