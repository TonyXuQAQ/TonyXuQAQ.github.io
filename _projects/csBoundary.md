---
layout: page
title: "csBoundary: City-scale Road-boundary Detection in Aerial Images for High-definition Maps"
description: "Authors: Zhenhua Xu, Yuxuan Liu, Lu Gan, Xiangcheng Hu, Yuxiang Sun, Lujia Wang, Ming Liu"
---

## Abstract
High-Definition (HD) maps can provide precise geometric and semantic information of static traffic environments for autonomous driving. Road-boundary is one important information presented in HD maps since it distinguishes between road areas and off-road areas, which can guide vehicles to drive within road areas. But it is labor-intensive to annotate road boundaries for HD maps at the city scale. To enable automatic HD map annotation, current work uses semantic segmentation or iterative graph growing for road-boundary detection. However, the former could not ensure topological correctness since it works at the pixel level, while the latter suffers from inefficiency and drifting issues. To provide a solution to the aforementioned problems, in this letter, we propose a novel system termed csBoundary to automatically detect road boundaries at the city scale for HD map annotation. Our network takes as input an aerial image patch, and directly infers the continuous road-boundary graph (i.e., vertices and edges) from this image. To generate the city-scale road-boundary graph, we stitch the obtained graphs from all the image patches. Our csBoundary is evaluated and compared on a public benchmark dataset. The results demonstrate our superiority.

## Paper
[IEEE access](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9721009)

[arxiv access](https://arxiv.org/abs/2111.06020)

## Demo video
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/yTrdGgicHDE" frameborder="0" allowfullscreen></iframe></p>

## Supplymentary document
More details of our implementation and extra visualization are provided in our [supplementary document](../../assets/pdf/2021_RAL_ICRA_supplementary.pdf).

## Citation
```
@article{xu2022csboundary,
  title={csBoundary: City-Scale Road-Boundary Detection in Aerial Images for High-Definition Maps},
  author={Xu, Zhenhua and Liu, Yuxuan and Gan, Lu and Hu, Xiangcheng and Sun, Yuxiang and Liu, Ming and Wang, Lujia},
  journal={IEEE Robotics and Automation Letters},
  volume={7},
  number={2},
  pages={5063--5070},
  year={2022},
  publisher={IEEE}
}
```