# 🔍 SEO Setup & Google Search Console Integration

## What's Been Added

### 1. **Sitemap Configuration** (`astro.config.mjs`)
- ✅ Auto-generated XML sitemap with all pages
- ✅ SEO-optimized priorities:
  - **Homepage**: 1.0 (highest)
  - **Pricing/Hydra Pages**: 0.85-0.9
  - **Other Pages**: 0.7
- ✅ Update frequency (changefreq) customized by page type
- ✅ Last modified timestamps automated

**Location**: `/sitemap-index.xml` and `/sitemap-*.xml`

---

### 2. **Robots.txt** (`src/pages/robots.txt.js`)
- ✅ Allows all crawlers by default
- ✅ Blocks AI training bots (GPTBot, CCBot, anthropic-ai)
- ✅ Auto-references your sitemap
- ✅ Sets crawl-delay for server optimization

**Location**: `/robots.txt`

---

### 3. **SEO Meta Tags** (`src/layouts/BaseLayout.astro`)
#### Essential Meta Tags:
- Title tags (page-specific)
- Meta descriptions
- Keywords
- Canonical URLs (prevents duplicate content issues)

#### Open Graph Tags (Social Media):
- og:title, og:description, og:image
- og:type, og:url, og:locale
- Perfect for Facebook, LinkedIn, Slack previews

#### Twitter Card Tags:
- twitter:card, twitter:title, twitter:description
- twitter:image
- Optimizes sharing on Twitter/X

#### Additional SEO Signals:
- Author meta tag
- Theme color
- Language declaration
- Robots meta directive
- Revisit-after frequency

---

### 4. **JSON-LD Structured Data** (Schema.org)
Added organization schema with:
- Business name and contact info
- Address (LocalBusiness type)
- Known about keywords
- Social media links
- Price range indicator

**Benefits**:
- Rich snippets in Google search results
- Better knowledge panel
- Voice search optimization
- Improved CTR and visibility

---

### 5. **Google Search Console Verification**
Two methods are available:

#### Option A: **Meta Tag Verification** (Current Setup)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: **https://kade.lk** (or your domain)
3. Choose "URL prefix" property type
4. Click "Meta tag" verification method
5. Copy the verification code
6. Replace `YOUR_VERIFICATION_CODE` in:
   - `src/layouts/BaseLayout.astro` (line with `google-site-verification`)
   - Rebuild and deploy

#### Option B: **HTML File Verification** (Backup)
1. Update `public/google-search-console-verification.html` with your code
2. Google will check `https://kade.lk/google-search-console-verification.html`

#### Option C: **DNS TXT Record** (For domain ownership)
If you have full domain access, add a TXT record for faster verification across all subdomains.

---

## ✅ Quick Setup Checklist

- [ ] **Step 1**: Update domain in `astro.config.mjs` (currently `https://kade.lk`)
- [ ] **Step 2**: Build and deploy: `npm run build && npm run preview`
- [ ] **Step 3**: Create/verify [Google Search Console property](https://search.google.com/search-console)
- [ ] **Step 4**: Add verification code to `src/layouts/BaseLayout.astro`
- [ ] **Step 5**: Build and redeploy
- [ ] **Step 6**: Submit sitemap in Google Search Console:
  - Performance → Index → Sitemaps
  - Enter: `https://kade.lk/sitemap-index.xml`
- [ ] **Step 7**: Wait 48-72 hours for indexing + crawling

---

## 📊 Google Search Console Features (After Verification)

Once verified, you'll unlock:

| Feature | Benefit |
|---------|---------|
| **Index Coverage** | See which pages are indexed, which are blocked |
| **Performance** | Track clicks, impressions, CTR, average position |
| **Mobile Usability** | Detect mobile issues before users see them |
| **Core Web Vitals** | Monitor page speed, interaction, visual stability |
| **Security Issues** | Alerts for hacks, malware, spam |
| **Sitemap Status** | Verify sitemap was found and submitted |
| **URL Inspection** | Debug why a specific URL isn't indexed |

---

## 🚀 SEO Enhancements by Page

### For All Pages (Automatic):
- Canonical URLs prevent duplicate content penalties
- Open Graph tags enable rich previews
- JSON-LD schema boosts search appearance

### Per-Page Setup:
Each page component passes custom props to BaseLayout:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Custom Page Title | Hydra Dynamics"
  description="Unique description for this page (~160 chars)"
  image="https://kade.lk/custom-page-image.jpg"
  keywords="relevant, keywords, here"
>
  <!-- Page content -->
</BaseLayout>
```

---

## 📝 Current Meta Tags Summary

| Page | Priority | Change Freq | Status |
|------|----------|-------------|--------|
| Home (/) | 1.0 | weekly | ✅ Auto-generated |
| /pricing | 0.9 | weekly | ✅ Auto-generated |
| /hydra-* | 0.85 | weekly | ✅ Auto-generated |
| /pages | 0.7 | monthly | ✅ Auto-generated |

---

## 🔗 Key Links

- **Google Search Console**: https://search.google.com/search-console
- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **Schema.org Reference**: https://schema.org
- **Astro SEO Docs**: https://docs.astro.build/en/guides/integrations-guide/sitemap/

---

## 🎯 Next Steps for Maximum SEO Impact

1. **Add Image Optimization**: Compress and lazy-load images (already using Unsplash via query params)
2. **Internal Linking**: Link related pages together for better crawling
3. **Blog/Content**: Add a blog section for fresh content signals
4. **Mobile Testing**: Verify mobile usability in Search Console
5. **Core Web Vitals**: Monitor and optimize for Google's ranking signals
6. **Backlink Strategy**: Build authority links from industry sites

---

## ⚠️ Important Reminders

- **Verification Code**: Replace placeholder with your actual Google code
- **Domain Name**: Update all instances of `kade.lk` if using a different domain
- **Images**: Replace `og-image.jpg` with actual image (1200×630px recommended)
- **Contact Info**: Update phone number and email in JSON-LD schema
- **Social Links**: Update Twitter, LinkedIn, GitHub URLs if applicable

---

Generated: 2024 | Hydra Dynamics SEO Optimization
