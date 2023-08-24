---
layout: page
title: ""
description: ""
---
<h3 style="text-align: center;"><strong>InsightMapper: A closer look at inner-instance information for vectorized High-Definition Mapping</strong></h3>
<h6 style="text-align: center;"><a href="https://tonyxuqaq.github.io/" title="ZhenhuaXu">Zhenhua Xu</a>,
<a href="https://i.cs.hku.hk/~kykwong/" title="Kenneth K.Y. Wong">Kenneth K.Y. Wong</a>,
<a href="https://hszhao.github.io/" title="Hengshuang Zhao">Hengshuang Zhao</a></h6>
<h6 style="text-align: center;">The University of Hong Kong</h6>



<h5 style="text-align: center;"><a href="https://tonyxuqaq.github.io/" >Paper</a> |
<a href="https://i.cs.hku.hk/~kykwong/" >Appendix</a> |
<a href="https://hszhao.github.io/" >Code</a></h5>

### Abstract 
Vectorized high-definition (HD) maps contain detailed information about surrounding road elements, which are crucial for various downstream tasks in modern autonomous driving vehicles, such as vehicle planning and control. Recent works have attempted to directly detect the vectorized HD map as a point set prediction task, resulting in significant improvements in detection performance. However, these approaches fail to analyze and exploit the inner-instance correlations between predicted points, impeding further advancements. To address these challenges, we investigate the utilization of inner-**INS**tance information for vectorized h**IGH**-definition mapping through **T**ransformers and introduce InsightMapper. This paper presents three novel designs within InsightMapper that leverage inner-instance information in distinct ways, including hybrid query generation, inner-instance query fusion, and inner-instance feature aggregation. Comparative experiments are conducted on the NuScenes dataset, showcasing the superiority of our proposed method. InsightMapper surpasses previous state-of-the-art (SOTA) methods by 5.78 mAP and 5.12 TOPO, which assess topology correctness. Simultaneously, InsightMapper maintains high efficiency during both training and inference phases, resulting in remarkable comprehensive performance.

### Supplementary
[Appendix document](../../assets/pdf/2024_InsightMapper_Appendix.pdf)

### Code and data
Comming soon... For latest update, please refer to our [github repo](https://github.com/TonyXuQAQ/InsightMapper/tree/main). 

### Demos
We visualize live demos of InsightMapper under various scenarios, with different whether and time. Some scenes may have complicated road intersection areas. Short demos are visualized with 2Hz, while long demos have 4Hz FPS.
#### Demo 1. Short, 2Hz, day time
![Alt Text](../../assets/img/gif/0.gif)
#### Demo 2. Short, 2Hz, day time
![Alt Text](../../assets/img/gif/1.gif)
#### Demo 3. Short, 2Hz, day time, complicated road intersections
![Alt Text](../../assets/img/gif/4.gif)
#### Demo 4. Short, 2Hz, night
![Alt Text](../../assets/img/gif/7.gif)
#### Demo 5. Long, 4Hz, day time, complicated road intersections
![Alt Text](../../assets/img/gif/2.gif)
#### Demo 6. Long, 4Hz, day time, complicated road intersections
![Alt Text](../../assets/img/gif/3.gif)
#### Demo 7. Long, 4Hz, day time, rainy, complicated road intersections
![Alt Text](../../assets/img/gif/5.gif)
#### Demo 8. Long, 4Hz, night
![Alt Text](../../assets/img/gif/6.gif)

### Contact
For any questions, please send email to zhxuv at hku dot hk or open an issue in the [github repo](https://github.com/TonyXuQAQ/InsightMapper/tree/main).

### Citation
```
@article{xu2023insightmapper,
  title={InsightMapper: A Closer Look at Inner-instance Information for Vectorized High-Definition Mapping},
  author={Xu, Zhenhua and Wong, Kenneth KY and Zhao, Hengshuang},
  journal={arXiv preprint arXiv:2308.08543},
  year={2023}
}
```