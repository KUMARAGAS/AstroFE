const DIRECTUS_URL = import.meta.env.PUBLIC_DIRECTUS_URL;
const DIRECTUS_TOKEN = import.meta.env.PUBLIC_DIRECTUS_TOKEN;

console.log("My Token is:", DIRECTUS_TOKEN);

async function directusRequest(endpoint, options = {}) {
  const url = `${DIRECTUS_URL}${endpoint}`;
  const headers = {
    'Authorization': `Bearer ${DIRECTUS_TOKEN}`,
    'Content-Type': 'application/json',
    ...options.headers
  };

  const response = await fetch(url, {
    ...options,
    headers
  });

  if (!response.ok) {
    throw new Error(`Directus API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getSiteSettings() {
  try {
    const data = await directusRequest('/items/core_site_settings');
    console.log('Site settings:', data.data);
    return data.data;
  } catch (error) {
    console.error("Directus Fetch Error:", error.message);
    throw error;
  }
}

export async function getBusinessDetails() {
  const data = await directusRequest('/items/core_business_details');
  console.log('Business details:', data.data);
  return data.data;
}

export async function getPages() {
  const data = await directusRequest('/items/core_pages?filter[core_status][_eq]=published');
  console.log('Pages:', data.data);
  return data.data;
}

export async function getPageBySlug(slug) {
  const data = await directusRequest(`/items/core_pages?filter[core_page_slug][_eq]=${encodeURIComponent(slug)}&filter[core_status][_eq]=published&limit=1`);
  return data.data.length > 0 ? data.data[0] : null;
}

export async function getNavigation(placement) {
  const data = await directusRequest(`/items/core_navigation?filter[core_placement][_eq]=${encodeURIComponent(placement)}&fields=core_id,core_label,core_url_nature,core_external_url,core_open_in_new_tab,core_parent,core_page.core_page_slug`);
  return data.data;
}

export async function getLegalContent() {
  const data = await directusRequest('/items/core_legal_content');
  return data.data;
}

export async function getRedirects() {
  const data = await directusRequest('/items/core_redirects');
  console.log('Raw redirects:', data.data);
  return data.data;
}