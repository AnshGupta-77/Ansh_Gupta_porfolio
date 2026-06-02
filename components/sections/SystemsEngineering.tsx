'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden:   { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

interface Area {
  id: string;
  label: string;
  headline: string;
  tagline: string;
  color: string;
  icon: string;
  points: string[];
  stack: string[];
}

const AREAS: Area[] = [
  {
    id: 'architecture',
    label: '01',
    icon: '⬡',
    color: '#8B5CF6',
    headline: 'System Architecture',
    tagline: 'Designing systems that scale before they need to.',
    points: [
      'Modular backend architecture with clearly bounded domains — each service knows its responsibility and its limits.',
      'API contracts designed around consumer expectations, not implementation convenience. REST where it makes sense, WebSockets where realtime demands it.',
      'Database schema engineered for query performance first. Indexes, relations, and access patterns defined before a single migration runs.',
      'Infrastructure planned for horizontal scaling from day one — not bolted on when traffic exposes the gaps.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'WebSockets'],
  },
  {
    id: 'product',
    label: '02',
    icon: '◈',
    color: '#06B6D4',
    headline: 'Product Engineering',
    tagline: 'Engineering for behavior, not just functionality.',
    points: [
      'User flow analysis precedes wireframing. I map what users need to accomplish, what they instinctively expect, and where systems typically break that expectation.',
      'Feature scope tied to measurable behavioral outcomes — not requirements lists. If a feature doesn\'t change behavior, it doesn\'t ship.',
      'Execution logic built around real-world workflows, not idealized happy paths. Edge cases are first-class citizens.',
      'Every decision tree documented: what the system does when auth fails, when a request times out, when data is inconsistent.',
    ],
    stack: ['Next.js', 'TypeScript', 'LangChain', 'OpenAI', 'Supabase'],
  },
  {
    id: 'security',
    label: '03',
    icon: '◇',
    color: '#4ADE80',
    headline: 'Security & Reliability',
    tagline: 'Systems you can trust at 3am.',
    points: [
      'JWT + refresh token architecture with short-lived access tokens. Sessions expire. Tokens rotate. Attack surfaces stay small.',
      'Row-level security in PostgreSQL — users can only read and write their own data at the database layer, not just the application layer.',
      'Rate limiting, abuse detection, and structured error responses. APIs don\'t leak implementation details under failure conditions.',
      'Zero-trust access patterns on all sensitive routes. Every request is authenticated. Every permission is explicit.',
    ],
    stack: ['JWT', 'PostgreSQL RLS', 'HTTPS', 'CORS', 'Bcrypt'],
  },
  {
    id: 'ux',
    label: '04',
    icon: '◎',
    color: '#FB923C',
    headline: 'UX Engineering',
    tagline: 'Interfaces that reduce cognitive load, not add to it.',
    points: [
      'Interaction design driven by cognitive load principles. Every added element must earn its place by reducing user effort, not showcasing technical capability.',
      'Motion as communication — animations communicate state transitions, hierarchy, and feedback. Not decoration.',
      'Performance as a UX strategy. Sub-100ms interactions feel instant. Perceived speed is as important as measured speed.',
      'Accessibility built in from architecture, not retrofitted. Semantic HTML, keyboard navigation, and ARIA labels are structural requirements.',
    ],
    stack: ['Framer Motion', 'GSAP', 'Tailwind CSS', 'React', 'Canvas API'],
  },
];

export default function SystemsEngineering() {
  const [open, setOpen] = useState<string | null>('architecture');

  return (
    <section
      id="systems"
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
        background: 'radial-gradient(ellipse 60% 55% at 100% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 56, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <motion.span variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
              color: '#a78bfa', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            HOW I ENGINEER SYSTEMS
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.06} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
            Architecture over assembly.
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ color: 'rgba(228,228,231,0.42)', fontSize: '0.92rem', lineHeight: 1.8,
              maxWidth: 520, margin: 0, fontFamily: 'var(--font-space-grotesk)' }}>
            Every system I build is designed across four engineering dimensions.
            Each one is deliberate. None of them is optional.
          </motion.p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {AREAS.map((area, i) => {
            const isOpen = open === area.id;
            return (
              <motion.div
                key={area.id}
                variants={fadeUp} custom={0.08 + i * 0.06}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {/* Row header */}
                <button
                  onClick={() => setOpen(isOpen ? null : area.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    gap: 20, padding: '22px 24px',
                    background: isOpen ? `${area.color}08` : 'rgba(255,255,255,0.015)',
                    border: `1px solid ${isOpen ? `${area.color}30` : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: isOpen ? '16px 16px 0 0' : 16,
                    cursor: 'pointer', textAlign: 'left',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Number */}
                  <span style={{
                    fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem',
                    color: area.color, opacity: 0.7, letterSpacing: '0.08em', flexShrink: 0,
                  }}>
                    {area.label}
                  </span>

                  {/* Icon */}
                  <span style={{ fontSize: '1rem', color: area.color, flexShrink: 0 }}>{area.icon}</span>

                  {/* Title */}
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem',
                      fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.01em',
                    }}>
                      {area.headline}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem',
                      color: 'rgba(228,228,231,0.38)', margin: '3px 0 0', letterSpacing: '0.01em',
                    }}>
                      {area.tagline}
                    </p>
                  </div>

                  {/* Stack pills (hidden when open) */}
                  {!isOpen && (
                    <div className="hidden md:flex" style={{ gap: 6, flexWrap: 'nowrap' }}>
                      {area.stack.slice(0, 3).map(s => (
                        <span key={s} style={{
                          fontSize: '0.55rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600,
                          padding: '3px 8px', borderRadius: 100,
                          background: `${area.color}12`, color: area.color,
                          border: `1px solid ${area.color}25`, letterSpacing: '0.08em', whiteSpace: 'nowrap',
                        }}>{s}</span>
                      ))}
                    </div>
                  )}

                  {/* Chevron */}
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '28px 24px 32px',
                        background: `${area.color}06`,
                        border: `1px solid ${area.color}20`,
                        borderTop: 'none',
                        borderRadius: '0 0 16px 16px',
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: 32,
                      }}
                        className="systems-inner"
                      >
                        {/* Points */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          {area.points.map((pt, j) => (
                            <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                              <span style={{
                                width: 5, height: 5, borderRadius: '50%', background: area.color,
                                flexShrink: 0, marginTop: 7,
                                boxShadow: `0 0 6px ${area.color}60`,
                              }} />
                              <p style={{
                                fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem',
                                color: 'rgba(228,228,231,0.6)', lineHeight: 1.8, margin: 0,
                              }}>
                                {pt}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Stack sidebar */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 120 }}>
                          <p style={{
                            fontFamily: 'var(--font-space-grotesk)', fontSize: '0.58rem',
                            fontWeight: 700, color: 'rgba(228,228,231,0.25)',
                            letterSpacing: '0.18em', textTransform: 'uppercase', margin: 0,
                          }}>
                            STACK
                          </p>
                          {area.stack.map(s => (
                            <span key={s} style={{
                              fontSize: '0.68rem', fontFamily: 'var(--font-space-grotesk)',
                              fontWeight: 600, padding: '5px 10px', borderRadius: 8,
                              background: `${area.color}12`, color: area.color,
                              border: `1px solid ${area.color}25`,
                              letterSpacing: '0.05em', display: 'inline-block',
                              textAlign: 'center',
                            }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .systems-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
