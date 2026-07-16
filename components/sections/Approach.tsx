'use client';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  { n: '01', title: 'Research', desc: 'Understand the problem, users, and domain before anything.' },
  { n: '02', title: 'Requirements', desc: 'Define what success actually looks like.' },
  { n: '03', title: 'User Flow', desc: 'Map how people move through the system.' },
  { n: '04', title: 'Architecture', desc: 'Design the system — services, boundaries, data flow.' },
  { n: '05', title: 'Database Design', desc: 'Model the data so it scales with the product.' },
  { n: '06', title: 'Development', desc: 'Build in layers, with intent behind every decision.' },
  { n: '07', title: 'Testing', desc: 'Verify behavior, edge cases, and failure modes.' },
  { n: '08', title: 'Deployment', desc: 'Ship with stability, monitoring, and rollback in mind.' },
  { n: '09', title: 'Iteration', desc: 'Improve continuously from real-world signal.' },
];

const COLORS = ['#8B5CF6', '#06B6D4', '#4ADE80'];

export default function Approach() {
  return (
    <section style={{ background: '#050505', position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 55% at 100% 30%, rgba(6,182,212,0.05) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: 16 }}
        >
          <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 16 }}>
            SYSTEM DESIGN &amp; ARCHITECTURE
          </p>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.4rem,5vw,4rem)',
            fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', lineHeight: 0.95, margin: 0 }}>
            How I approach<br /><span className="gradient-text">building systems.</span>
          </h2>
          <p style={{ color: 'rgba(228,228,231,0.45)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: 520, marginTop: 20 }}>
            I don&apos;t jump straight into code. I engineer systems — every build follows a
            deliberate path from understanding to iteration.
          </p>
        </motion.div>

        {/* Flow */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginTop: 56 }}>
          {STEPS.map((s, i) => {
            const c = COLORS[i % COLORS.length];
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, ease: EASE, delay: (i % 3) * 0.06 }}
                style={{ position: 'relative', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16,
                  padding: '22px 22px', background: 'rgba(255,255,255,0.012)', overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', fontWeight: 700, color: c }}>{s.n}</span>
                  <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${c}40, transparent)` }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: 0 }}>{s.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(228,228,231,0.45)', lineHeight: 1.55, margin: '6px 0 0' }}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
