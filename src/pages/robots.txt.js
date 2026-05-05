export const prerender = false;
import { getSiteSettings } from '../lib/directus.js';

export async function GET() {
  try {
    const site = await getSiteSettings();
    return new Response(site.core_robots_txt || 'User-agent: *\nAllow: /', {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch (e) {
    return new Response('User-agent: *\nAllow: /', {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}