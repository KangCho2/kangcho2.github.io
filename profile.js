// Edit personal information and research content here.
// Set work[i].github to the full repository URL when ready; empty values show "Code forthcoming".
window.PORTFOLIO = {
  "name": "Kang Choi",
  "role": "Electrical & Electronics Engineering",
  "tagline": "Aspiring hardware engineer focused on digital circuit design, computer architecture, and FPGA implementation.",
  "experience": [
    {
      "period": "Jan 2026–Present",
      "role": "Undergraduate Research Intern",
      "institution": "Seoul National University",
      "detail": "Under the supervision of Prof. Namjun Kim"
    },
    {
      "period": "2022–Present",
      "role": "Undergraduate Student",
      "institution": "Chung-Ang University",
      "detail": "School of Electrical and Electronics Engineering"
    }
  ],
  "photo": "assets/profile.jpg",
  "photoPosition": "50% 25%",
  "interests": [
    "AI Algorithms",
    "Computer Architecture & Hardware Design",
    "Hardware–Software Co-Design"
  ],
  "links": {
    "cv": "",
    "github": "https://github.com/KangCho2",
    "email": "chlrkd0206@naver.com"
  },
  "work": [
    {
      "title": "CueMoE",
      "authors": ["Kang Choi"],
      "authorshipNote": "Independent research · Sole author",
      "type": "Research",
      "description": "Visual-Cue-Guided Expert Prefetching for Storage-Backed MoE Vision-Language Model Inference",
      "status": "AAAI 2027 · Phase 1 rejected · Further research underway for submission to another venue",
      "tags": [
        "Mixture of Experts",
        "Vision-Language Models",
        "Expert Prefetching"
      ],
      "url": "https://openreview.net/forum?id=HLd59R9GgT",
      "linkLabel": "View on OpenReview",
      "abstract": [
        "Mixture-of-Experts (MoE) vision-language models activate only a few experts per token, but their full expert set can exceed GPU high-bandwidth memory (HBM), exposing repeated storage-to-GPU loading during decoding. We present CueMoE, a visual-cue-guided expert prefetching system that predicts future layer- and step-conditioned demand from the multimodal projector feature available before decoding. Our functional runtime reads exact BF16 expert weights from node-local non-rotational storage. A bounded pinned-memory pool stages the weights before they are installed in fixed GPU slots. The original router remains the sole execution authority, and exact reactive fallback handles every miss.",
        "On DeepSeek-VL2-tiny, a request-level predictor trained on 5,000 COCO images raises Cov@16 from 43.43% for frequency selection to 44.82%. On Kimi-VL-A3B-Instruct, visual cues improve request-level Cov@8 and Cov@16 by 4.86 and 5.52 percentage points and post-prefill decode-demand coverage by 3.93 and 2.91 points, respectively, with positive gains in all 26 MoE layers across three seeds. The DeepSeek step-conditioned predictor recovers 2.947 of the router’s six experts, compared with 2.791 for frequency. Batched 32-step top-four selection takes 0.359 ms. A four-step horizon yields significant savings for 8-, 16-, and 32-token decoding. With 12 slots per layer, CueMoE saves approximately 3.73 GiB of allocated HBM and reduces median decode latency by 9.04% at 16 tokens and 7.66% at 32 tokens. In the DeepSeek physical runtime, generated tokens and final-step full-vocabulary logits match reactive execution."
      ],
      "figure": {
        "src": "assets/figures/cuemoe.png",
        "alt": "CueMoE architecture: early visual prediction, bounded storage pipeline, and router-authoritative execution.",
        "caption": "Figure 1. CueMoE’s storage-backed prefetching path. Visual cues and step identity predict expert candidates; bounded staging and fixed GPU slots preserve the original router and exact reactive fallback."
      },
      "github": ""
    },
    {
      "title": "Absolute-Time-Aligned Self-Disagreement",
      "authors": ["Kang Choi"],
      "authorshipNote": "Independent research · Sole author",
      "type": "Research",
      "description": "Absolute-Time-Aligned Self-Disagreement for Selective Trajectory Planner Execution",
      "status": "IEEE ICCE 2027 · Awaiting review",
      "tags": [
        "Autonomous Driving",
        "Trajectory Planning",
        "Selective Execution"
      ],
      "url": "",
      "linkLabel": "View research",
      "abstract": [
        "Selective execution can reduce trajectory-planning computation by invoking a Large planner only when its additional computation is likely to improve the output of an always-executed Small planner. The decision must be made before either the Large-planner output or future ground truth is available. We propose absolute-time-aligned self-disagreement, which uses the Small planner’s own prediction history as a causal reliability signal. Predictions from different frames are transformed to a common world frame and compared only when they refer to the same absolute future time. Six aligned distances, six validity masks, and four summary statistics form a compact 16-D SELF_DISTANCE representation. Across eight trained planner seeds in open-loop evaluation on held-out MetaDrive scenarios, the method achieves 1.658 m average displacement error (ADE) with a threshold targeting 30% validation invocation and producing 39.0% mean test invocation. A lag- and dimension-matched unaligned control substantially degrades routing quality: at a 30% analytical exact call budget, aligned SELF_DISTANCE obtains 1.694 m ADE versus 1.912 m, and has lower mean ADE throughout the evaluated 10–50% budget range. Measured batch-1 inference on an NVIDIA A100 reduces mean latency by 9.08% relative to Always Large, while p95 latency increases because selected frames execute both planners serially."
      ],
      "figure": {
        "src": "assets/figures/self-disagreement.png",
        "alt": "Three-part overview of Small planner history, absolute-time alignment, and selective routing using 16-dimensional SELF_DISTANCE features.",
        "caption": "Figure 1. Selective execution using Small prediction history. Six comparisons align predictions of the same absolute future time; the 16-D feature drives a validation-selected router, and Large runs only after selection."
      },
      "github": ""
    },
    {
      "title": "Time-Aligned Selective Trajectory Prediction",
      "authors": ["Heechan Ju", "Junbeom Lee", "Kang Choi", "Minjun Kim", "Seongmin Jang", "Soonbeom Kwon"],
      "authorshipNote": "Kang Choi · Co-first author",
      "type": "Research",
      "description": "Selective Execution of Autonomous Driving Trajectory Prediction Models Using Time-Aligned Prediction History",
      "status": "7th Korean Artificial Intelligence Conference · Accepted; final review pending",
      "tags": [
        "Autonomous Driving",
        "Trajectory Prediction",
        "Temporal Alignment"
      ],
      "url": "",
      "linkLabel": "View research",
      "abstract": [
        "This study compares the current and past trajectory predictions of a Small model at the same future time and in the same coordinate frame to learn whether a Large model will improve the prediction. A fixed or adaptive threshold is applied to the resulting score, with both approaches sharing the same features and router. Across eight held-out evaluation drives, the fixed approach reduced average displacement error by 1.67% relative to the Small-only baseline, with a Large-model invocation rate of 12.8%. Mean sequential inference time on an A100 was 7.01 ms, excluding image preprocessing."
      ],
      "abstractNote": "English translation of the original Korean abstract.",
      "figure": {
        "src": "assets/figures/atsc.svg",
        "alt": "ATSC pipeline with a shared 28-D representation and router, fixed or adaptive thresholds, and conditional execution of the Large model.",
        "caption": "Figure 1. Shared structure of the fixed and adaptive policies. English redrawing of the original figure: both share 28-D ATSC features and router weights, differing only in threshold selection."
      },
      "github": ""
    },
    {
      "title": "UMoE-HW",
      "authorshipNote": "Team research with faculty guidance from Seoul National University and RiT.",
      "type": "Research",
      "description": "Mixture-of-Experts Hardware Research",
      "status": "Ongoing research",
      "tags": [
        "Mixture of Experts",
        "Hardware Design",
        "Computer Architecture"
      ],
      "detail": "Research in progress. The abstract and main figure will be added when the work is ready to share.",
      "url": "",
      "linkLabel": "View research",
      "abstract": [],
      "github": ""
    }
  ],
  "awards": [
    {
      "year": "2026",
      "title": "Encouragement Award",
      "organization": "Artificial Intelligence Hardware Competition",
      "project": "Hardware–Software Co-Design for an Unmanned Retail Kiosk",
      "contribution": "Quantization algorithm development in software and FPGA implementation.",
      "note": ""
    },
    {
      "year": "2025",
      "title": "Grand Prize",
      "organization": "MJY Corporate Experience Project · First Cohort",
      "project": "Educational Arduino Kit Development",
      "contribution": "PCB circuit design.",
      "note": ""
    }
  ]
};
