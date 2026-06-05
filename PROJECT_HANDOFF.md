# Stack By Ansh — Project Handoff Document

> **Read this first.** This document gives any incoming developer or AI agent a complete picture of what has been built, how it works, what's pending, and how to continue without breaking anything.

---

## 1. Project Identity

| Field | Value |
|---|---|
| **Product Name** | Stack By Ansh |
| **Founder** | Ansh Gupta |
| **Purpose** | Founder/studio website for a systems engineering studio |
| **Primary Domain** | `stackbyansh.com` (purchased, DNS connection pending) |
| **Current Live URL** | Deployed via Vercel — check `vercel.json` for the active deployment |
| **GitHub Repo** | `https://github.com/AnshGupta-77/Ansh_Gupta_porfolio` |
| **Sales Email** | `sales@stackbyansh.com` |
| **Personal Email** | `ansh.gupta0625@gmail.com` |
| **Brand Instagram** | `@stackby_ansh` |

### Positioning
This is NOT a personal developer portfolio. It represents **Stack By Ansh** — a systems engineering studio that designs and builds complete digital product ecosystems, AI systems, realtime platforms, and operational infrastructure for founders and startups. All copy, CTAs, and framing should reflect a founder/studio identity, not a freelancer.

---

## 2. How to Run Locally

```bash
# Install dependencies
npm install

# Run dev server (port 3000)
npm run dev

# Build for production (always verify before pushing)
npm run build

# Run type checker only
npx tsc --noEmit
```

**No environment variables are required.** All configuration is in `/config/*.ts` files. The only external service keys are:
- Google Analytics: `G-7G3WC9R36Q` — hardcoded in `app/layout.tsx`
- Formspree: `xkoedryl` — hardcoded in `components/sections/FeedbackWall.tsx`

---

## 3. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS v4 + inline styles | ^4 |
| Animation | Framer Motion | ^12 |
| Animation | GSAP | ^3.15 |
| Smooth Scroll | Lenis | ^1.3.23 |
| Icons | Lucide React | ^1.16 |
| Image Optimization | Sharp | ^0.34.5 |
| Runtime | React 19 | 19.2.4 |

**Important:** This uses Next.js App Router (not Pages Router). All routes are in `/app/`. Components use `'use client'` directive where needed.

**Styling approach:** The project uses a hybrid — Tailwind utility classes for layout/flex/grid, and inline `style={{}}` objects for colors, sizing, and precise design values. Do NOT try to convert all inline styles to Tailwind; the design system depends on the inline approach for the dark cinematic aesthetic.

---

## 4. Repository & Deployment

### Git
- Branch: `main` — this is what Vercel deploys from
- No staging branch exists currently
- Push to `main` → Vercel auto-deploys within 60–90 seconds

### Vercel
- `vercel.json` is at the project root and handles:
  - Build/dev/install commands
  - Video file headers (`Cache-Control: immutable`, `Accept-Ranges: bytes`)
  - Image caching headers
  - Security headers on all routes

### Domain Status
- `stackbyansh.com` has been purchased (Google Domains/Squarespace)
- **DNS connection to Vercel is NOT done yet** — this is a pending manual step
- Steps: Vercel → Project → Settings → Domains → Add `stackbyansh.com` → copy DNS records → paste into Google/Squarespace DNS

### Google Search Console
- Not verified yet — must be done after domain connects
- Sitemap URL: `https://stackbyansh.com/sitemap.xml` (file exists at `app/sitemap.ts`)

---

## 5. File Structure — Key Files

```
portfolio-v2/
├── app/
│   ├── layout.tsx          ← Root layout: metadata, JSON-LD schemas, GA4, Lenis wrapper
│   ├── page.tsx            ← Homepage — renders <HomeExperience />
│   ├── globals.css         ← CSS variables, global styles, animations
│   ├── sitemap.ts          ← Auto-generates /sitemap.xml
│   ├── robots.ts           ← Auto-generates /robots.txt
│   ├── contact/
│   │   └── page.tsx        ← Standalone /contact page
│   └── projects/
│       └── [slug]/page.tsx ← Dynamic project detail pages
│
├── components/
│   ├── HomeExperience.tsx  ← TOP-LEVEL ORCHESTRATOR — controls loading/video/main phase
│   │
│   ├── layout/
│   │   └── Navbar.tsx      ← Fixed nav: STACK BY ANSH logo, 4 nav items, mobile hamburger
│   │
│   ├── ui/
│   │   ├── VideoIntro.tsx  ← Cinematic intro: Web Audio BGM + narration + subtitle sync
│   │   ├── LoadingScreen.tsx ← Initial loading animation with CubeLogo
│   │   ├── CubeLogo.tsx    ← Animated isometric 3D cube SVG (brand icon)
│   │   ├── ASymbol.tsx     ← Decorative A watermark (legacy, still used in some pages)
│   │   ├── SmoothScrollProvider.tsx ← Lenis smooth scroll wrapper (already active)
│   │   └── CursorGlow.tsx  ← Custom cursor glow effect
│   │
│   ├── sections/           ← ALL HOMEPAGE SECTIONS (in render order)
│   │   ├── Hero.tsx        ← Viewport 1: headline + live systems panel + parallax viz
│   │   │                      Viewport 2 (below fold): founder portrait + identity text
│   │   ├── WorldsSection.tsx  ← Featured projects grid (uses ProjectTile)
│   │   ├── IdeationProjects.tsx ← "Building Next" — 3 concept cards
│   │   ├── SystemsEngineering.tsx ← Accordion: 4 engineering areas
│   │   ├── About.tsx       ← Two-col: founder story left + product ecosystem right
│   │   ├── Process.tsx     ← 9-step engineering process in 2-col grid
│   │   ├── Skills.tsx      ← "Engineering Expertise": marquee strip + 6 cluster cards
│   │   ├── PreDeliveryChecklist.tsx ← 7 quality categories with checkmark items
│   │   ├── Education.tsx   ← Formal degree + self-directed learning
│   │   ├── Philosophy.tsx  ← 5 engineering principles
│   │   ├── Testimonials.tsx ← 3 real testimonials (Shivam, Sourav, Surbhaish)
│   │   ├── FeedbackWall.tsx ← Public feedback form (Formspree)
│   │   └── Contact.tsx     ← Final CTA + communication channels terminal
│   │
│   ├── project/
│   │   ├── ProjectTile.tsx ← Project card: image, status, name, tags, What-to-Notice, Skills
│   │   ├── BuildLog.tsx    ← Build history timeline (used on project detail page)
│   │   ├── SystemStatus.tsx ← Status indicators grid (used on project detail page)
│   │   └── TechModules.tsx ← Tech stack pills (used on project detail page)
│   │
│   └── pages/
│       └── ContactPage.tsx ← Full /contact page component
│
├── config/
│   ├── projects.ts  ← SINGLE SOURCE OF TRUTH for all project data
│   ├── links.ts     ← All external URLs (social, project URLs, repos)
│   └── images.ts    ← All image paths centralized
│
├── public/
│   ├── videos/
│   │   ├── intro-video.mp4    ← Main intro video (8 seconds)
│   │   ├── intro-video-3.mp4  ← Old second intro video (no longer used in UI)
│   │   └── intro-audio.mp3    ← Narration audio (12 seconds)
│   ├── images/                ← All project images, logos, hero images
│   ├── resume/
│   │   └── Ansh_Gupta_Resume.pdf
│   └── site.webmanifest
│
├── vercel.json        ← Deployment config + cache headers
├── PROJECT_HANDOFF.md ← This file
└── CLAUDE.md          ← AI agent instructions (references AGENTS.md)
```

---

## 6. Homepage Section Flow

`HomeExperience.tsx` controls three phases: `loading → video → main`

```
Phase 1: LoadingScreen (spinning CubeLogo + "INITIALIZING SYSTEMS")
Phase 2: VideoIntro (cinematic opening — user clicks ENTER or Skip intro)
Phase 3: Main content (all sections rendered)
```

**sessionStorage flag:** After the VideoIntro completes (or is skipped), `sessionStorage.setItem('intro-seen', '1')` is set. On subsequent visits in the same browser session, `HomeExperience.tsx` detects this and jumps directly to `phase = 'main'`, skipping the intro.

### Section order on the live page:
1. **Hero** — Greeting, headline, live systems terminal card, parallax ecosystem viz; scrolling down reveals founder portrait + identity text
2. **WorldsSection** (`#worlds`) — Featured project tiles (5 projects)
3. **IdeationProjects** (`#ideation`) — "Building Next" — 3 concept cards
4. **SystemsEngineering** — Expandable accordion: 4 engineering disciplines
5. **About** (`#about`) — Founder story + Stack By Ansh origin + product list
6. **Process** — 9-stage engineering workflow
7. **Skills** (`#skills`) — "Engineering Expertise" marquee + 6 cluster cards with why-this reasoning
8. **PreDeliveryChecklist** — 7 quality gates before delivery
9. **Education** — Formal + self-directed learning
10. **Philosophy** — 5 engineering principles
11. **Testimonials** — 3 verified reviews only
12. **FeedbackWall** (`#feedback`) — Formspree form
13. **Contact** (`#contact`) — CTA + 8-channel communication terminal

---

## 7. Config Files — The Important Ones

### `config/projects.ts`
The single source of truth for all project data. Each `Project` object contains:
- `slug`, `name`, `tagline`, `shortDescription`, `fullStory`
- `positioning` — one-line shown on the tile
- `status` — maps to STATUS_COLORS in ProjectTile
- `themeColors` — `{ primary, secondary, glow, text }` — drives the tile's color system
- `techStack`, `systemStatus[]`, `buildLog[]`, `builtFeatures[]`, `plannedFeatures[]`
- `whatToNotice?: string[]` — expandable "What to Notice" panel on the project tile
- `skillsDemonstrated?: string[]` — tag strip shown at the bottom of each project tile
- `liveUrl: string | null` — set to `null` if not live yet (don't use PLACEHOLDER strings)
- `featured?: boolean` — controls whether it shows in WorldsSection

**Currently featured:** Operonix, BikeTribe, OOZE, Architect AI, Seva Agro

**Currently NOT live (liveUrl: null):** BikeTribe, Operonix, Architect AI, Seva Agro, FreelanceFlow

### `config/links.ts`
All external URLs. When a project goes live, update `LINKS.projects.{slug}` here — it propagates everywhere.

**Current state:**
```
LINKS.projects.ooze         = 'https://ooze-theattirestore.vercel.app/' ✅
LINKS.projects.biketribe    = null  (in development)
LINKS.projects.operonix     = null  (in development)
LINKS.projects.architectai  = null  (research phase)
LINKS.projects.sevaagro     = null  (pre-launch)
LINKS.projects.freelanceflow = null (pre-launch)
```

### `config/images.ts`
All image paths centralized. If images are renamed or moved, update here.

---

## 8. Design System

### Color Palette
```
Background:     #050505 (near-black) / #080810 (sections alternate with slight blue tint)
Text primary:   #fff
Text muted:     rgba(228,228,231,0.5)
Text dim:       rgba(228,228,231,0.25)
Purple primary: #8B5CF6
Purple light:   #a78bfa
Cyan:           #06B6D4
Green:          #4ADE80
Orange:         #FB923C
Yellow:         #FACC15
```

### Fonts
```css
--font-space-grotesk  /* primary UI font — headings, labels, body */
--font-inter          /* fallback body font */
"JetBrains Mono"      /* monospace — terminal text, code snippets, step numbers */
```

### Common Section Pattern
Every section follows this structure:
```tsx
<section id="section-id" style={{ background: '#050505' | '#080810', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)' }}>
  {/* Ambient radial gradient div */}
  <div style={{ maxWidth: 1200, margin: '0 auto' }}>
    {/* Label (0.65rem, uppercase, #a78bfa) */}
    {/* H2 (clamp(2.2rem,4vw,3.5rem), fontWeight 900, letterSpacing -0.04em) */}
    {/* Content */}
  </div>
  <style jsx>{/* mobile breakpoints */}</style>
</section>
```

### Animation Pattern
```tsx
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden:   { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};
// Usage: variants={fadeUp} custom={0.12} initial="hidden" whileInView="visible" viewport={{ once: true }}
```

---

## 9. VideoIntro — Architecture

`components/ui/VideoIntro.tsx` is the most complex component. Key points:

**Flow:**
1. ENTER gate (black screen + CubeLogo + "ENTER") — user clicks anywhere OR clicks "Skip intro →"
2. On click: `AudioContext` created synchronously (required for browser autoplay policy)
3. Web Audio BGM engine starts: drone oscillators + bass swell + synth pad + room tone + fan hum
4. `intro-video.mp4` plays (8s, loops=false, freezes on last frame when ended)
5. After 1.5s: BGM ducks, `intro-audio.mp3` narration starts (12s)
6. Subtitles sync to narration via `timeupdate` listener
7. When narration ends → fade out → `onComplete()` → `sessionStorage.setItem('intro-seen','1')`

**Skip mechanisms:**
- "Skip intro →" button on ENTER gate (skips everything, no audio plays)
- "SKIP →" button inside intro (fades out audio/video, calls onComplete)

**BGM constants:**
```ts
BGM_FULL = { drone:0.20, bass:0.14, pad:0.10, room:0.018, fan:0.024 }
BGM_DUCK = { drone:0.022, bass:0.016, pad:0.012, room:0.006, fan:0.008 }
```

---

## 10. ProjectTile — Expandable Panels

`components/project/ProjectTile.tsx` renders each project card with two optional expandable panels:

1. **"What to Notice"** — engineering depth explanation (toggled with AnimatePresence height animation). Data comes from `project.whatToNotice?: string[]`
2. **"Skills Demonstrated"** — tag strip at bottom. Data from `project.skillsDemonstrated?: string[]`

Both panels are always outside the `<Link>` so clicks don't navigate to the project page accidentally.

---

## 11. SEO & Discoverability Setup

### What's Live
| Item | Status |
|---|---|
| `app/sitemap.ts` | ✅ Auto-generates `/sitemap.xml` covering all pages |
| `app/robots.ts` | ✅ Auto-generates `/robots.txt` |
| Organization JSON-LD schema | ✅ In `app/layout.tsx` |
| Person JSON-LD schema | ✅ In `app/layout.tsx` |
| WebSite JSON-LD schema | ✅ In `app/layout.tsx` |
| FAQ JSON-LD schema | ✅ In `app/layout.tsx` — answers AI crawler queries |
| OpenGraph tags | ✅ `app/layout.tsx` |
| Twitter cards | ✅ `app/layout.tsx` |
| Canonical URL | ✅ `https://stackbyansh.com` |
| Google Analytics 4 | ✅ `G-7G3WC9R36Q` via `next/script` afterInteractive |

### What's Pending (Manual Steps)
| Item | Action Required |
|---|---|
| Domain DNS | Connect `stackbyansh.com` to Vercel via DNS records |
| Google Search Console | Verify domain, submit sitemap after DNS connects |
| OG image | The `/public/images/og-image.png` still has old "Ansh Gupta" branding — needs new 1200×630 image for "Stack By Ansh" |
| Project page schemas | Individual `SoftwareApplication` JSON-LD per project page (currently none) |
| Geo meta tags | `<meta name="geo.region" content="IN-MP">` not yet added |

---

## 12. What's NOT Done / Known Gaps

### Functional Gaps
- **OG image** — `public/images/og-image.png` needs to be replaced with a Stack By Ansh branded 1200×630px image
- **Wedding Planner Platform** — Template is ready and runs on localhost but not deployed. When it's on Vercel, update `IdeationProjects.tsx` to add the live URL
- **Project live URLs** — All project `liveUrl` values except OOZE are `null`. Update `config/links.ts` as projects go live
- **Resume PDF** — `public/resume/Ansh_Gupta_Resume.pdf` may have old "Ansh Gupta" personal branding. Consider updating if being represented as Stack By Ansh
- **Google Search Console** — Not verified yet

### Stale/Unused Files
These files exist but are NOT rendered on the live page (kept for reference or future use):
```
components/sections/EcosystemStrip.tsx  ← removed from HomeExperience, kept as file
components/sections/Identity.tsx        ← content merged into Hero.tsx, file kept
components/sections/BuildWorlds.tsx     ← legacy section, not used
components/sections/Stack.tsx           ← legacy section, not used
```
It's safe to delete these if you want a clean codebase. They just take up space.

### Testimonials Policy
Only 3 testimonials are currently shown — all from real, named collaborators:
1. **Shivam Solanki** — Collaborator
2. **Sourav Sharma** — Founder, Seva Agro
3. **Surbhaish Singh** — Founder, OOZE

**Do NOT add generic, unverifiable testimonials.** Only add real people with real context. Three strong real reviews beat ten mixed ones.

---

## 13. Forms & External Services

| Service | Purpose | Key |
|---|---|---|
| Formspree | FeedbackWall submissions | Form ID: `xkoedryl` at `https://formspree.io/f/xkoedryl` |
| Google Analytics 4 | Site analytics | Measurement ID: `G-7G3WC9R36Q` |

---

## 14. Navbar Items → Section IDs

| Nav Label | href | Section ID |
|---|---|---|
| Worlds | `#worlds` | `id="worlds"` in WorldsSection |
| About | `#about` | `id="about"` in About |
| Expertise | `#skills` | `id="skills"` in Skills |
| Contact | `#contact` | `id="contact"` in Contact |

Other sections also have IDs (`#feedback`, `#ideation`, `#education`, etc.) but are not in the main nav.

---

## 15. Adding a New Project

1. Add entry to `PROJECTS` array in `config/projects.ts` — fill all required fields
2. Add image paths to `config/images.ts` if needed
3. Add live URL to `config/links.ts` under `projects` and `repos`
4. If featured: set `featured: true` — it will appear in `WorldsSection`
5. Add `whatToNotice` and `skillsDemonstrated` arrays for the expandable tile panels
6. Project detail page auto-generates from `app/projects/[slug]/page.tsx` using `generateStaticParams`

---

## 16. Adding a New Section

Follow this pattern for consistency:

```tsx
'use client';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden:   { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function NewSection() {
  return (
    <section
      id="new-section"
      style={{
        background: '#050505',  // or '#080810' for alternating
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* content */}
      </div>
      <style jsx>{`
        @media (max-width: 767px) { .your-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
```

Then import and add it to `components/HomeExperience.tsx` in the correct position.

---

## 17. Future Work Suggested

### High Priority
- Replace OG image with Stack By Ansh branded 1200×630px version
- Verify Google Search Console after domain DNS connects
- Add individual `SoftwareApplication` JSON-LD schema to each project detail page
- Deploy the wedding planner template and update `IdeationProjects.tsx`

### Medium Priority
- Add more real testimonials as new collaborations complete
- Update project `liveUrl` values as systems ship
- Add project case study screenshots for projects that are currently image-less
- Consider adding a `geo.region` meta tag for India-based discovery

### Lower Priority / Future Features
- Blog/writing section (founder insights, architecture breakdowns)
- Case study deep-dives with real metrics
- Admin panel for Feedback Wall (if switching from Formspree to custom backend)
- Mobile app for BikeTribe — may warrant its own separate landing page

---

## 18. Do Not Break These Things

- **The `'use client'` directive** — Every section component needs it. Missing it causes hydration errors.
- **The `eslint-disable` comment before `fadeUp`** — TypeScript can't infer the variant type. The comment must stay.
- **`v1.loop = false` (default) on the video** — The intro video should play once and freeze, not loop.
- **`sessionStorage.setItem('intro-seen', '1')`** — Must be called in both the skip-gate handler and `handleVideoComplete` in `HomeExperience.tsx`, or the intro will replay on navigation.
- **Null project liveUrls** — Never put `'https://PLACEHOLDER'` as a liveUrl. Use `null`. ProjectTile hides the "View Live" button when null.
- **Three real testimonials** — Do not add unverifiable reviews. See section 12.

---

*Last updated: June 2025. Written from the building session that created this project from scratch.*
