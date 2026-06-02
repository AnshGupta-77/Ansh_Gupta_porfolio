'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TAGS = ['⬡ Full Stack', '⬡ AI Native', '⬡ Systems First'];

const PARAS = [
  'Every product I build starts as a systems diagram. Architecture before code. Execution before aesthetics.',
  'I build interconnected ecosystems — not isolated apps. Each project compounds on the last.',
  'Execution is the only metric that matters. Not ideas. Not plans. Shipped systems.',
];

export default function Identity() {
  return (
    <section
      id="identity"
      className="relative py-32 overflow-hidden"
      style={{ background: '#080810' }}
    >
      {/* Ambient glow right */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-2xl"
              style={{
                background: 'radial-gradient(ellipse 80% 80% at 40% 40%, rgba(139,92,246,0.18) 0%, transparent 70%)',
                filter: 'blur(40px)', transform: 'scale(1.1)',
              }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '3/4', maxHeight: '560px',
                boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(139,92,246,0.1)',
              }}
            >
              <Image
                src="/images/hero/face.png"
                alt="Ansh Gupta"
                fill
                className="object-cover object-center"
                style={{ filter: 'contrast(1.05) saturate(0.9) brightness(1.02)' }}
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(5,5,5,0.4) 100%)' }}
                aria-hidden="true"
              />
              {/* Floating chip */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-2 rounded-xl border"
                style={{
                  background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderColor: 'rgba(255,255,255,0.08)',
                }}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', fontWeight: 600, color: 'rgba(228,228,231,0.8)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Building in Public
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Content ── */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: '20px' }}>
                THE BUILDER
              </p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.5rem,5vw,4.2rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 0.95 }}>
                Systems architect.<br />
                Product engineer.<br />
                Digital world<br />
                builder.
              </h2>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ width: '40px', height: '1px', background: 'rgba(139,92,246,0.5)', transformOrigin: 'left' }}
            />

            {/* Philosophy paras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {PARAS.map((p, i) => (
                <p key={i} style={{ fontSize: '0.92rem', color: 'rgba(228,228,231,0.5)', lineHeight: 1.85 }}>{p}</p>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[{ n: '5+', l: 'Active Systems' }, { n: '2024–', l: 'Compounding' }].map(s => (
                <div key={s.n} className="flex flex-col gap-1 rounded-xl p-4"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.n}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.l}</span>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {TAGS.map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', color: 'var(--purple-light)', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
