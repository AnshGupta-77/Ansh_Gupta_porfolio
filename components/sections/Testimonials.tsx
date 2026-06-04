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

interface Review {
  name: string;
  role: string;
  company?: string;
  quote: string;
  tags: string[];
  color: string;
  initials: string;
}

const REVIEWS: Review[] = [
  {
    name:    'Shivam Solanki',
    role:    'Collaborator',
    quote:   'Working with Ansh is unlike working with any frontend developer I\'ve encountered. He thinks in systems, not just screens. The UI quality was exceptional — but what impressed me most was how he architected the entire interaction flow before writing a single component. He doesn\'t build interfaces. He designs experiences.',
    tags:    ['Frontend Quality', 'Execution', 'Systems Thinking'],
    color:   '#8B5CF6',
    initials: 'SS',
  },
  {
    name:    'Sourav Sharma',
    role:    'Founder',
    company: 'Seva Agro',
    quote:   'Ansh approached the Seva Agro platform with genuine business understanding. He didn\'t just build what we asked — he challenged assumptions, proposed better workflows, and delivered a system that makes our operations measurably faster. He understands that software exists to solve real operational problems, not to look good in a portfolio.',
    tags:    ['Business Understanding', 'Reliability', 'Product Thinking'],
    color:   '#FACC15',
    initials: 'SS',
  },
  {
    name:    'Surbhaish Singh',
    role:    'Founder',
    company: 'OOZE',
    quote:   'Building OOZE with Ansh was a true founder collaboration. He understood the brand vision before writing a single line of code. He pushed back on ideas that would dilute the experience, and he proposed concepts we hadn\'t considered. The cinematic commerce experience we shipped together is unlike anything else in the market.',
    tags:    ['Founder Collaboration', 'Creative Execution', 'Vision Alignment'],
    color:   '#4ADE80',
    initials: 'SS',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: '#080810',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 55% at 50% 100%, rgba(139,92,246,0.05) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <motion.span variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700, color: '#a78bfa', letterSpacing: '0.25em',
              textTransform: 'uppercase', marginBottom: 16 }}>
            COLLABORATION FEEDBACK
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.06} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
            Trusted by founders<br />and collaborators.
          </motion.h2>
        </div>

        {/* Grid — 3 columns on desktop, 1 on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="testimonials-grid"
        >
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              variants={fadeUp} custom={0.06 + i * 0.07}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                transition: 'border-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ borderColor: `${r.color}30` }}
            >
              {/* Subtle top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 24, right: 24, height: 1,
                background: `linear-gradient(90deg, transparent, ${r.color}40, transparent)`,
              }} />

              {/* Quote mark */}
              <span style={{
                fontSize: '2.5rem', lineHeight: 1, color: r.color,
                opacity: 0.18, fontFamily: 'Georgia, serif', display: 'block',
              }}>
                &ldquo;
              </span>

              {/* Quote text */}
              <p style={{
                fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem',
                color: 'rgba(228,228,231,0.58)', lineHeight: 1.85, margin: 0,
                flex: 1,
              }}>
                {r.quote}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {r.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.55rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600,
                    padding: '3px 8px', borderRadius: 100,
                    background: `${r.color}10`, color: r.color,
                    border: `1px solid ${r.color}22`, letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>{tag}</span>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

              {/* Attribution */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Initials avatar */}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `${r.color}18`,
                  border: `1px solid ${r.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem',
                    fontWeight: 700, color: r.color,
                  }}>
                    {r.initials}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem',
                    fontWeight: 700, color: '#fff', margin: 0,
                  }}>
                    {r.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.68rem',
                    color: 'rgba(228,228,231,0.32)', margin: '2px 0 0',
                  }}>
                    {r.role}{r.company ? ` · ${r.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
