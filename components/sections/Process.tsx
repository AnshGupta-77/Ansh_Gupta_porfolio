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

const STEPS = [
  {
    n:    '01',
    name: 'Discovery & Research',
    desc: 'Understand the problem space before touching a diagram. Who is frustrated? Where does current behavior break down? What already exists and why does it fall short?',
    color: '#8B5CF6',
  },
  {
    n:    '02',
    name: 'Product Thinking',
    desc: 'Define what the system must accomplish behaviorally — not what features it must have. Features follow behavior requirements, not the other way around.',
    color: '#A78BFA',
  },
  {
    n:    '03',
    name: 'Behavioral Analysis',
    desc: 'Map how users will actually move through the system. What are they trying to accomplish? Where will they hesitate, misunderstand, or abandon? Design for the real path, not the happy path.',
    color: '#06B6D4',
  },
  {
    n:    '04',
    name: 'Workflow Planning',
    desc: 'Design the operational flow end-to-end — data entry points, processing layers, storage contracts, output surfaces. Every handoff between layers is explicitly defined.',
    color: '#0EA5E9',
  },
  {
    n:    '05',
    name: 'Architecture Design',
    desc: 'Database schema, API contracts, authentication boundaries, service separations. This is where the system gets its skeleton — and where shortcuts taken now cost the most later.',
    color: '#4ADE80',
  },
  {
    n:    '06',
    name: 'UI/UX Engineering',
    desc: 'Interfaces built for cognitive clarity, not visual novelty. Information hierarchy, interaction patterns, motion language — each decision reduces friction or communicates state.',
    color: '#86EFAC',
  },
  {
    n:    '07',
    name: 'Backend Systems',
    desc: 'Business logic, async processing, realtime layers, background jobs. The part users never see directly — and the part most responsible for whether the system holds up.',
    color: '#FACC15',
  },
  {
    n:    '08',
    name: 'Scalability Review',
    desc: 'Load patterns, caching strategy, query optimization, bottleneck identification. The system should handle 10x current load without architectural surgery.',
    color: '#FB923C',
  },
  {
    n:    '09',
    name: 'Refinement & Launch',
    desc: 'Test at the edges. Break it deliberately. Fix what breaks. Clean the technical debt that accumulated during velocity. Ship when behavior is correct, not when the deadline arrives.',
    color: '#F87171',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: '#050505',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 50% at 0% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <motion.span variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700, color: '#a78bfa', letterSpacing: '0.25em',
              textTransform: 'uppercase', marginBottom: 16 }}>
            ENGINEERING PROCESS
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.06} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
            Nine stages. No shortcuts.
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ color: 'rgba(228,228,231,0.38)', fontSize: '0.9rem', lineHeight: 1.8,
              maxWidth: 480, margin: '16px 0 0', fontFamily: 'var(--font-space-grotesk)' }}>
            Every system I build follows this sequence. The order is not negotiable.
            Skipping stages doesn&apos;t accelerate delivery — it defers the cost.
          </motion.p>
        </div>

        {/* Steps — two-column grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}
          className="process-grid"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              variants={fadeUp} custom={0.05 + i * 0.04}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.025)' }}
              style={{
                display: 'flex', gap: 20, padding: '24px 20px',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 12,
                transition: 'background 0.25s ease',
              }}
            >
              {/* Step number */}
              <div style={{ flexShrink: 0 }}>
                <span style={{
                  display: 'block', fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.68rem', color: step.color, letterSpacing: '0.06em', marginBottom: 4,
                }}>
                  {step.n}
                </span>
                {/* Colored accent line */}
                <div style={{
                  width: 2, height: 'calc(100% - 24px)',
                  background: `linear-gradient(180deg, ${step.color}60, transparent)`,
                  borderRadius: 2,
                }} />
              </div>

              {/* Content */}
              <div>
                <p style={{
                  fontFamily: 'var(--font-space-grotesk)', fontSize: '0.92rem',
                  fontWeight: 700, color: '#fff', margin: '0 0 8px', letterSpacing: '-0.01em',
                }}>
                  {step.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-space-grotesk)', fontSize: '0.83rem',
                  color: 'rgba(228,228,231,0.45)', lineHeight: 1.75, margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Final spacer cell to balance the grid (9 items, odd) */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px 20px',
            border: '1px solid rgba(255,255,255,0.03)',
            borderRadius: 12,
          }}>
            <p style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
              color: 'rgba(228,228,231,0.15)', letterSpacing: '0.1em', textAlign: 'center',
              margin: 0,
            }}>
              {'> SYSTEM SHIPPED'}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 720px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
