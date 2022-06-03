---
layout: page
title: "CP-loss: Connectivity-preserving Loss for Road Curb Detection in Autonomous Driving with Aerial Images"
description: "Authors: Zhenhua Xu, Yuxiang Sun, Lujia Wang, Ming Liu"
---

## Abstract
Road curb detection is important for autonomous driving. It can be used to determine road boundaries to constrain vehicles on roads, so that potential accidents could be avoided. Most of the current methods detect road curbs online using vehicle-mounted sensors, such as cameras or 3-D Lidars. However, these methods usually suffer from severe occlusion issues. Especially in highly-dynamic traffic environments, most of the field of view is occupied by dynamic objects. To alleviate this issue, we detect road curbs offline using high-resolution aerial images in this paper. Moreover, the detected road curbs can be used to create high-definition (HD) maps for autonomous vehicles. Specifically, we first predict the pixel-wise segmentation map of road curbs, and then conduct a series of post-processing steps to extract the graph structure of road curbs. To tackle the disconnectivity issue in the segmentation maps, we propose an innovative connectivity-preserving loss (CP-loss) to improve the segmentation performance. The experimental results on a public dataset demonstrate the effectiveness of our proposed loss function.

## Paper
[IEEE access](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9636060)

[arxiv access](https://arxiv.org/abs/2107.11920)

## Demo video
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/jbDIuQl8B0s" frameborder="0" allowfullscreen></iframe></p>

## Supplymentary document
More details of our implementation and extra visualization are provided in our [supplementary document](../../assets/pdf/2021_IROS_supplementary.pdf).

## Citation
```
@inproceedings{xu2021cp,
  title={CP-loss: Connectivity-preserving Loss for Road Curb Detection in Autonomous Driving with Aerial Images},
  author={Xu, Zhenhua and Sun, Yuxiang and Wang, Lujia and Liu, Ming},
  booktitle={2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages={1117--1123},
  year={2021},
  organization={IEEE}
}
```