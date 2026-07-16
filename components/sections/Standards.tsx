'use client';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const CHECKLIST = [
  'Performance', 'Security', 'Mobile Responsiveness', 'SEO Foundations', 'Accessibility',
  'Error Handling', 'Analytics Setup', 'Scalability Planning', 'Documentation', 'Deployment Stability',
];

export default function Standards() {
  return (
    <section style={{ background: '#080810', position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,128px) clamp(24px,6vw,80px)' }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 0%, rgba(74,222,128,0.04) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: 48 }}
        >
          <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: '#4ade80', marginBottom: 16 }}>
            BEFORE ANY PROJECT GOES LIVE
          </p>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)',
            fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, margin: 0 }}>
            Shipped ready for<br />the real world.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          {CHECKLIST.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px',
                border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, background: 'rgba(255,255,255,0.012)' }}
            >
              <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 7, display: 'inline-flex',
                alignItems: 'center', justifyContent: 'center', background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.35)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.8"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
