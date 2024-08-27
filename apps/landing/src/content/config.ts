import { defineCollection } from 'astro:content';
import { blogContent } from '../types/blog-content.ts';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: blogContent,
});

export const collections = { blog };
