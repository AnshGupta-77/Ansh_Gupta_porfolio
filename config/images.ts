/**
 * IMAGES CONFIG — All image paths in one place.
 * All paths are relative to /public (Next.js serves public/ at root).
 */

export const IMAGES = {
  // ── Identity ──────────────────────────────────────────────────────
  logo: {
    full:    '/images/logos/full-logo.jpg',
    icon:    '/images/logos/logo-icon.jpg',
    aSymbol: '/images/logos/a-symbol.png',   // teal/orange circuit "A" identity mark
  },

  // ── Hero ──────────────────────────────────────────────────────────
  hero: {
    main:    '/images/hero/hero-main.png',   // cinematic couch/AI dashboard image
    profile: '/images/hero/profile.jpg',     // headshot for portrait sections
    face:    '/images/hero/face.png',        // close-up face portrait
  },

  // ── Background ────────────────────────────────────────────────────
  background: {
    banner:  '/images/background/banner.jpg',
  },

  // ── Project logos ─────────────────────────────────────────────────
  projectLogos: {
    operonix:     '/images/logos/operonix.png',
    biketribe:    '/images/logos/biketribe-logo.png',
    architectai:  '/images/logos/architect-ai.png',
    ooze:         '/images/logos/ooze.jpg',
    // Seva Agro, FreelanceFlow, Liver Disease → no logo yet, uses initials fallback
    sevaagro:     null,
    freelanceflow: null,
    liverdisease:  null,
  },

  // ── Project screenshots / cinematic images ─────────────────────────
  projectImages: {
    biketribe: {
      hero: '/images/projects/biketribe/hero.png',   // cinematic group motorcycle image
      img1: '/images/projects/biketribe/img1.png',
      img2: '/images/projects/biketribe/img2.png',
    },
    freelanceflow: {
      img1: '/images/projects/freelanceflow/img1.png',
      img2: '/images/projects/freelanceflow/img2.png',
    },
    liverdisease: {
      img1: '/images/projects/liver-disease/img1.png',
    },
    portfolio: {
      img1: '/images/projects/portfolio-screenshot.jpeg',
    },
  },
} as const;
