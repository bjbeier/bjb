# Branding & Visual Identity

Design tokens, color palette, and visual guidelines for the BJ Beier site.

---

## Color Palette

All custom colors are defined in `tailwind.config.js` under `theme.extend.colors.brand`.

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-dark` | `#0f172a` | Primary background (Slate 900) |
| `brand-accent` | `#38bdf8` | Accent / highlight color (Sky 400) |
| `brand-terminal` | `#22c55e` | Terminal prompt green (Green 500) |

### Supplementary Colors (via Tailwind defaults)

| Purpose | Example Classes | Notes |
|---------|----------------|-------|
| Body text | `text-slate-300`, `text-slate-400` | Light gray on dark background |
| Headings | `text-white` | Pure white for contrast |
| Muted text | `text-slate-500`, `text-slate-600` | Footer, labels |
| CTA buttons | `bg-blue-600`, `hover:bg-blue-700` | Standard blue action buttons |
| Gradient text | `#38bdf8 → #2563eb` | Hero headline gradient (Sky → Blue) |
| Selection highlight | `selection:bg-brand-accent` | Accent-colored text selection |

---

## Typography

Fonts loaded from Google Fonts with `display=swap` for performance.

| Role | Font Family | Weights | Tailwind Class |
|------|-------------|---------|----------------|
| Primary (body, headings) | **Inter** | 300, 400, 600, 800 | `font-sans` |
| Monospace (terminal, code) | **Fira Code** | 300, 400, 600 | `font-mono` |

---

## Logo / Wordmark

The site uses a text-based logo rendered in Fira Code:

```
<BJ.Beier/>
```

- Angle brackets and slash in `brand-accent` (`#38bdf8`)
- "BJ.Beier" in white
- Used in both the navbar and footer

---

## Design Patterns

- **Dark mode only** — no light theme
- **Glassmorphism** — `.glass-card` with semi-transparent backgrounds and backdrop blur
- **Terminal aesthetic** — mockup terminal windows with red/yellow/green dots
- **Reveal on scroll** — elements fade + slide in via `.reveal` class
- **Smooth scroll** — `scroll-smooth` on `<html>`
- **Responsive** — mobile-first with Tailwind breakpoints (`sm`, `md`, `lg`)

---

## Tone & Voice

- Professional but approachable — "Leader & Tech Enthusiast"
- Personality-driven — dad jokes in the footer, "Geek Mode" status
- Tagline style: concise, terminal-inspired language
- Bio: First-person, conversational  
