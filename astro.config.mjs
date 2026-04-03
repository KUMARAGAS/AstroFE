import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

//import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',

  adapter: node({
    mode: 'standalone'
  }),

  vite: {
    ssr: {
      external: ['path']
    }
  },

  /*site: 'https://kade.lk',
  integrations: [sitemap()],*/
});