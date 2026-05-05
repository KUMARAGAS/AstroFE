import axios from 'axios';

const directus = axios.create({
  baseURL: import.meta.env.DIRECTUS_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.DIRECTUS_TOKEN}`
  }
});

export async function getBusinessDetails() {
  const res = await directus.get('/items/core_business_details');
  return res.data.data;
}

export async function getSiteSettings() {
  const res = await directus.get('/items/core_site_settings');
  return res.data.data;
}

export async function getPages() {
  const res = await directus.get('/items/core_pages', {
    params: {
      filter: { core_status: { _eq: 'published' } }
    }
  });
  return res.data.data;
}

export async function getPageBySlug(slug) {
  const res = await directus.get('/items/core_pages', {
    params: {
      filter: {
        core_page_slug: { _eq: slug },
        core_status: { _eq: 'published' }
      },
      limit: 1
    }
  });
  const pages = res.data.data;
  return pages.length > 0 ? pages[0] : null;
}

export async function getNavigation(placement) {
  const res = await directus.get('/items/core_navigation', {
    params: {
      filter: { core_placement: { _eq: placement } },
      fields: 'core_id,core_label,core_url_nature,core_external_url,core_open_in_new_tab,core_parent,core_page.core_page_slug'
    }
  });
  return res.data.data;
}

export async function getLegalContent() {
  const res = await directus.get('/items/core_legal_content');
  return res.data.data;
}

export async function getRedirects() {
  const res = await directus.get('/items/core_redirects');
  console.log('Raw redirects:', res.data.data);
  return res.data.data;
}