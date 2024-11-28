import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({
    analytics: true,
    nodeVersion: '18.x'
  }),
});

