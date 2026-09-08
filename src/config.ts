/**
 * 站点级配置 —— 个人信息、导航、社交链接、统计脚本都集中在这里。
 * 修改这里即可，不需要动组件代码。
 */

export const SITE = {
  /** 部署地址：GitHub Pages 用户站点。仓库名必须是 jackeyed.github.io */
  url: 'https://jackeyed.github.io',
  name: '高博远',
  nameEn: 'Boyuan Gao',
  /** 一句话定位，出现在首页大标题下方与 <meta description> */
  title: '大模型 · 强化学习 · 智能体系统',
  tagline:
    '从零复现大模型训练全链路，用强化学习教会模型检索与决策，并把这些能力落地成面向真实用户的多智能体产品。',
  description:
    '高博远（Boyuan Gao）的个人研究主页。复旦大学计算与智能创新学院硕士研究生，西安电子科技大学软件工程本科（rank 1/88）。研究方向：LLM 训练与对齐、Agentic 系统、强化学习、具身智能。',
  locale: 'zh-CN',
  /** 时区，用于文章日期展示 */
  timezone: 'Asia/Shanghai',
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: '首页', href: '/' },
  { label: '研究', href: '/research' },
  { label: '笔记', href: '/notes' },
  { label: '关于', href: '/about' },
];

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/JACKEYED', handle: 'JACKEYED' },
  { label: 'Email', href: 'mailto:2795181099@qq.com', handle: '2795181099@qq.com' },
  // 需要时补充：
  // { label: 'Google Scholar', href: '', handle: '' },
  // { label: '知乎', href: '', handle: '' },
];

/** 可下载简历（放在 /public/cv/ 下）。换成不加密的 PDF 后更新文件名即可。 */
export const CV = {
  href: '/cv/GaoBoyuan-CV.pdf',
  updated: '2026-09',
} as const;

/**
 * 访问统计。默认使用 GoatCounter（隐私友好、静态站点可用、免费）。
 * 启用步骤见 README。留空则不加载任何统计脚本。
 */
export const ANALYTICS = {
  /** 例如 'jackeyed' —— 对应 https://jackeyed.goatcounter.com */
  goatcounter: '',
  /** 或使用 Cloudflare Web Analytics，填入 token */
  cloudflareToken: '',
} as const;
