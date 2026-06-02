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

const FORMAL = [
  {
    degree:  'B.Tech — Computer Science & Engineering',
    school:  'Vellore Institute of Technology, Bhopal (M.P.)',
    period:  '2021 — 2025',
    note:    'Core focus on software systems, data structures, algorithms, and distributed computing fundamentals.',
    color:   '#8B5CF6',
  },
];

const SELF_DIRECTED = [
  {
    area:  'System Design & Architecture',
    items: ['Distributed systems patterns', 'Microservice vs monolith tradeoffs', 'API design principles', 'Database schema engineering'],
    color: '#8B5CF6',
  },
  {
    area:  'AI Engineering',
    items: ['LLM fine-tuning & orchestration', 'RAG pipeline architecture', 'LangChain agent systems', 'Vector database integration'],
    color: '#06B6D4',
  },
  {
    area:  'Product Architecture',
    items: ['Behavioral product design', 'User psychology in UX', 'Operational workflow design', 'Founder-led product strategy'],
    color: '#4ADE80',
  },
  {
    area:  'Frontend Engineering',
    items: ['Animation systems (Framer, GSAP)', 'Performance optimization', 'Accessible interface patterns', 'Cinematic web experiences'],
    color: '#FB923C',
  },
];

const CURRENTLY = [
  { label: 'Distributed Systems', note: 'Consensus algorithms, eventual consistency, CAP theorem applications' },
  { label: 'LLM Orchestration at Scale', note: 'Multi-agent coordination, context management, cost optimization' },
  { label: 'Operational Design Patterns', note: 'Enterprise workflow automation, decision engine architecture' },
];

export default function Education() {
  return (
    <section
      id="education"
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
        background: 'radial-gradient(ellipse 55% 55% at 100% 30%, rgba(6,182,212,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <motion.span variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700, color: '#a78bfa', letterSpacing: '0.25em',
              textTransform: 'uppercase', marginBottom: 16 }}>
            EDUCATION & LEARNING
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.06} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
            Constantly building<br />the mental model.
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ color: 'rgba(228,228,231,0.38)', fontSize: '0.9rem', lineHeight: 1.8,
              maxWidth: 520, margin: '16px 0 0', fontFamily: 'var(--font-space-grotesk)' }}>
            Formal education provides the foundation. Self-directed learning builds the capability.
            I treat both as parallel systems — neither is sufficient alone.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="edu-grid">

          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Formal */}
            <motion.div variants={fadeUp} custom={0.12} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', fontWeight: 700,
                color: 'rgba(228,228,231,0.25)', letterSpacing: '0.22em', textTransform: 'uppercase',
                margin: '0 0 16px' }}>
                FORMAL EDUCATION
              </p>
              {FORMAL.map(f => (
                <div key={f.degree}
                  style={{
                    padding: '20px 22px', borderRadius: 14,
                    background: 'rgba(255,255,255,0.02)',
                    border: `1px solid ${f.color}22`,
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  {/* Left accent bar */}
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
                    background: f.color, borderRadius: '14px 0 0 14px',
                  }} />
                  <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.95rem',
                    fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>
                    {f.degree}
                  </p>
                  <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem',
                    color: f.color, margin: '0 0 8px', fontWeight: 500 }}>
                    {f.school}
                  </p>
                  <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
                    color: 'rgba(228,228,231,0.25)', margin: '0 0 12px', letterSpacing: '0.06em' }}>
                    {f.period}
                  </p>
                  <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem',
                    color: 'rgba(228,228,231,0.45)', lineHeight: 1.7, margin: 0 }}>
                    {f.note}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Currently studying */}
            <motion.div variants={fadeUp} custom={0.2} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', fontWeight: 700,
                color: 'rgba(228,228,231,0.25)', letterSpacing: '0.22em', textTransform: 'uppercase',
                margin: '0 0 16px' }}>
                CURRENTLY STUDYING
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CURRENTLY.map(c => (
                  <div key={c.label}
                    style={{
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                      padding: '14px 18px', borderRadius: 12,
                      background: 'rgba(255,255,255,0.015)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: '#4ade80', flexShrink: 0, marginTop: 6,
                      boxShadow: '0 0 6px rgba(74,222,128,0.6)',
                      animation: 'edupulse 2s ease-in-out infinite',
                    }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem',
                        fontWeight: 600, color: '#fff', margin: '0 0 3px' }}>
                        {c.label}
                      </p>
                      <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem',
                        color: 'rgba(228,228,231,0.38)', margin: 0, lineHeight: 1.5 }}>
                        {c.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Self-directed */}
          <motion.div variants={fadeUp} custom={0.14} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}>
            <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', fontWeight: 700,
              color: 'rgba(228,228,231,0.25)', letterSpacing: '0.22em', textTransform: 'uppercase',
              margin: '0 0 16px' }}>
              SELF-DIRECTED LEARNING
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SELF_DIRECTED.map(s => (
                <div key={s.area}
                  style={{
                    padding: '20px 22px', borderRadius: 14,
                    background: 'rgba(255,255,255,0.018)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: s.color, boxShadow: `0 0 8px ${s.color}60`,
                    }} />
                    <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem',
                      fontWeight: 700, color: '#fff', margin: 0 }}>
                      {s.area}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.items.map(item => (
                      <span key={item} style={{
                        fontSize: '0.68rem', fontFamily: 'var(--font-space-grotesk)',
                        color: 'rgba(228,228,231,0.5)',
                        padding: '4px 10px', borderRadius: 8,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes edupulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
