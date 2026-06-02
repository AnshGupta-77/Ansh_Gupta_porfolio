/**
 * LINKS CONFIG — All external URLs in one place.
 * Change any value here and it updates everywhere instantly.
 * Search for "PLACEHOLDER" to find things still needing real URLs.
 */

export const LINKS = {
  // ── Social ─────────────────────────────────────────────────────────
  github:   'https://github.com/AnshGupta-77',
  linkedin: 'https://linkedin.com/in/PLACEHOLDER',   // TODO: add LinkedIn handle
  twitter:  'https://twitter.com/PLACEHOLDER',        // TODO: add X/Twitter handle
  email:    'ansh.gupta0625@gmail.com',

  // ── Documents ──────────────────────────────────────────────────────
  resume:   '/resume/Ansh_Gupta_Resume.pdf',           // PDF served from /public/resume/

  // ── Live project URLs ──────────────────────────────────────────────
  projects: {
    ooze:              'https://ooze-theattirestore.vercel.app/',
    biketribe:         'https://PLACEHOLDER',           // TODO: add BikeTribe live URL
    operonix:          'https://PLACEHOLDER',           // TODO: add Operonix live URL
    architectai:       'https://PLACEHOLDER',           // TODO: add Architect AI live URL
    sevaagro:          'https://PLACEHOLDER',           // TODO: add Seva Agro live URL
    freelanceflow:     'https://PLACEHOLDER',           // TODO: add FreelanceFlow live URL
    liverdisease:      'https://github.com/AnshGupta-77', // links to GitHub
    portfolio:         'https://ansh-gupta-porfolio.vercel.app/',
  },

  // ── GitHub repos (individual) ──────────────────────────────────────
  repos: {
    biketribe:         'https://github.com/AnshGupta-77',  // TODO: direct repo link
    operonix:          'https://github.com/AnshGupta-77',  // TODO: direct repo link
    freelanceflow:     'https://github.com/AnshGupta-77',  // TODO: direct repo link
    liverdisease:      'https://github.com/AnshGupta-77',  // TODO: direct repo link
    sevaagro:          'https://github.com/AnshGupta-77',  // TODO: direct repo link
  },
} as const;
