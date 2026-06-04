/**
 * LINKS CONFIG — All external URLs in one place.
 * Change any value here and it updates everywhere instantly.
 */

export const LINKS = {
  // ── Social ─────────────────────────────────────────────────────────
  github:   'https://github.com/AnshGupta-77',
  linkedin: 'https://www.linkedin.com/in/ansh-gupta-586643347/',
  twitter:  'https://twitter.com/stackby_ansh',
  email:    'ansh.gupta0625@gmail.com',
  salesEmail: 'sales@stackbyansh.com',

  // ── Documents ──────────────────────────────────────────────────────
  resume:   '/resume/Ansh_Gupta_Resume.pdf',

  // ── Live project URLs ──────────────────────────────────────────────
  // Set to null until a project has a real live URL.
  projects: {
    ooze:          'https://ooze-theattirestore.vercel.app/',
    biketribe:     null,   // in active development
    operonix:      null,   // in active development
    architectai:   null,   // research phase
    sevaagro:      null,   // pre-launch
    freelanceflow: null,   // pre-launch
    liverdisease:  'https://github.com/AnshGupta-77',
    portfolio:     'https://stackbyansh.com',
  } as Record<string, string | null>,

  // ── GitHub repos (individual) ──────────────────────────────────────
  repos: {
    biketribe:     null,   // add direct repo link when public
    operonix:      null,   // add direct repo link when public
    freelanceflow: null,   // add direct repo link when public
    liverdisease:  'https://github.com/AnshGupta-77',
    sevaagro:      null,   // add direct repo link when public
  } as Record<string, string | null>,
} as const;
