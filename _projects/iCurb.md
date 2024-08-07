---
layout: page
title: "iCurb: Imitation Learning-based Detection of Road Curbs using Aerial Images for Autonomous Driving"
description: "Authors: Zhenhua Xu, Yuxiang Sun, Ming Liu"
---
## Abstract
Detection of road curbs is an essential capability for autonomous driving. It can be used for autonomous vehicles to determine drivable areas on roads. Usually, road curbs are detected on-line using vehicle-mounted sensors, such as video cameras and 3-D Lidars. However, on-line detection using video cameras may suffer from challenging illumination conditions, and Lidar-based approaches may be difficult to detect far-away road curbs due to the sparsity issue of point clouds. In recent years, aerial images are becoming more and more worldwide available. We find that the visual appearances between road areas and off-road areas are usually different in aerial images, so we propose a novel solution to detect road curbs off-line using aerial images. The input to our method is an aerial image, and the output is directly a graph (i.e., vertices and edges) representing road curbs. To this end, we formulate the problem as an imitation learning problem, and design a novel network and an innovative training strategy to train an agent to iteratively find the road-curb graph. The experimental results on a public dataset confirm the effectiveness and superiority of our method.

## Paper
[IEEE access](https://ieeexplore.ieee.org/document/9345473)

[arxiv access](https://arxiv.org/abs/2103.17118)

## Demo video
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/fMhcZm_MPUE" frameborder="0" allowfullscreen></iframe></p>

## Supplymentary document
More details of our implementation and extra visualization are provided in our [supplementary document](../../assets/pdf/2020_RAL_ICRA_supplementary_V3.pdf).

## Implementation Code
iCurb is implemented in our new benchmark dataset for road-boundary detection. The data and code can be obtain in [this repo](https://github.com/TonyXuQAQ/Topo-boundary/tree/master/graph_based_baselines/iCurb).

## Contact
Any questons, comments and suggestions are welcomed! Please send email to **zxubg at connect dot ust dot hk**.

## Citation
```
@article{xu2021icurb,
  title={iCurb: Imitation Learning-Based Detection of Road Curbs Using Aerial Images for Autonomous Driving},
  author={Xu, Zhenhua and Sun, Yuxiang and Liu, Ming},
  journal={IEEE Robotics and Automation Letters},
  volume={6},
  number={2},
  pages={1097--1104},
  year={2021},
  publisher={IEEE}
}
```