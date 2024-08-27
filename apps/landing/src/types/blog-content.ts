import { z } from 'astro:content';

export const blogContent = z.object({
  title: z.string(),
  description: z.string(),
  introduction: z.string().optional(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

export type BlogContent = z.infer<typeof blogContent>;
