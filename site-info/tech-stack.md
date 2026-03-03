# Tech Stack

Technologies, services, and tooling powering the BJ Beier site.

---

## Core Technologies

| Technology | Version / Source | Purpose |
|------------|-----------------|---------|
| HTML5 | — | Page structure and semantic markup |
| Tailwind CSS | v3.4 (`tailwind.config.js`) | Utility-first styling |
| Vanilla JavaScript | ES6+ | Interactivity (no framework) |
| Lucide Icons | Latest (via unpkg CDN) | SVG icon set |
| Google Fonts | Inter, Fira Code | Typography |

---

## Build Tools

| Tool | Config File | Purpose |
|------|-------------|---------|
| Tailwind CLI | `tailwind.config.js` | Generates `css/styles.css` from utility classes |
| npm | `package.json` | Dependency management |
| `@tailwindcss/typography` | Plugin in Tailwind config | Prose styling for blog content |

---

## Hosting & Deployment

| Item | Details |
|------|---------|
| Hosting | GitHub Pages |
| Repository | [github.com/bjbeier/bjb](https://github.com/bjbeier/bjb) |
| Custom Domain | cname file present (custom domain configured) |
| SSL | Managed by GitHub Pages |

---

## Third-Party Services

| Service | Purpose | Loaded Via |
|---------|---------|------------|
| Google Analytics / Tag Manager | Site analytics | `js/analytics.js` (gated by cookie consent) |
| Cloudflare Web Analytics | Performance insights | `static.cloudflareinsights.com` |
| Credly | Certificate badge hosting | External links |

---

## Content Management

The site includes a custom cms under `cms/`:

| File | Purpose |
|------|---------|
| `cms/index.html` | Admin interface for managing blog posts |
| `cms/cms.js` | cms application logic |
| `cms/cms.css` | cms-specific styles |
| `cms/blog-loader.js` | Fetches and renders posts on `blog.html` and `post.html` |
| `cms/posts.json` | Blog post data store |

---

## Security Headers

Content Security Policy (CSP) is set via a `<meta>` tag in `index.html`, whitelisting:
- Scripts: `self`, unpkg, Google Tag Manager, Cloudflare Insights
- Styles: `self`, Google Fonts
- Fonts: `self`, Google Fonts (gstatic)
- Images: `self`, data URIs, Google Analytics, placehold.co
- Connections: `self`, Google Analytics, Cloudflare Insights, unpkg
