/** 简历结构化数据 —— 关于页与首页共用 */

/** 个人简介，首页 Hero 与关于页共用 */
export const BIO: string[] = [
  '复旦大学计算与智能创新学院硕士研究生，西安电子科技大学软件工程本科，综合排名 rank 1/88。我从零复现大语言模型的训练全链路，用强化学习让模型学会在推理中检索与决策，并在实习中把这些能力落地成面向真实用户的系统。',
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
    org: '格物求索',
    role: 'AI 投研工程 / 算法实习生',
    period: '2026.05 – 2026.08',
    location: '金融量化公司',
    href: '/research/gewu-auditable-ai-systems',
    summary:
      '金融量化公司。独立负责三个 AI 驱动的工程系统，主导架构设计与量化投研领域建模。三个系统共享同一条主线：可审计——每一步的输入、判断、产物都留痕，可回溯、可回滚，人工只在必要时介入。',
    points: [
      'AIFinance · AI 因子研究工程系统（Python）：可审计的串行研报处理流水线——解析 → 清洗 → 因子提案 → GP 表达式 → 因子值计算 → 多维回测验证 → review 闭环；「文档–运行」分层 + 质量卡机制，SHA-256 确定文档身份、上游未过则下游只读等待。',
      'SignalDeck · 竞品情报监控系统（Node.js，约 2 万行 / 300 测试）：竞品评级引擎——多源召回 → BGE-M3 粗筛 → 两轮 LLM 事实提取核验 → 规则引擎定级；80 样本校准闭环显著降低「误判 P0」；源码级竞品对比 + 自研工程知识地图。',
      'TaskHub · 局域网研发协作控制面：把研发任务拆成不可跳过的可审计阶段，强制 Development Agent 不得自审、由独立只读 Review Agent 审核，中央 Dashboard / API 统一编排多人协作与归属。',
    ],
    stack: ['Python', 'Node.js', 'PostgreSQL', 'Codex 编排', 'BGE-M3', 'MinerU'],
  },
  {
    org: '家育宝智能科技有限公司',
    role: '算法实习生',
    period: '2026.01 – 2026.04',
    product: '智心羽 AI · 心理情绪陪伴系统',
    href: '/research/jiayubao-emotional-companion',
    summary:
      '面向 K12 学生与家长的对话式育儿 / 心理健康产品，已在各大应用商店上线。负责多智能体对话系统的算法侧。',
    points: [
      '设计并训练三分类文本路由模型（BERT）做 Query 意图识别与自动分发，将请求精准路由至业务 Agent / 心理健康 Agent / 通用 Agent，提升多 Agent 系统响应效率与服务质量。',
      '基于 LangGraph 设计并实现心理情绪陪伴多智能体系统：一个三阶段情绪路由 Agent（会话摘要 / 情绪信号 / 推荐）+ 14 个「物件人格」角色化 Agent，支持推荐、切换、回流与高风险安全兜底。',
      '实现双层长期记忆模块：轻量化 Mem0 记忆框架 + 基于 SQLite 的用户画像与对话 episode 存储，通过异步事实抽取更新昵称、情绪、主题等信息。',
    ],
    stack: ['LangGraph', 'BERT', 'Mem0', 'SQLite', 'vLLM'],
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
    degree: '计算与智能创新学院 · 硕士研究生',
    period: '2026.09 – 至今',
    note: '推免',
    highlights: ['研究方向：大语言模型训练与对齐、强化学习、智能体系统'],
  },
  {
    school: '西安电子科技大学',
    degree: '软件工程 · 本科',
    period: '2022.09 – 2026.06',
    highlights: [
      '综合排名 rank 1 / 88 · GPA 3.9 / 4',
      '核心课程：C 语言程序设计 100 · 计算机组成与结构 II 100 · 数据结构 96 · C++ 面向对象程序设计 95 · 计算机网络 93',
      '大学生数学竞赛省级二等奖 · 校一等奖学金 · 院三好学生',
      '英语 CET-4 / CET-6',
    ],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: '大模型 & RL',
    items: ['PyTorch', 'Transformers', 'LoRA / DPO', 'PPO / GRPO', 'veRL'],
  },
  {
    group: 'Agent & 工程',
    items: [
      'LangGraph',
      '可审计 Agent 流水线设计',
      '规模化编排 Codex 编码 Agent',
      'Node.js',
      'FastAPI',
      'PostgreSQL',
    ],
  },
  {
    group: '检索 & 量化',
    items: [
      'faiss',
      'BGE-M3',
      '混合检索排序',
      '因子 / IC / 回测验证',
      'Tushare',
      'MinerU / PDF 解析',
    ],
  },
];

export const AWARDS: string[] = [
  '2025 陕西省大学生篮球二级联赛暨 CUBAL：陕西赛区冠军 · 西北赛区第一 · 全国赛第六',
  '校一等奖学金 · 院三好学生',
  '大学生数学竞赛省级二等奖',
];
