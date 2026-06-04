'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
  }),
};

function useCounter(target: number, duration = 1400, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

const PRODUCTS = [
  { name: 'Operonix',    desc: 'AI Execution OS — tracks decisions, surfaces context, runs execution layers.',  status: 'BUILDING',  color: '#8B5CF6' },
  { name: 'OOZE',        desc: 'Cinematic fashion commerce. Redefining how streetwear is experienced online.',   status: 'LIVE',      color: '#4ADE80' },
  { name: 'BikeTribe',   desc: 'Digital ecosystem for riders — GPS, events, community, culture.',                status: 'ACTIVE',    color: '#FB923C' },
  { name: 'Architect AI', desc: 'Transforms raw ideas into structured execution systems using AI.',              status: 'RESEARCH',  color: '#06B6D4' },
  { name: 'Seva Agro',   desc: 'Enterprise agricultural platform — intelligent distribution infrastructure.',    status: 'LAUNCHING', color: '#FACC15' },
];

export default function About() {
  const counterRef = useRef<HTMLDivElement>(null);
  const inView = useInView(counterRef, { once: true, margin: '-60px' });
  const c1 = useCounter(5, 1200, inView);

  return (
    <section
      id="about"
      style={{ background: '#050505', position: 'relative', overflow: 'hidden',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)' }}
    >
      {/* Ambient */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 55% at 0% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Top: Founder Story ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 64, marginBottom: 72 }}
          className="about-grid">

          {/* LEFT — narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <motion.span variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                color: '#a78bfa', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              ABOUT STACK BY ANSH
            </motion.span>

            <motion.h2 variants={fadeUp} custom={0.08} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
              From system diagram<br />to shipped product.
            </motion.h2>

            {/* Tagline */}
            <motion.div variants={fadeUp} custom={0.13} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-block', width: 28, height: 1, background: 'rgba(139,92,246,0.5)', flexShrink: 0 }} />
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 600,
                color: 'var(--purple-light)', letterSpacing: '0.06em', margin: 0, lineHeight: 1.4 }}>
                Solo founder. End-to-end product engineer. Ecosystem thinker.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.18} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ color: 'rgba(228,228,231,0.5)', fontSize: '0.92rem', lineHeight: 1.85, margin: 0,
                fontFamily: 'var(--font-space-grotesk)' }}>
                I&apos;m a self-taught systems architect and solo entrepreneur. I build complete
                digital products independently — from database schema to deployment pipeline,
                from user behavior design to business logic architecture. No team. No shortcuts.
                Every layer, intentional.
              </p>
              <p style={{ color: 'rgba(228,228,231,0.5)', fontSize: '0.92rem', lineHeight: 1.85, margin: 0,
                fontFamily: 'var(--font-space-grotesk)' }}>
                Stack By Ansh started as a personal engineering studio — a way to formalize
                what I was already doing: treating every product like an engineered system,
                not just a collection of features. The name reflects the core belief:
                every product is a stack — of decisions, architecture, behaviors, and execution.
              </p>
              <p style={{ color: 'rgba(228,228,231,0.5)', fontSize: '0.92rem', lineHeight: 1.85, margin: 0,
                fontFamily: 'var(--font-space-grotesk)' }}>
                My process doesn&apos;t start with frameworks. It starts with questions: What
                problem persists? Who does this system serve? What behavior needs to change?
                Architecture follows those answers — not the other way around. I&apos;m drawn to the
                intersection of product engineering and operational design — systems that don&apos;t
                just function, but behave intelligently under real-world conditions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} custom={0.24} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              ref={counterRef}
              style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
              {[
                { value: `${c1}+`, label: 'Active Products' },
                { value: '2024', label: 'Studio Founded' },
                { value: '100%', label: 'Solo Engineered' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4,
                  padding: '14px 18px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12 }}>
                  <span style={{ fontSize: '1.8rem', fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.03em' }}>
                    {s.value}
                  </span>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600,
                    color: 'rgba(228,228,231,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — product ecosystem */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <motion.span variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                color: 'rgba(228,228,231,0.28)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              THINGS BEING BUILT
            </motion.span>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {PRODUCTS.map((p, i) => (
                <motion.div key={p.name}
                  variants={fadeUp} custom={0.16 + i * 0.07} initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.025)' }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 10px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'default',
                    borderRadius: 8, transition: 'background 0.2s ease' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: p.color,
                    flexShrink: 0, boxShadow: `0 0 6px ${p.color}80` }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: '#fff', fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 600, fontSize: '0.88rem', marginBottom: 2 }}>{p.name}</div>
                    <div style={{ color: 'rgba(228,228,231,0.38)', fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.75rem', lineHeight: 1.45 }}>{p.desc}</div>
                  </div>
                  <span style={{ fontSize: '0.5rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                    letterSpacing: '0.08em', color: p.color, background: `${p.color}15`,
                    border: `1px solid ${p.color}30`, borderRadius: 100, padding: '3px 8px',
                    textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {p.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Studio philosophy note */}
            <motion.div variants={fadeUp} custom={0.5} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{
                marginTop: 8, padding: '18px 20px', borderRadius: 12,
                background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)',
              }}>
              <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem',
                color: '#a78bfa', letterSpacing: '0.06em', margin: '0 0 8px' }}>
                {'> studio philosophy'}
              </p>
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.8rem',
                color: 'rgba(228,228,231,0.45)', lineHeight: 1.7, margin: 0 }}>
                Stack By Ansh doesn&apos;t assemble features. It engineers systems — each one
                designed to behave correctly, scale intentionally, and compound in value
                over time. Every project is a complete architectural decision, not a
                task list.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
