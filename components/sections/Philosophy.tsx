'use client';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const PRINCIPLES = [
  { n: '001', title: 'Systems Before Features', desc: 'Good products solve operational problems, not feature checklists.', color: '#8B5CF6' },
  { n: '002', title: 'Execution Over Ideas', desc: 'Ideas are cheap. Execution is what creates real value.', color: '#06B6D4' },
  { n: '003', title: 'Technology Must Serve Business', desc: 'Technology without business outcomes is incomplete.', color: '#4ADE80' },
  { n: '004', title: 'Design With Intent', desc: 'Every component should exist for a clear purpose.', color: '#FB923C' },
  { n: '005', title: 'Scale Is Planned Early', desc: 'Architecture decisions today shape how far you can grow tomorrow.', color: '#A78BFA' },
  { n: '006', title: 'Simplicity Wins', desc: 'Complexity belongs in the engineering — never in the experience.', color: '#F472B6' },
];

export default function Philosophy() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#080810', padding: 'clamp(80px,10vw,128px) 0' }}
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: 72 }}
        >
          <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 16 }}>
            HOW I THINK
          </p>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.8rem,5vw,4.5rem)',
            fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', lineHeight: 0.92, margin: 0 }}>
            PRINCIPLES<br /><span className="gradient-text">I BUILD ON</span>
          </h2>
        </motion.div>

        {/* Principles grid — 6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard key={p.n} p={p} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PrincipleCard({ p, i }: { p: typeof PRINCIPLES[0]; i: number }) {
  return (
    <motion.div
      className="principle-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: EASE, delay: i * 0.07 }}
      whileHover={{ borderColor: p.color, backgroundColor: `${p.color}05` }}
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20, padding: '32px 28px',
        position: 'relative', overflow: 'hidden',
        cursor: 'default', transition: 'border-color 0.35s ease, background-color 0.35s ease',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24,
        minHeight: 200,
      }}
    >
      {/* Large number watermark */}
      <span style={{
        position: 'absolute', top: -8, right: 16,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 'clamp(4rem,6vw,5.5rem)', fontWeight: 800,
        color: `${p.color}18`,
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '-0.04em',
        transition: 'color 0.35s ease',
      }}
        className="principle-num"
      >
        {p.n}
      </span>

      {/* Small label number */}
      <span style={{
        fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
        color: p.color, letterSpacing: '0.1em', fontWeight: 700,
      }}>
        {p.n}
      </span>

      {/* Principle text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <p style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: 'clamp(1.05rem,1.8vw,1.32rem)',
          fontWeight: 700, letterSpacing: '-0.025em',
          color: 'rgba(255,255,255,0.94)', lineHeight: 1.2, margin: 0,
        }}>
          {p.title}
        </p>
        <p style={{
          fontSize: '0.9rem', fontWeight: 400,
          color: 'rgba(228,228,231,0.5)', lineHeight: 1.6, margin: 0,
        }}>
          {p.desc}
        </p>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${p.color}00, ${p.color}40, ${p.color}00)`,
        opacity: 0, transition: 'opacity 0.35s ease',
      }} className="principle-bar" />

      <style>{`
        .principle-card:hover .principle-num { color: ${p.color}40 !important; }
        .principle-card:hover .principle-bar { opacity: 1 !important; }
      `}</style>
    </motion.div>
  );
}
