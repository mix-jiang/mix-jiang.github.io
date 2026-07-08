import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entrySchema = z.object({
  title: z.string(),
  date: z.string(), // YYYY-MM
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  draft: z.boolean().default(false),
  // case study 版式(有 toc 即启用侧边目录 + scroll-spy 布局)
  toc: z.array(z.string()).optional(),
  role: z.string().optional(),
  org: z.string().optional(),
  year: z.string().optional(),
  sideTags: z.array(z.string()).optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: entrySchema,
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: entrySchema,
});

export const collections = { projects, posts };
