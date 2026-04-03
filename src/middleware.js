import { getRedirects } from './lib/directus.js';

export async function onRequest({ request }, next) {
  try {
    const url = new URL(request.url);
    const pathname = url.pathname;

    const redirects = await getRedirects();

    const match = redirects.find(r => 
      r.core_url_old === pathname && 
      (r.core_is_active === true || r.core_is_active === 'true')
    );

    if (match) {
      return Response.redirect(
        new URL(match.core_url_new, url.origin),
        Number(match.core_response_code)
      );
    }
  } catch (e) {
    console.error('Middleware error:', e.message);
  }
  return next();
}