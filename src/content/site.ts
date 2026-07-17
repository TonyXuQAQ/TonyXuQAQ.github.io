import type { SiteConfig } from "../types/site";

/**
 * ================================================================
 * EDIT THIS FILE TO UPDATE THE HOMEPAGE.
 * ================================================================
 *
 * Images belong in public/:
 *   public/images/profile.jpg          -> "images/profile.jpg"
 *   public/images/publications/x.png   -> "images/publications/x.png"
 *
 * Optional fields can be removed or left empty; the UI hides them.
 * Publication links should only point to verified public resources.
 */
export const siteConfig = {
  meta: {
    title: "Zhenhua Xu | Academic Homepage",
    description:
      "Academic homepage of Zhenhua Xu — autonomous driving, embodied AI, multimodal language models, and robotics.",
    language: "en",
    accentColor: "#245f80",
  },

  navigation: [
    { label: "Home", page: "home" },
    { label: "Publications", page: "publications" },
    { label: "Experience", page: "experience" },
    { label: "Awards", page: "awards" },
  ],

  profile: {
    name: "Zhenhua Xu",
    nativeName: "许振华",
    photo: "images/profile.jpg",
    photoAlt: "Portrait of Zhenhua Xu",
    photoPosition: "left center",
    photoScale: 1.035,
    photoRotation: -1,
    position: "Postdoctoral Researcher · Tsinghua Shuimu Scholar",
    department: {
      label: "School of Vehicle and Mobility",
      url: "https://www.svm.tsinghua.edu.cn/",
    },
    institution: {
      label: "Tsinghua University",
      url: "https://www.tsinghua.edu.cn/en/",
    },
    address: ["Beijing, China"],
    email: "zxubg@connect.ust.hk",
    links: [
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=XK8Wg0MAAAAJ&hl=en",
      },
      { label: "GitHub", url: "https://github.com/TonyXuQAQ" },
      { label: "ORCID", url: "https://orcid.org/0000-0003-0700-2335" },
    ],
    researchInterests: [
      "Autonomous Driving",
      "Multimodal Language Models",
      "Embodied AI",
      "End-to-End Planning",
    ],
    biography: [
      {
        text: "I am a Postdoctoral Researcher and Tsinghua Shuimu Scholar in the School of Vehicle and Mobility at Tsinghua University, working with Prof. Jianqiang Wang. Before joining Tsinghua, I was a Postdoctoral Researcher at The University of Hong Kong, working with Prof. Hengshuang Zhao and Prof. Kwan-Yee Kenneth Wong.",
        links: [
          {
            label: "Prof. Jianqiang Wang",
            url: "https://www.svm.tsinghua.edu.cn/essay/80/1824.html",
          },
          { label: "Prof. Hengshuang Zhao", url: "https://i.cs.hku.hk/~hszhao/" },
          {
            label: "Prof. Kwan-Yee Kenneth Wong",
            url: "https://i.cs.hku.hk/~kykwong/",
          },
        ],
      },
      {
        text: "I received my Ph.D. in Computer Science and Engineering from the Hong Kong University of Science and Technology, where I was a Hong Kong PhD Fellowship Scheme awardee advised by Prof. Huamin Qu and Prof. Ming Liu.",
        links: [
          { label: "Prof. Huamin Qu", url: "http://huamin.org/" },
          {
            label: "Prof. Ming Liu",
            url: "https://scholar.google.com/citations?user=CdV5LfQAAAAJ&hl=en",
          },
        ],
      },
      {
        text: "My research develops interpretable and generalizable embodied intelligence for autonomous driving, with an emphasis on multimodal language models, end-to-end vehicle planning, and embodied decision-making.",
      },
    ],
    notice: {
      label: "Collaboration",
      text: "I welcome research collaborations in autonomous driving, embodied AI, multimodal learning, and robotics.",
    },
  },

  // Keep the newest item first. Use YYYY.MM dates and short venue labels.
  // Publication titles and venues render in bold.
  news: [
    {
      date: "2026.07",
      paperNames: [
        "DriveCode: Domain Specific Numerical Encoding for LLM-Based Autonomous Driving",
      ],
      action: "was accepted by",
      venue: "RA-L",
      featured: true,
    },
    {
      date: "2026.03",
      paperNames: [
        "GRADE: Guiding Realistic Autonomous Driving with Adaptive Trajectory Evolution",
      ],
      action: "was accepted to",
      venue: "CVPR Findings",
    },
    {
      date: "2025.08",
      paperNames: ["LARM: Large Auto-Regressive Model for Long-Horizon Embodied Intelligence"],
      action: "was accepted to",
      venue: "ICML",
    },
    {
      date: "2025.08",
      paperNames: ["VIP: Vision Instructed Pre-training for Robotic Manipulation"],
      action: "was accepted to",
      venue: "ICML",
    },
    {
      date: "2025.07",
      paperNames: [
        "InVDriver: Intra-Instance Aware Vectorized Query-Based Autonomous Driving Transformer",
      ],
      action: "was accepted by",
      venue: "JICV",
    },
    {
      date: "2025.02",
      paperNames: [
        "DriveGPT4-V2: Harnessing Large Language Model Capabilities for Enhanced Closed-Loop Autonomous Driving",
      ],
      action: "was accepted to",
      venue: "CVPR",
      note: "as a Highlight paper",
    },
    {
      date: "2024.09",
      text: "I joined the School of Vehicle and Mobility at Tsinghua University as a Postdoctoral Researcher and Tsinghua Shuimu Scholar.",
    },
    {
      date: "2024.07",
      paperNames: [
        "DriveGPT4: Interpretable End-to-End Autonomous Driving via Large Language Model",
      ],
      action: "was accepted by",
      venue: "RA-L",
    },
    {
      date: "2024.07",
      paperNames: ["InsMapper: Exploring Inner-Instance Information for Vectorized HD Mapping"],
      action: "was accepted to",
      venue: "ECCV",
    },
    {
      date: "2024.05",
      text: "The ICML 2024 workshop “Multi-modal Foundation Model meets Embodied AI” went online.",
    },
    {
      date: "2024.02",
      paperNames: [
        "PGO-IPM: Enhance IPM Accuracy with Pose-Guided Optimization for Low-Cost High-Definition Angular Marking Map Generation",
      ],
      action: "was accepted to",
      venue: "IV",
    },
    {
      date: "2024.01",
      text: "One paper was accepted to ICRA.",
    },
    {
      date: "2023.04",
      paperNames: [
        "FSNet: Redesign Self-Supervised MonoDepth for Full-Scale Depth Prediction for Autonomous Driving",
      ],
      action: "was accepted by",
      venue: "T-ASE",
    },
    {
      date: "2023.03",
      paperNames: [
        "RNGDet++: Road Network Graph Detection by Transformer with Instance Segmentation and Multi-Scale Features Enhancement",
      ],
      action: "was accepted by",
      venue: "RA-L",
    },
    {
      date: "2023.01",
      paperNames: [
        "CenterLineDet: CenterLine Graph Detection for Road Lanes with Vehicle-Mounted Sensors by Transformer for HD Map Generation",
      ],
      action: "was accepted to",
      venue: "ICRA",
    },
    {
      date: "2023.01",
      text: "I passed my Ph.D. thesis defense.",
    },
    {
      date: "2022.06",
      paperNames: ["RNGDet: Road Network Graph Detection by Transformer in Aerial Images"],
      action: "was accepted by",
      venue: "TGRS",
    },
    {
      date: "2022.02",
      paperNames: [
        "csBoundary: City-Scale Road-Boundary Detection in Aerial Images for High-Definition Maps",
      ],
      action: "was accepted by",
      venue: "RA-L / ICRA",
    },
    {
      date: "2022.02",
      paperNames: ["Star-Convolution for Image-Based 3D Object Detection"],
      action: "was accepted to",
      venue: "ICRA",
    },
  ],

  // The homepage highlights entries marked selected: true.
  publications: [
    {
      title: "DriveCode: Domain Specific Numerical Encoding for LLM-Based Autonomous Driving",
      authors: [
        "Zhiye Wang",
        "Yanbo Jiang",
        "Rui Zhou",
        "Bo Zhang",
        "Fang Zhang†",
        "Zhenhua Xu†",
        "Yaqin Zhang",
        "Jianqiang Wang",
      ],
      authorNote: "† Corresponding author",
      venue: "IEEE Robotics and Automation Letters",
      venueShort: "RA-L",
      year: 2026,
      media: {
        type: "image",
        src: "images/publications/drivecode.png",
        alt: "DriveCode architecture for numerical encoding in autonomous driving",
      },
      links: [
        { label: "Project", url: "https://shiftwilliam.github.io/DriveCode/" },
        { label: "Paper", url: "https://arxiv.org/abs/2603.00919" },
        { label: "Code", url: "https://github.com/shiftwilliam/DriveCode" },
        {
          label: "Data",
          url: "https://huggingface.co/datasets/shiftwilliam/DriveCode-data",
        },
      ],
      selected: true,
    },
    {
      title: "GRADE: Guiding Realistic Autonomous Driving with Adaptive Trajectory Evolution",
      authors: [
        "Zehong Ke",
        "Zhiyuan Liu",
        "Yuning Wang†",
        "Jinhao Li",
        "Junkai Jiang",
        "Yanbo Jiang",
        "Zhenhua Xu†",
        "Jianqiang Wang",
      ],
      authorNote: "† Corresponding author",
      venue: "Findings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
      venueShort: "CVPR Findings",
      year: 2026,
      media: {
        type: "image",
        src: "images/publications/grade.png",
        alt: "GRADE trajectory initialization, scoring, adaptive evolution, and generation framework",
      },
      links: [
        {
          label: "Paper",
          url: "https://openaccess.thecvf.com/content/CVPR2026F/papers/Ke_GRADE_Guiding_Realistic_Autonomous_Driving_with_Adaptive_Trajectory_Evolution_CVPRF_2026_paper.pdf",
        },
      ],
      selected: true,
    },
    {
      title: "Learning from Risk: LLM-Guided Generation of Safety-Critical Scenarios with Prior Knowledge",
      authors: [
        "Yuhang Wang",
        "Heye Huang",
        "Zhenhua Xu",
        "Kailai Sun",
        "Baoshen Guo",
        "Jinhua Zhao",
      ],
      publicationType: "preprint",
      venue: "arXiv preprint",
      venueShort: "arXiv",
      year: 2025,
      media: {
        type: "image",
        src: "images/publications/learning-from-risk.png",
        alt: "Learning from Risk LLM-guided CVAE-GNN framework",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2511.20726" },
        { label: "Code", url: "https://github.com/echoleaeperw/LRF" },
      ],
      selected: false,
    },
    {
      title: "Sim-to-Real Dynamic Object Manipulation on Conveyor Systems via Optimization Path Shaping",
      authors: [
        "Zhuoling Li",
        "Jinrong Yang",
        "Yong Zhao",
        "Liangliang Ren",
        "Xiaoyang Wu",
        "Zhenhua Xu",
        "Hengshuang Zhao",
      ],
      publicationType: "preprint",
      venue: "arXiv preprint",
      venueShort: "arXiv",
      year: 2025,
      media: {
        type: "image",
        src: "images/publications/sim-to-real.png",
        alt: "Sim-to-real generalization from a simulated conveyor system to a real robot",
      },
      links: [{ label: "Paper", url: "https://arxiv.org/abs/2508.14042" }],
      selected: false,
    },
    {
      title: "DriveGPT4-V2: Harnessing Large Language Model Capabilities for Enhanced Closed-Loop Autonomous Driving",
      authors: [
        "Zhenhua Xu",
        "Yan Bai",
        "Yujia Zhang",
        "Zhuoling Li",
        "Fei Xia",
        "Kwan-Yee K. Wong",
        "Jianqiang Wang",
        "Hengshuang Zhao",
      ],
      venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
      venueShort: "CVPR",
      year: 2025,
      media: {
        type: "image",
        src: "images/publications/drivegpt4-v2.png",
        alt: "DriveGPT4-V2 closed-loop autonomous driving framework",
      },
      award: "Highlight",
      links: [
        {
          label: "Paper",
          url: "https://openaccess.thecvf.com/content/CVPR2025/papers/Xu_DriveGPT4-V2_Harnessing_Large_Language_Model_Capabilities_for_Enhanced_Closed-Loop_Autonomous_CVPR_2025_paper.pdf",
        },
      ],
      selected: true,
    },
    {
      title: "InVDriver: Intra-Instance Aware Vectorized Query-Based Autonomous Driving Transformer",
      authors: [
        "Bo Zhang",
        "Heye Huang",
        "Chunyang Liu",
        "Yaqin Zhang",
        "Zhenhua Xu†",
      ],
      authorNote: "† Corresponding author",
      venue: "Journal of Intelligent and Connected Vehicles",
      venueShort: "JICV",
      year: 2025,
      media: {
        type: "image",
        src: "images/publications/invdriver.png",
        alt: "InVDriver autonomous driving architecture",
      },
      links: [{ label: "Paper", url: "https://arxiv.org/abs/2502.17949" }],
      selected: false,
    },
    {
      title: "LARM: Large Auto-Regressive Model for Long-Horizon Embodied Intelligence",
      authors: [
        "Zhuoling Li",
        "Xiaogang Xu",
        "Zhenhua Xu",
        "Ser-Nam Lim",
        "Hengshuang Zhao",
      ],
      venue: "International Conference on Machine Learning",
      venueShort: "ICML",
      year: 2025,
      media: {
        type: "image",
        src: "images/publications/larm.png",
        alt: "LARM framework for long-horizon embodied intelligence",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2405.17424" },
        { label: "Project", url: "https://lizhuoling.github.io/LARM_webpage/" },
      ],
      selected: false,
    },
    {
      title: "VIP: Vision Instructed Pre-training for Robotic Manipulation",
      authors: [
        "Zhuoling Li",
        "Liangliang Ren",
        "Jinrong Yang",
        "Yong Zhao",
        "Xiaoyang Wu",
        "Zhenhua Xu",
        "Xiang Bai",
        "Hengshuang Zhao",
      ],
      venue: "International Conference on Machine Learning",
      venueShort: "ICML",
      year: 2025,
      media: {
        type: "image",
        src: "images/publications/virt.png",
        alt: "Vision-instructed robotic manipulation framework",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2410.07169" },
        {
          label: "Model",
          url: "https://huggingface.co/Zhuoling98/VIRT_droid_pretrain",
        },
      ],
      selected: false,
    },
    {
      title: "DriveGPT4: Interpretable End-to-End Autonomous Driving via Large Language Model",
      authors: [
        "Zhenhua Xu",
        "Yujia Zhang",
        "Enze Xie",
        "Zhen Zhao",
        "Yong Guo",
        "Kwan-Yee K. Wong",
        "Zhenguo Li",
        "Hengshuang Zhao",
      ],
      venue: "IEEE Robotics and Automation Letters",
      venueShort: "RA-L",
      year: 2024,
      media: {
        type: "image",
        src: "images/publications/drivegpt4.png",
        alt: "DriveGPT4 interpretable autonomous driving framework",
      },
      award: "ESI Hot Paper",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2310.01412" },
        { label: "Project", url: "https://tonyxuqaq.github.io/projects/DriveGPT4/" },
        {
          label: "Code",
          url: "https://cloud.tsinghua.edu.cn/d/adbc8fa3a2fc420ca7bc/",
        },
      ],
      selected: true,
    },
    {
      title: "InsMapper: Exploring Inner-Instance Information for Vectorized HD Mapping",
      authors: ["Zhenhua Xu", "Kwan-Yee K. Wong", "Hengshuang Zhao"],
      venue: "European Conference on Computer Vision",
      venueShort: "ECCV",
      year: 2024,
      media: {
        type: "image",
        src: "images/publications/insmapper.png",
        alt: "InsMapper architecture overview",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2308.08543" },
        { label: "Project", url: "https://tonyxuqaq.github.io/InsMapper/" },
        { label: "Code", url: "https://github.com/TonyXuQAQ/InsMapper" },
      ],
      selected: true,
    },
    {
      title: "PGO-IPM: Enhance IPM Accuracy with Pose-Guided Optimization for Low-Cost High-Definition Angular Marking Map Generation",
      authors: [
        "Hongji Liu",
        "Linwei Zheng",
        "Xiaoyang Yan",
        "Zhenhua Xu",
        "Bohuan Xue",
        "Yang Yu",
        "Ming Liu",
      ],
      venue: "IEEE Intelligent Vehicles Symposium",
      venueShort: "IV",
      year: 2024,
      media: {
        type: "image",
        src: "images/publications/pgo-ipm.png",
        alt: "PGO-IPM pose-guided optimization system overview",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2209.07737" },
        { label: "Project", url: "https://liuhongji.site/PGO-IPM/" },
      ],
      selected: false,
    },
    {
      title: "RNGDet++: Road Network Graph Detection by Transformer with Instance Segmentation and Multi-Scale Features Enhancement",
      authors: [
        "Zhenhua Xu",
        "Yuxuan Liu",
        "Yuxiang Sun",
        "Lujia Wang",
        "Ming Liu",
      ],
      venue: "IEEE Robotics and Automation Letters",
      venueShort: "RA-L",
      year: 2023,
      media: {
        type: "image",
        src: "images/publications/rngdet-plusplus.png",
        alt: "RNGDet++ road network graph detection framework",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2209.10150" },
        {
          label: "Project",
          url: "https://tonyxuqaq.github.io/projects/RNGDetPlusPlus/",
        },
        { label: "Code", url: "https://github.com/TonyXuQAQ/RNGDetPlusPlus" },
      ],
      selected: true,
    },
    {
      title: "CenterLineDet: CenterLine Graph Detection for Road Lanes with Vehicle-Mounted Sensors by Transformer for HD Map Generation",
      authors: [
        "Zhenhua Xu",
        "Yuxuan Liu",
        "Yuxiang Sun",
        "Lujia Wang",
        "Ming Liu",
      ],
      venue: "IEEE International Conference on Robotics and Automation",
      venueShort: "ICRA",
      year: 2023,
      media: {
        type: "image",
        src: "images/publications/centerlinedet.png",
        alt: "CenterLineDet lane centerline graph detection framework",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2209.07734" },
        {
          label: "Project",
          url: "https://tonyxuqaq.github.io/projects/CenterLineDet/",
        },
        { label: "Code", url: "https://github.com/TonyXuQAQ/CenterLineDet" },
      ],
      selected: false,
    },
    {
      title: "FSNet: Redesign Self-Supervised MonoDepth for Full-Scale Depth Prediction for Autonomous Driving",
      authors: [
        "Yuxuan Liu",
        "Zhenhua Xu",
        "Huaiyang Huang",
        "Lujia Wang",
        "Ming Liu",
      ],
      venue: "IEEE Transactions on Automation Science and Engineering",
      venueShort: "T-ASE",
      year: 2023,
      media: {
        type: "image",
        src: "images/publications/fsnet.png",
        alt: "FSNet full-scale monocular depth prediction framework",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2304.10719" },
        { label: "Project", url: "https://sites.google.com/view/fsnet/home" },
        { label: "Code", url: "https://github.com/Owen-Liuyuxuan/FSNet" },
      ],
      selected: false,
    },
    {
      title: "RNGDet: Road Network Graph Detection by Transformer in Aerial Images",
      authors: [
        "Zhenhua Xu",
        "Yuxuan Liu",
        "Lu Gan",
        "Yuxiang Sun",
        "Lujia Wang",
        "Ming Liu",
      ],
      venue: "IEEE Transactions on Geoscience and Remote Sensing",
      venueShort: "TGRS",
      year: 2022,
      media: {
        type: "image",
        src: "images/publications/rngdet.png",
        alt: "RNGDet road network graph detection method",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2202.07824" },
        { label: "Project", url: "https://tonyxuqaq.github.io/projects/RNGDet/" },
        { label: "Code", url: "https://github.com/TonyXuQAQ/RNGDetPlusPlus" },
      ],
      selected: false,
    },
    {
      title: "csBoundary: City-Scale Road-Boundary Detection in Aerial Images for High-Definition Maps",
      authors: [
        "Zhenhua Xu",
        "Yuxuan Liu",
        "Lu Gan",
        "Xiangcheng Hu",
        "Yuxiang Sun",
        "Lujia Wang",
        "Ming Liu",
      ],
      venue: "IEEE Robotics and Automation Letters",
      venueShort: "RA-L",
      year: 2022,
      media: {
        type: "image",
        src: "images/publications/csboundary.png",
        alt: "csBoundary city-scale road-boundary detection pipeline",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2111.06020" },
        {
          label: "Project",
          url: "https://tonyxuqaq.github.io/projects/csBoundary/",
        },
      ],
      selected: false,
    },
    {
      title: "Star-Convolution for Image-Based 3D Object Detection",
      authors: ["Yuxuan Liu", "Zhenhua Xu", "Ming Liu"],
      venue: "IEEE International Conference on Robotics and Automation",
      venueShort: "ICRA",
      year: 2022,
      media: {
        type: "image",
        src: "images/publications/star-convolution.png",
        alt: "Star-Convolution image-based 3D object detection method",
      },
      links: [
        { label: "Code", url: "https://github.com/Owen-Liuyuxuan/visualDet3D" },
      ],
      selected: false,
    },
    {
      title: "CP-Loss: Connectivity-Preserving Loss for Road Curb Detection in Autonomous Driving with Aerial Images",
      authors: ["Zhenhua Xu", "Yuxiang Sun", "Lujia Wang", "Ming Liu"],
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
      venueShort: "IROS",
      year: 2021,
      media: {
        type: "image",
        src: "images/publications/cp-loss.png",
        alt: "CP-Loss connectivity-preserving curb detection method",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2107.11920" },
        { label: "Project", url: "https://tonyxuqaq.github.io/projects/CP-Loss/" },
      ],
      selected: false,
    },
    {
      title: "Topo-Boundary: A Benchmark Dataset on Topological Road-Boundary Detection Using Aerial Images for Autonomous Driving",
      authors: ["Zhenhua Xu", "Yuxiang Sun", "Ming Liu"],
      venue: "IEEE Robotics and Automation Letters",
      venueShort: "RA-L",
      year: 2021,
      media: {
        type: "image",
        src: "images/publications/topo-boundary.png",
        alt: "Topo-Boundary dataset and benchmark",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2103.17119" },
        {
          label: "Project",
          url: "https://tonyxuqaq.github.io/projects/topo-boundary/",
        },
        { label: "Code", url: "https://github.com/TonyXuQAQ/Topo-boundary" },
      ],
      selected: false,
    },
    {
      title: "iCurb: Imitation Learning-Based Detection of Road Curbs Using Aerial Images for Autonomous Driving",
      authors: ["Zhenhua Xu", "Yuxiang Sun", "Ming Liu"],
      venue: "IEEE Robotics and Automation Letters",
      venueShort: "RA-L",
      year: 2021,
      media: {
        type: "image",
        src: "images/publications/icurb.png",
        alt: "iCurb imitation-learning road curb detection method",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2103.17118" },
        { label: "Project", url: "https://tonyxuqaq.github.io/projects/iCurb/" },
        { label: "Code", url: "https://github.com/TonyXuQAQ/iCurb" },
      ],
      selected: false,
    },
    {
      title: "The Role of the Hercules Autonomous Vehicle During the COVID-19 Pandemic: An Autonomous Logistic Vehicle for Contactless Goods Transportation",
      authors: [
        "Tianyu Liu*",
        "Qinghai Liao*",
        "Lu Gan",
        "Fulong Ma",
        "Jie Cheng",
        "Xupeng Xie",
        "Zhe Wang",
        "Yingbing Chen",
        "Yilong Zhu",
        "Shuyang Zhang",
        "Zhengyong Chen",
        "Yang Liu",
        "Meng Xie",
        "Yang Yu",
        "Zitong Guo",
        "Guang Li",
        "Peidong Yuan",
        "Dong Han",
        "Yuying Chen",
        "Haoyang Ye",
        "Jianhao Jiao",
        "Peng Yun",
        "Zhenhua Xu",
        "Hengli Wang",
        "Huaiyang Huang",
        "Sukai Wang",
        "Peide Cai",
        "Yuxiang Sun",
        "Yandong Liu",
        "Lujia Wang",
        "Ming Liu",
      ],
      authorNote: "* Equal contribution",
      venue: "IEEE Robotics & Automation Magazine",
      venueShort: "RAM",
      year: 2021,
      media: {
        type: "image",
        src: "images/publications/hercules.png",
        alt: "Hercules autonomous logistic vehicle",
        fit: "cover",
        position: "center 46%",
      },
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2004.07480" },
      ],
      selected: false,
    },
    {
      title: "Visual Analysis of Discrimination in Machine Learning",
      authors: [
        "Qianwen Wang",
        "Zhenhua Xu",
        "Zhutian Chen",
        "Yong Wang",
        "Shixia Liu",
        "Huamin Qu",
      ],
      venue: "IEEE Transactions on Visualization and Computer Graphics",
      venueShort: "TVCG",
      year: 2021,
      media: {
        type: "image",
        src: "images/publications/visual-analysis.png",
        alt: "Visual analytics system for discrimination in machine learning",
      },
      links: [{ label: "Paper", url: "https://arxiv.org/abs/2007.15182" }],
      selected: false,
    },
    {
      title: "Shadow Tracking of Moving Target Based on CNN for Video SAR System",
      authors: ["Yun Zhang", "Shiyu Yang", "Hongbo Li", "Zhenhua Xu"],
      venue: "IEEE International Geoscience and Remote Sensing Symposium",
      venueShort: "IGARSS",
      year: 2018,
      media: {
        type: "image",
        src: "images/publications/shadow-tracking.png",
        alt: "CNN-based shadow tracking for video SAR",
      },
      links: [],
      selected: false,
    },
    {
      title: "A New Shadow Tracking Method to Locate the Moving Target in SAR Imagery Based on KCF",
      authors: [
        "Zhenhua Xu",
        "Yun Zhang",
        "Hongbo Li",
        "Huilin Mu",
        "Yuan Zhuang",
      ],
      venue: "International Conference in Communications, Signal Processing, and Systems",
      venueShort: "CSPS",
      year: 2017,
      media: {
        type: "image",
        src: "images/publications/kcf.png",
        alt: "KCF-based shadow tracking in SAR imagery",
      },
      links: [],
      selected: false,
    },
  ],

  education: [
    {
      organization: "Hong Kong University of Science and Technology",
      organizationUrl: "https://hkust.edu.hk/",
      role: "Ph.D. in Computer Science and Engineering",
      period: "2018.09 – 2023.03",
      location: "Hong Kong SAR, China",
      advisors: [
        { label: "Prof. Huamin Qu", url: "http://huamin.org/" },
        {
          label: "Prof. Ming Liu",
          url: "https://scholar.google.com/citations?user=CdV5LfQAAAAJ&hl=en",
        },
      ],
      note: "Hong Kong PhD Fellowship Scheme (HKPFS) awardee.",
    },
    {
      organization: "University of California, Los Angeles",
      organizationUrl: "https://www.ucla.edu/",
      role: "Cross-disciplinary Scholars in Science and Technology Program",
      period: "2017.07 – 2017.09",
      location: "Los Angeles, USA",
      description: "GPA: 4.0 / 4.0.",
    },
    {
      organization: "Harbin Institute of Technology",
      organizationUrl: "https://en.hit.edu.cn/",
      role: "B.Eng. in Electronic Information Engineering",
      period: "2014.09 – 2018.06",
      location: "Harbin, China",
      description: "Score: 91.19 / 100; rank: 1 / 88.",
    },
  ],

  experience: [
    {
      organization: "Tsinghua University",
      organizationUrl: "https://www.svm.tsinghua.edu.cn/",
      role: "Postdoctoral Researcher",
      period: "2024.09 – Present",
      location: "Beijing, China",
      advisors: [
        {
          label: "Prof. Jianqiang Wang",
          url: "https://www.svm.tsinghua.edu.cn/essay/80/1824.html",
        },
      ],
      topics: ["End-to-end autonomous driving", "vehicle safety", "VLM for driving"],
      note: "Tsinghua Shuimu Scholar.",
    },
    {
      organization: "The University of Hong Kong",
      organizationUrl: "https://www.hku.hk/",
      role: "Postdoctoral Researcher",
      period: "2023.04 – 2024.07",
      location: "Hong Kong SAR, China",
      advisors: [
        { label: "Prof. Hengshuang Zhao", url: "https://i.cs.hku.hk/~hszhao/" },
        {
          label: "Prof. Kwan-Yee Kenneth Wong",
          url: "https://i.cs.hku.hk/~kykwong/",
        },
      ],
      topics: ["Autonomous driving", "MLLM for driving", "embodied AI"],
    },
  ],

  service: [
    {
      title: "Workshop Organization",
      items: [
        "Organizing Committee — ICML 2024 Workshop on Multi-modal Foundation Model meets Embodied AI (MFM-EAI)",
      ],
    },
    {
      title: "Peer Review",
      compactLists: [
        {
          label: "Conferences",
          items: [
            "CVPR",
            "ECCV",
            "NeurIPS",
            "ICLR",
            "ICML",
            "ICRA",
            "IROS",
            "CoRL",
            "AAAI",
            "BMVC",
            "AAV",
          ],
        },
        {
          label: "Journals",
          items: ["TPAMI", "RA-L", "TGRS", "IJCV", "T-ITS"],
        },
      ],
    },
    {
      title: "Teaching",
      items: [
        "COMP3711 — Design and Analysis of Algorithms, Teaching Assistant",
        "COMP3311 — Database Management Systems, Teaching Assistant",
      ],
    },
  ],

  awards: [
    {
      title:
        "Excellent Young Scientists Fund (Overseas), National Natural Science Foundation of China (NSFC)",
      period: "2025",
    },
    { title: "Tsinghua Shuimu Scholar", period: "2024" },
    { title: "Hong Kong PhD Fellowship Scheme (HKPFS)", period: "2018" },
    { title: "Outstanding Graduate of Harbin Institute of Technology", period: "2018" },
    { title: "Guanghua Scholarship", period: "2018" },
    {
      title: "UCLA CSST (Cross-disciplinary Scholars in Science and Technology)",
      period: "2017",
    },
    { title: "National Scholarship", period: "2017" },
    { title: "Meritorious Winner in MCM/ICM", period: "2016" },
    { title: "Renmin Scholarship", period: "2014–2018" },
    { title: "University Merit Student", period: "2014–2018" },
    {
      title: "Provincial 1st Prize in the National High School Mathematics League (No. 49)",
      period: "2013",
    },
  ],

  footer: {
    lastUpdated: "July 2026",
    visitorMapUrl: "",
  },
} satisfies SiteConfig;
