import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// ข่าว: src/content/news/{th|en}/<slug>.md  (slug เดียวกันทั้งสองภาษา)
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().default(''),
    excerpt: z.string().default(''),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// หน้าเนื้อหายาว: src/content/pages/{th|en}/<slug>.md
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
  }),
});

export const collections = { news, pages };
