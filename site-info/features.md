# Site Features

A living inventory of every section and interactive element on the site.

---

## Page Sections

### Hero / About (`#about`)
- Status badge with animated ping indicator ("System Status: Online")
- Headshot — mobile (circular centered) and desktop (floating with rotation hover)
- Headline: "Hi, I'm BJ. Wonder. Learn. Lead." with gradient text
- Typewriter effect (`#typewriter`) cycling through taglines
- CTA button → Blog, plus social links (LinkedIn, X, Email)
- Terminal window mockup (desktop: "neofetch"-style info card, mobile: compact version)

### The Stack & Interests (`#stack`)
- 2×2 grid (mobile) / 4-col grid (desktop) of glass cards
- Categories: **Infrastructure** (Linux & Virtualization), **IoT** (Home Automation), **Work** (Leadership & Strategy), **Mobile** (Android Ecosystem)

### Learning & Certifications (`#certifications`)
- Responsive grid of certification cards (2-col md / 3-col lg)
- Each card: provider logo, title, description, "View Official Certificate" link (Credly), expandable "View Course Track" rollup
- Current cert: **Google AI Professional Certificate**
- Placeholder card for next certification

### Projects & Lab (`#projects`)
- 2-col grid of project cards with image, status badge, title, description, and hashtags
- Active projects: **Home Lab Refactor**, **Blue Droid Technologies** (links to bluedroidtech.com)

### The Network (`#network`)
- 3-col grid of community/resource link cards with logos
- Entries: TABGeeks, TechnoTim, NetworkChuck, Jeff Geerling

### Digital Insights (`#thoughts-preview`)
- CTA linking to the blog (`blog.html`)

---

## Interactive Elements

| Element | Description |
|---------|-------------|
| **Mobile Menu** | Hamburger toggle for nav links on small screens |
| **Typewriter Effect** | Cycles through phrases in the hero section |
| **Scroll Reveal** | Elements animate in (fade + slide up) on scroll |
| **Curriculum Rollup** | Toggle to expand/collapse course tracks inside cert cards |
| **Back-to-Top Button** | Fixed button, appears on scroll, smooth-scrolls to top |
| **Cookie Consent Banner** | Slide-up banner with Accept/Deny; controls analytics scripts |
| **Dad Joke** | Random tech joke displayed in the footer |

---

## Additional Pages

| Page | File | Description |
|------|------|-------------|
| Blog Index | `blog.html` | Lists blog posts pulled from cms |
| Blog Post | `post.html` | Single-post template |
| cms | `cms/index.html` | Content management interface for blog posts |
