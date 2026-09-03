# jackeyed.github.io

高博远（Boyuan Gao）的个人研究主页 —— 基于 [Astro](https://astro.build) 构建，静态输出，托管于 GitHub Pages。

方向：大语言模型训练与对齐 · 强化学习 · 智能体系统。

## 技术栈

| 用途 | 选型 |
| --- | --- |
| 框架 | Astro 5（静态输出） |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`） |
| 内容 | Content Collections + MDX（`src/content/`） |
| 公式 | remark-math + rehype-katex |
| 代码高亮 | Shiki（明/暗双主题） |
| 字体 | Inter / Newsreader / JetBrains Mono（`@fontsource`），中文走系统字体 |
| 部署 | GitHub Actions → GitHub Pages |

## 本地开发

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 产物在 dist/
npm run preview
```

## 目录结构

```
src/
  config.ts            站点配置：身份、导航、社交链接、统计（改这里，别改组件）
  data/resume.ts       结构化简历数据（关于页 + 首页共用）
  content/
    projects/*.mdx     研究项目 case study（frontmatter schema 见 src/content.config.ts）
    notes/*.mdx        研究笔记 / 博客
  components/           UI 组件
  layouts/Base.astro   页面骨架（SEO、主题、页头页脚）
  pages/               路由
scripts/
  make-og.mjs          生成 public/og.png 社交分享图  ->  npm run og
  make-cv.mjs           用本机 Chrome 把 cv.html 渲染成 PDF  ->  npm run cv
  cv.html              简历 PDF 的源文件（内容与站点一致）
```

## 新增一篇研究项目

在 `src/content/projects/` 新建 `my-project.mdx`：

```mdx
---
title: 项目标题
summary: 一句话说明
tags: ['大模型算法', 'RL']
period: '2025'
featured: true          # 是否出现在首页「精选研究」
order: 10                # 数字越小越靠前
metrics:
  - { label: '关键指标', value: '0.303' }
stack: ['PyTorch', 'veRL']
links:
  - { label: 'GitHub', href: 'https://github.com/...' }
---

## 正文用 Markdown / MDX，支持 $LaTeX$ 公式与代码块
```

## 新增一篇笔记

在 `src/content/notes/` 新建 `.mdx`，frontmatter 需要 `title` / `description` / `date`（可选 `tags` / `updated` / `draft`）。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，**名字必须是 `jackeyed.github.io`**（用户站点）。
2. 把本目录推上去：

   ```bash
   git init
   git add .
   git commit -m "init: personal site"
   git branch -M main
   git remote add origin https://github.com/JACKEYED/jackeyed.github.io.git
   git push -u origin main
   ```

3. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 之后每次 push 到 `main` 会自动构建并发布。几分钟后访问 <https://jackeyed.github.io>。

### 绑定自定义域名（可选）

在 `public/` 下新建 `CNAME` 文件写入域名（如 `boyuangao.com`），并把 `src/config.ts` 里的 `SITE.url` 改成对应地址，然后在域名服务商处配置 DNS。

## 访问统计（可选）

默认不加载任何统计脚本。启用 **GoatCounter**（隐私友好、免费、静态站点可用）：

1. 到 <https://www.goatcounter.com> 注册，拿到站点代号（如 `jackeyed`）。
2. 在 `src/config.ts` 里设置 `ANALYTICS.goatcounter = 'jackeyed'`。
3. 重新部署。统计脚本只在生产构建中注入。

也支持 Cloudflare Web Analytics：填 `ANALYTICS.cloudflareToken`。

## 更新简历 PDF

- 内容改 `scripts/cv.html`，然后 `npm run cv` 重新生成 `public/cv/GaoBoyuan-CV.pdf`。
- 或直接把自己导出的、**未加密**的 PDF 覆盖到 `public/cv/GaoBoyuan-CV.pdf`。

## 换头像

替换 `src/assets/portrait.jpeg`（首页与关于页共用，建议竖版近 3:4）。
