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

const CHECKLIST = [
  {
    area:    'UX Polish',
    color:   '#8B5CF6',
    items: [
      'Every interaction state is intentional — hover, focus, loading, empty, error',
      'Typography hierarchy communicates priority without explanation',
      'Spacing and visual rhythm feel deliberate, not arbitrary',
      'Motion adds meaning — nothing animates without purpose',
    ],
  },
  {
    area:    'Architecture Integrity',
    color:   '#06B6D4',
    items: [
      'Data models handle edge cases, not just happy-path inputs',
      'API contracts are documented with failure states mapped',
      'Authentication boundaries are explicit and tested',
      'No shortcuts in schema that would require migration at scale',
    ],
  },
  {
    area:    'Performance',
    color:   '#4ADE80',
    items: [
      'First Contentful Paint under 1.5s on real connections',
      'Bundle size is audited — no unnecessary dependencies',
      'Images are optimized, lazy-loaded, and sized correctly',
      'Database queries are indexed for the access patterns that matter',
    ],
  },
  {
    area:    'Security',
    color:   '#FACC15',
    items: [
      'Input validation at every entry point — not just the frontend',
      'Authentication tokens have appropriate expiry and rotation',
      'Sensitive data is never exposed in client-side responses',
      'Rate limiting is in place on public-facing endpoints',
    ],
  },
  {
    area:    'Workflow Testing',
    color:   '#FB923C',
    items: [
      'Every critical user journey tested end-to-end before delivery',
      'Edge cases deliberately triggered and handled gracefully',
      'Concurrent usage patterns considered and stress-tested',
      'Admin and operational flows tested with real-world scenarios',
    ],
  },
  {
    area:    'Device Compatibility',
    color:   '#F472B6',
    items: [
      'Mobile breakpoints are purpose-designed, not scaled-down desktop',
      'Touch targets are accessible and appropriately sized',
      'Tested across Chrome, Safari, Firefox, and mobile browsers',
      'Keyboard navigation works correctly throughout the interface',
    ],
  },
  {
    area:    'Product Consistency',
    color:   '#A78BFA',
    items: [
      'Visual language is consistent — colors, spacing, type, and components',
      'Copy is clear and in the right voice throughout the experience',
      'Loading and transition states match the product\'s overall feel',
      'Every screen tells a coherent story within the product system',
    ],
  },
];

export default function PreDeliveryChecklist() {
  return (
    <section
      id="delivery-standard"
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
        background: 'radial-gradient(ellipse 55% 55% at 0% 100%, rgba(139,92,246,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <motion.span variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700, color: '#a78bfa', letterSpacing: '0.25em',
              textTransform: 'uppercase', marginBottom: 16 }}>
            DELIVERY STANDARD
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.06} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
            What gets checked<br />before you get it.
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ color: 'rgba(228,228,231,0.38)', fontSize: '0.9rem', lineHeight: 1.8,
              maxWidth: 540, margin: '16px 0 0', fontFamily: 'var(--font-space-grotesk)' }}>
            Every system I deliver passes through this checklist. Not as a formality —
            as a minimum standard. If any of these fail, delivery waits.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          className="checklist-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}
        >
          {CHECKLIST.map((cat, i) => (
            <motion.div
              key={cat.area}
              variants={fadeUp} custom={0.06 + i * 0.05}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: `1px solid ${cat.color}15`,
                borderRadius: 16, padding: '22px 20px',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}
            >
              {/* Area header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: `${cat.color}18`, border: `1px solid ${cat.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke={cat.color} strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                  fontSize: '0.75rem', letterSpacing: '0.1em',
                  color: cat.color, textTransform: 'uppercase',
                }}>
                  {cat.area}
                </span>
              </div>

              {/* Checklist items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {cat.items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{
                      flexShrink: 0, marginTop: 3,
                      width: 12, height: 12, borderRadius: 3,
                      background: `${cat.color}18`, border: `1px solid ${cat.color}35`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none"
                        stroke={cat.color} strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem',
                      color: 'rgba(228,228,231,0.48)', lineHeight: 1.6,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Terminal note in the remaining cell */}
          <motion.div
            variants={fadeUp} custom={0.42}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            style={{
              background: 'rgba(255,255,255,0.008)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: 16, padding: '22px 20px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14,
            }}
          >
            <p style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem',
              color: '#4ade80', letterSpacing: '0.08em', margin: 0,
            }}>
              {'> all checks pass'}
            </p>
            <p style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem',
              color: 'rgba(228,228,231,0.18)', letterSpacing: '0.08em', margin: 0,
            }}>
              {'> delivery authorized'}
            </p>
            <p style={{
              fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem',
              color: 'rgba(228,228,231,0.3)', lineHeight: 1.6, margin: '8px 0 0',
            }}>
              This isn&apos;t a checklist for clients. It&apos;s a standard I hold myself to before
              anything ships.
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .checklist-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .checklist-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
