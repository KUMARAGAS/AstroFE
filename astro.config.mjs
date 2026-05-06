import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true, // This helps with local development
    },
    // Enable Node.js compatibility for axios and other Node.js libraries
    nodejsCompat: true,
  }),
  vite: {
    ssr: {
      external: ['node:util', 'node:stream', 'node:path', 'node:http', 'node:https', 'node:url', 'node:fs', 'node:crypto', 'node:assert', 'node:tty', 'node:http2', 'node:zlib', 'node:events'],
    },
  },
});