import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
});