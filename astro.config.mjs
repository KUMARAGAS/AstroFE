import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Server-side rendering (SSR)
  output: 'server',

  adapter: cloudflare({
    // 1. Node.js built-in modules (util, path) 
    nodeCompat: true, 
    
    // 2. Local development Cloudflare simulate 
    platformProxy: {
      enabled: true,
    },
  }),

  vite: {
    ssr: {
      // 'path' 'util' 'url'
      external: ['node:path', 'node:util', 'node:url'],
    },
    resolve: {
      // modules  browser polyfills
      alias: {
        util: 'util',
      },
    },
  },
});