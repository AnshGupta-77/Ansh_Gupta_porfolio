'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IMAGES } from '@/config/images';

const BLOCKS = [
  {
    num: '01',
    title: 'Systems Thinker',
    body: 'Every product starts as a system diagram in my head before a single line is written. Architecture first. Code second.',
  },
  {
    num: '02',
    title: 'AI-Native Builder',
    body: 'Integrating AI as a first-class citizen — not a feature bolted on. LLMs, agents, and orchestration layers woven into core execution flows.',
  },
  {
    num: '03',
    title: 'Full-Stack Infrastructure',
    body: 'React + Next.js frontends, FastAPI / Django backends, PostgreSQL + Redis data layers. Production-grade from first deploy.',
  },
  {
    num: '04',
    title: 'Execution by Default',
    body: 'Seven products across AI, SaaS, community, fashion, and agri-tech — all built solo. The ecosystem keeps growing.',
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, #080810 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
          className="text-center mb-20"
        >
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--purple-light)', fontFamily: 'var(--font-space-grotesk)', marginBottom: '16px' }}>
            INSIDE THE STACK
          </p>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 0.95 }}>
            How I build
          </h2>
        </motion.div>

        {/* Two-col: sticky portrait + scroll blocks */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
            className="md:sticky md:top-24"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '3/4',
                maxHeight: '520px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.1)',
              }}
            >
              {/* Ambient glow */}
              <div
                className="absolute inset-0 z-0"
                style={{ background: 'radial-gradient(ellipse 80% 70% at 40% 30%, rgba(139,92,246,0.15) 0%, transparent 65%)', filter: 'blur(20px)' }}
                aria-hidden="true"
              />
              <Image
                src={IMAGES.hero.face}
                alt="Ansh Gupta"
                fill
                className="object-cover object-center relative z-10"
                style={{ filter: 'contrast(1.05) saturate(0.9) brightness(1.04)' }}
              />
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(5,5,5,0.55) 100%)' }}
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Story blocks */}
          <div className="flex flex-col gap-2 pt-4">
            {BLOCKS.map((block, i) => (
              <motion.div
                key={block.num}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: i * 0.08 }}
                className="group flex gap-5 p-6 rounded-2xl border transition-all duration-400 cursor-default"
                style={{
                  borderColor: 'rgba(255,255,255,0.04)',
                  background: 'transparent',
                }}
                whileHover={{
                  borderColor: 'rgba(139,92,246,0.18)',
                  backgroundColor: 'rgba(139,92,246,0.04)',
                  x: 4,
                }}
              >
                {/* Number + line */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1">
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: 'var(--purple-light)',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {block.num}
                  </span>
                  <div className="w-px flex-1 min-h-[32px]" style={{ background: 'rgba(139,92,246,0.2)' }} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.1rem', fontWeight: 700, color: 'rgba(228,228,231,0.88)', letterSpacing: '-0.02em' }}>
                    {block.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {block.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
