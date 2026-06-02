'use client';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const PRINCIPLES = [
  {
    n: '001',
    lines: ['Reduce friction.', 'Increase execution velocity.'],
    color: '#8B5CF6',
  },
  {
    n: '002',
    lines: ['Products should feel alive,', 'not assembled.'],
    color: '#06B6D4',
  },
  {
    n: '003',
    lines: ['Systems compound.', 'Temporary hacks decay.'],
    color: '#4ADE80',
  },
  {
    n: '004',
    lines: ['Clarity beats noise.', 'Depth beats scale.'],
    color: '#FB923C',
  },
  {
    n: '005',
    lines: ['Every interface', 'communicates intent.'],
    color: '#A78BFA',
  },
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
            OPERATING PHILOSOPHY
          </p>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.8rem,5vw,4.5rem)',
            fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', lineHeight: 0.92, margin: 0 }}>
            SYSTEMS<br /><span className="gradient-text">PRINCIPLES</span>
          </h2>
        </motion.div>

        {/* Principles grid — 3 top + 2 bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {PRINCIPLES.slice(0, 3).map((p, i) => (
            <PrincipleCard key={p.n} p={p} i={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PRINCIPLES.slice(3).map((p, i) => (
            <PrincipleCard key={p.n} p={p} i={i + 3} wide />
          ))}
        </div>

      </div>
    </section>
  );
}

function PrincipleCard({ p, i, wide = false }: { p: typeof PRINCIPLES[0]; i: number; wide?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: EASE, delay: i * 0.07 }}
      whileHover={{ borderColor: p.color, backgroundColor: `${p.color}05` }}
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20, padding: wide ? '36px 40px' : '32px 28px',
        position: 'relative', overflow: 'hidden',
        cursor: 'default', transition: 'border-color 0.35s ease, background-color 0.35s ease',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24,
        minHeight: wide ? 160 : 200,
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {p.lines.map((line, li) => (
          <p key={li} style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: wide ? 'clamp(1.1rem,2vw,1.45rem)' : 'clamp(1rem,1.8vw,1.3rem)',
            fontWeight: 700, letterSpacing: '-0.025em',
            color: li === 0 ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.48)',
            lineHeight: 1.25, margin: 0,
          }}>
            {line}
          </p>
        ))}
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
