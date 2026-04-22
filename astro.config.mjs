import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kade.lk', // Update with your actual domain
  output: 'server',

  adapter: node({
    mode: 'standalone'
  }),

  vite: {
    ssr: {
      external: ['path']
    }
  },

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize: (item) => {
        // Customize priority for specific pages
        if (item.url.includes('pricing')) {
          item.priority = 0.9;
        } else if (item.url.includes('hydra')) {
          item.priority = 0.85;
        } else if (item.url === 'https://kade.lk/') {
          item.priority = 1.0;
        }
        // Set more frequent updates for main pages
        if (item.url === 'https://kade.lk/' || item.url.includes('hydra')) {
          item.changefreq = 'weekly';
        } else {
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ]
});