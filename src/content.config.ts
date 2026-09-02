import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** 副标题 / 一句话说明 */
      summary: z.string(),
      /** 标签，如 ['大模型算法', 'RL'] */
      tags: z.array(z.string()).default([]),
      /** 角色 */
      role: z.string().optional(),
      /** 时间区间，如 '2025' 或 '2025.03 – 2025.06' */
      period: z.string().optional(),
      /** 关键指标，展示在卡片与详情页顶部 */
      metrics: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .default([]),
      stack: z.array(z.string()).default([]),
      links: z
        .array(z.object({ label: z.string(), href: z.string().url() }))
        .default([]),
      cover: image().optional(),
      /** 排序权重，越小越靠前 */
      order: z.number().default(100),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, notes };
