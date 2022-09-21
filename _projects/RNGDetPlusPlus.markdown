---
layout: page
title: "RNGDet++: Road Network Graph Detection by Transformer with Instance Segmentation and Multi-scale Features Enhancement"
description: "Authors: Zhenhua Xu, Yuxuan Liu, Yuxiang Sun, Ming Liu and Lujia Wang"
---

## Abstract
The graph structure of road networks is critical for downstream tasks of autonomous driving systems, such as global planning, motion prediction and control. In the past, the road network graph is usually manually annotated by human experts, which is time-consuming and labor-intensive. To obtain the road network graph with better effectiveness and efficiency, automatic approaches for road network graph detection are required. Previous works either post-process semantic segmentation maps or propose graph-based algorithms to directly predict the road network graph. However, previous works suffer from hard-coded heuristic processing algorithms and inferior final performance. To enhance the previous SOTA (State-of-the-Art) approach RNGDet, we add an instance segmentation head to better supervise the model training, and enable the model to leverage multi-scale features of the backbone network. Since the new proposed approach is improved from RNGDet, it is named RNGDet++. All approaches are evaluated on a large publicly available dataset. RNGDet++ outperforms baseline models on almost all metrics scores. It improves the topology correctness APLS (Average Path Length Similarity) by around 3%.

## Paper
[pdf](../../assets/pdf/2022_RAL_RNGDetPlusPlus.pdf)

<!-- [arxiv access](https://arxiv.org/abs/2209.07734) -->


## Supplymentary document
More details of our implementation and extra visualization are provided in our [supplementary document](../../assets/pdf/2022_RAL_RNGDetPlusPlus_supplementary.pdf).


## Implementation Code
Inference code is release at our [github page](https://github.com/TonyXuQAQ/RNGDetPlusPlus).

## Demo video
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/pUFdhXgqy50" frameborder="0" allowfullscreen></iframe></p>

## System diagram
<p align="center">
  <img style="width: 100%" src="../../assets/img/RNGDet++.png" />
</p>

