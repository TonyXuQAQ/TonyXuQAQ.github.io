---
layout: page
title: "InsightMapper: A closer look at inner-instance information for vectorized High-Definition Mapping "
description: "Authors: Zhenhua Xu, Kenneth K.Y. Wong, Hengshuang Zhao"
---

### Abstract 
Vectorized high-definition (HD) maps contain detailed information about surrounding road elements, which are crucial for various downstream tasks in modern autonomous driving vehicles, such as vehicle planning and control. Recent works have attempted to directly detect the vectorized HD map as a point set prediction task, resulting in significant improvements in detection performance. However, these approaches fail to analyze and exploit the inner-instance correlations between predicted points, impeding further advancements. To address these challenges, we investigate the utilization of inner-**INS**tance information for vectorized h**IGH**-definition mapping through **T**ransformers and introduce InsightMapper. This paper presents three novel designs within InsightMapper that leverage inner-instance information in distinct ways, including hybrid query generation, inner-instance query fusion, and inner-instance feature aggregation. Comparative experiments are conducted on the NuScenes dataset, showcasing the superiority of our proposed method. InsightMapper surpasses previous state-of-the-art (SOTA) methods by 5.78 mAP and 5.12 TOPO, which assess topology correctness. Simultaneously, InsightMapper maintains high efficiency during both training and inference phases, resulting in remarkable comprehensive performance.


### Supplementary
Comming soon...

### Code and data
Comming soon...


### Contact
For any questions, please send email to zhxuv at hku dot hk.

<!-- ### Citation
```
@article{xu2021topo,
  title={Topo-boundary: A benchmark dataset on topological road-boundary detection using aerial images for autonomous driving},
  author={Xu, Zhenhua and Sun, Yuxiang and Liu, Ming},
  journal={IEEE Robotics and Automation Letters},
  volume={6},
  number={4},
  pages={7248--7255},
  year={2021},
  publisher={IEEE}
}

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
``` -->