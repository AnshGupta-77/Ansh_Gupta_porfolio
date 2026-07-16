'use client';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const TIMELINE = [
  { year: '2022', title: 'Started Learning Development', color: '#8B5CF6' },
  { year: '2023', title: 'Freelance Projects', color: '#06B6D4' },
  { year: '2024', title: 'Product Building', color: '#4ADE80' },
  { year: '2025', title: 'Founded Stack By Ansh', color: '#FB923C' },
  { year: '2026', title: 'Building Technology Company Infrastructure', color: '#A78BFA' },
  { year: 'Future', title: 'Multi-Company Ecosystem', color: '#F472B6' },
];

export default function Journey() {
  return (
    <section style={{ background: '#050505', position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: 56 }}
        >
          <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 16 }}>
            FOUNDER JOURNEY
          </p>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)',
            fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, margin: 0 }}>
            From curiosity<br /><span className="gradient-text">to a company.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 8 }}>
          {/* vertical line */}
          <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(180deg, rgba(139,92,246,0.4), rgba(244,114,182,0.2))' }} aria-hidden="true" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 24, padding: '16px 0 16px 36px' }}
              >
                {/* node */}
                <span style={{ position: 'absolute', left: -2, width: 18, height: 18, borderRadius: '50%',
                  background: '#050505', border: `2px solid ${t.color}`, boxShadow: `0 0 12px ${t.color}70` }} />
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem', fontWeight: 700,
                  color: t.color, minWidth: 64, flexShrink: 0 }}>{t.year}</span>
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1rem,1.8vw,1.25rem)',
                  fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: 1.3 }}>{t.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', color: 'rgba(228,228,231,0.35)',
            fontStyle: 'italic', marginTop: 40, textAlign: 'center' }}
        >
          People hire stories, not just skills.
        </motion.p>
      </div>
    </section>
  );
}
