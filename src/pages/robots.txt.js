export const prerender = false;

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /*.json$
Disallow: /*?*sort=
Crawl-delay: 1

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

Sitemap: https://kade.lk/sitemap-index.xml`;

  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain' }
  });
}