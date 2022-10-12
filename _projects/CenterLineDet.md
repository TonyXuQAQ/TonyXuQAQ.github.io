---
layout: page
title: "CenterLineDet: Road Lane CenterLine Graph Detection With Vehicle-Mounted Sensors by Transformer for High-definition Map Creation"
description: "Authors: Zhenhua Xu, Yuxuan Liu, Yuxiang Sun, Ming Liu and Lujia Wang"
---


## Abstract
With the rapid development of autonomous vehicles, there witnesses a booming demand for high-definition maps (HD maps) that provide reliable and robust prior information of static surroundings in autonomous driving scenarios. As one of the main high-level elements in the HD map, the road lane centerline is critical for downstream tasks, such as prediction and planning. Manually annotating lane centerline HD maps by human annotators is labor-intensive, expensive and inefficient, severely restricting the wide application and fast deployment of autonomous driving systems. Previous works seldom explore the centerline HD map mapping problem due to the complicated topology and severe overlapping issues of road centerlines. In this paper, we propose a novel method named CenterLineDet to create the lane centerline HD map automatically. CenterLineDet is trained by imitation learning and can effectively detect the graph of lane centerlines by iterations with vehicle-mounted sensors. Due to the application of the DETR-like transformer network, CenterLineDet can handle complicated graph topology, such as lane intersections. The proposed approach is evaluated on a large publicly available dataset Nuscenes, and the superiority of CenterLineDet is well demonstrated by the comparison results. 

## Paper
[pdf](../../assets/pdf/2023_ICRA_CenterLineDet.pdf)

[arxiv access](https://arxiv.org/abs/2209.07734)


## Supplymentary document
More details of our implementation and extra visualization are provided in our [supplementary document](../../assets/pdf/2022_ICRA_CenterLineDet_supplementary.pdf).

## Implementation Code
Inference code is release at our [github page](https://github.com/TonyXuQAQ/CenterLineDet).

## Demo video
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/r5cbAkH5JrU" frameborder="0" allowfullscreen></iframe></p>

## System diagram
<p align="center">
  <img style="width: 100%" src="../../assets/img/centerlinedet_diagram.png" />
</p>



## Status
Submitted to ICRA 2023. Under review.