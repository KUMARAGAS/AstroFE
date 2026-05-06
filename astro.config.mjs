import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import cloudflare from '@astrojs/cloudflare';

//import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',

  adapter: cloudflare(),

  vite: {
    ssr: {
      external: ['path']
    }
  },

  /*site: 'https://kade.lk',
  integrations: [sitemap()],*/
});