/** 简历结构化数据 —— 关于页与首页共用 */

export const FOCUS: { title: string; desc: string }[] = [
  {
    title: 'LLM 训练与对齐',
    desc: '从零复现 LLaMA 架构轻量模型，跑通 Pre-training → SFT → LoRA → DPO 全链路。',
  },
  {
    title: 'Agentic 系统与强化学习',
    desc: '用 RL 让模型在推理中自主检索、调用工具，涌现多步决策与自我纠错能力。',
  },
  {
    title: '多智能体协作',
    desc: '基于 LangGraph 构建 Router + 角色化 Agent 协同框架，做意图路由与长期记忆。',
  },
  {
    title: '量化金融与具身智能',
    desc: '正从「语言智能体」走向「能够感知与行动的智能体」。',
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location?: string;
  product?: string;
  summary: string;
  points: string[];
  stack?: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    org: '家育宝智能科技有限公司',
    role: '算法实习生',
    period: '2026.01 – 2026.04',
    product: '智心羽 AI',
    summary:
      '语音 + 文本双驱动的多轮对话机器人，面向家长与学生的育儿心理健康辅导垂直场景，已在各大应用商店上线。',
    points: [
      '设计并训练基于 BERT 的三分类文本路由模型，实现用户 Query 的意图识别与自动分发，将请求精准路由至业务 / 心理健康 / 通用 Agent，提升多 Agent 系统的响应效率与服务质量。',
      '基于 LangGraph 实现心理情绪陪伴多智能体系统，构建「心理健康 Router Agent + 14 个角色化 Agent」协同框架，支持推荐、切换、回流与高风险安全兜底。',
      '实现双层长期记忆模块：长期记忆采用轻量化 Mem0 框架，基于 SQLite 构建用户画像与对话 episode 存储，并通过异步事实抽取更新昵称、情绪、主题等信息。',
    ],
    stack: ['BERT', 'LangGraph', 'Mem0', 'SQLite'],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  note?: string;
  highlights: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    school: '西安电子科技大学',
    degree: '软件工程 · 本科',
    period: '2022.09 – 2026.06',
    note: '已保研至复旦大学',
    highlights: [
      '综合排名 rank 1 / 88 · GPA 3.9 / 4',
      '核心课程：C 语言程序设计 100 · 计算机组成与结构 II 100 · 数据结构 96 · C++ 面向对象 95 · 计算机网络 93',
      '校一等奖学金 · 院三好学生 · 大学生数学竞赛省级二等奖 · 高数校内竞赛优秀奖',
      '英语 CET-4 / CET-6',
    ],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: '语言 & 框架',
    items: ['Python', 'PyTorch', 'C / C++', 'Transformers', 'LangChain / LangGraph', 'FastAPI'],
  },
  {
    group: '大模型 & RL',
    items: ['Pre-training / SFT', 'LoRA', 'DPO', 'PPO / GRPO', 'veRL', 'RAG / 检索增强'],
  },
  {
    group: '工程 & 数据',
    items: ['faiss-gpu', 'Mem0', 'SQLite', 'NumPy / pandas', 'Git', 'Jupyter'],
  },
];

export const AWARDS: string[] = [
  '2025 陕西省大学生篮球二级联赛暨 CUBAL 陕西赛区冠军',
  '校一等奖学金 · 院三好学生',
  '大学生数学竞赛省级二等奖',
];
