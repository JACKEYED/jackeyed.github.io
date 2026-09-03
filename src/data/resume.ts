/** 简历结构化数据 —— 关于页与首页共用 */

/** 个人简介，首页 Hero 与关于页共用 */
export const BIO: string[] = [
  '复旦大学硕士研究生（研一），西安电子科技大学软件工程本科，综合排名 rank 1/88。我从零复现大语言模型的训练全链路，用强化学习让模型学会在推理中检索与决策，并在实习中把这些能力落地成面向真实用户的多智能体产品。',
  '当前的兴趣是让智能体从「处理语言」走向「感知与行动」——把 LLM、强化学习与具身智能连起来。',
];

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
  /** 关联的项目详情页 */
  href?: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    org: '家育宝智能科技有限公司',
    role: '算法实习生',
    period: '2026.01 – 2026.04',
    product: '智心羽 AI · 心理情绪陪伴系统',
    href: '/research/jiayubao-emotional-companion',
    summary:
      '面向 K12 学生与家长的对话式育儿 / 心理健康产品，已在各大应用商店上线。负责多智能体对话系统的算法侧。',
    points: [
      '基于 LangGraph 设计并实现情绪陪伴多智能体系统：一个三阶段情绪路由 Agent（会话摘要 / 情绪信号 / 推荐）+ 14 个「物件人格」角色化 Agent，每个角色是独立子图，支持 handoff、情绪回流与安全兜底。',
      '训练基于 BERT 的多标签意图 / 年龄段分类器做 Query 路由：focal loss + 标签平滑 + 动态加权损失 + 关键词混合判定，把请求分流到心理 / 百科 / 通用能力，减少误路由。',
      '搭建检索层：年龄段过滤 + LLM 查询扩展 + HyDE + 向量 / BM25 多路召回 + RRF 融合 + CrossEncoder 精排，为心理博士与百科 Agent 提供可追溯的知识上下文。',
      '实现三层长期记忆：会话摘要（阈值触发重写）→ 事实抽取（异步、增量沉淀 topic）→ 低频整理（归并去重、相对时间转绝对），并配合算法端无状态化改造把记忆读写解耦给业务后端。',
      '产品安全底线：两级危机检测（关键词召回 + LLM 复核），命中后绕过 LLM 直接返回含援助热线的固定转介话术，杜绝号码幻觉。',
    ],
    stack: ['LangGraph', 'BERT', 'Elasticsearch', 'BM25 / RRF', 'vLLM', 'FastAPI'],
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
    school: '复旦大学',
    degree: '硕士研究生 · 在读',
    period: '2026.09 – 2029.06（预计）',
    note: '推免',
    highlights: [
      '研究方向：大语言模型训练与对齐、强化学习、智能体系统',
    ],
  },
  {
    school: '西安电子科技大学',
    degree: '软件工程 · 本科',
    period: '2022.09 – 2026.06',
    highlights: [
      '综合排名 rank 1 / 88 · GPA 3.9 / 4 · 推免至复旦大学',
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
    items: ['Pre-training / SFT', 'LoRA', 'DPO', 'PPO / GRPO', 'veRL', 'BERT 微调'],
  },
  {
    group: '检索 & 智能体',
    items: ['RAG / HyDE', 'BM25 / RRF', 'CrossEncoder 精排', 'Elasticsearch', 'faiss-gpu', '长期记忆'],
  },
  {
    group: '工程 & 数据',
    items: ['vLLM', 'FastAPI', 'SQLite', 'NumPy / pandas', 'Git', 'Jupyter'],
  },
];

export const AWARDS: string[] = [
  '2025 陕西省大学生篮球二级联赛暨 CUBAL 陕西赛区冠军',
  '校一等奖学金 · 院三好学生',
  '大学生数学竞赛省级二等奖',
];
