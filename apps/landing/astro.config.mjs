import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import { fileURLToPath } from 'node:url';

const PORT = Number(import.meta.env.PORT ?? 4321);
const site = import.meta.env.APP_DOMAIN ?? `https://your-domain.com`;

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
    host: true,
    site,
  }),
  output: 'hybrid',
  outDir: '../../dist/apps/landing',
  site,
  server: {
    host: true,
    port: PORT,
  },
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
      configFile: fileURLToPath(
        new URL('./tailwind.config.mjs', import.meta.url)
      ),
    }),
    react(),
    sitemap(),
  ],
});
