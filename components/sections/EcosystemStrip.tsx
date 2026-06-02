'use client';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const PRODUCTS = [
  {
    name: 'Operonix',
    tagline: 'AI Execution Operating System',
    desc: 'Tracks decisions, surfaces context, runs execution layers for ambitious builders.',
    status: 'BUILDING',
    statusColor: '#8B5CF6',
    tags: ['Next.js', 'LangChain', 'FastAPI'],
  },
  {
    name: 'BikeTribe',
    tagline: 'Rider Ecosystem Platform',
    desc: 'Digital world for motorcycle communities — GPS, events, culture, real-time groups.',
    status: 'ACTIVE',
    statusColor: '#FB923C',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'OOZE',
    tagline: 'Cinematic Commerce Engine',
    desc: 'Redefining how fashion and streetwear are experienced and sold online.',
    status: 'LIVE',
    statusColor: '#4ADE80',
    tags: ['Next.js', 'Framer Motion', 'Stripe'],
  },
  {
    name: 'Architect AI',
    tagline: 'Strategic Intelligence Workspace',
    desc: 'Transforms raw ideas into structured execution blueprints using AI.',
    status: 'RESEARCH',
    statusColor: '#06B6D4',
    tags: ['Python', 'OpenAI', 'LangChain'],
  },
  {
    name: 'Seva Agro',
    tagline: 'Enterprise Agriculture Platform',
    desc: 'Intelligent distribution systems and operational infrastructure for agri-commerce.',
    status: 'LIVE SOON',
    statusColor: '#FACC15',
    tags: ['Django', 'PostgreSQL', 'React'],
  },
];

export default function EcosystemStrip() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#050508', padding: 'clamp(64px,8vw,100px) 0' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />

      {/* Top rule */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.25), transparent)', marginBottom: 0 }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 10 }}>
              CURRENTLY BUILDING
            </p>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3vw,2.6rem)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
              Active Ecosystem
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80',
              boxShadow: '0 0 8px #4ade80', display: 'inline-block',
              animation: 'eco-pulse 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(228,228,231,0.35)' }}>
              5 INDEPENDENT SYSTEMS
            </span>
          </motion.div>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
              whileHover={{ borderColor: p.statusColor, backgroundColor: `${p.statusColor}06` }}
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16, padding: 20,
                display: 'flex', flexDirection: 'column', gap: 12,
                cursor: 'default', transition: 'border-color 0.3s ease, background-color 0.3s ease',
                background: 'rgba(255,255,255,0.01)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Top: status dot + name */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: p.statusColor,
                      boxShadow: `0 0 6px ${p.statusColor}90`, flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem',
                      fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{p.name}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem',
                    color: p.statusColor, fontWeight: 600, letterSpacing: '0.06em',
                    margin: 0, lineHeight: 1.3 }}>{p.tagline}</p>
                </div>
                <span style={{ fontSize: '0.48rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                  letterSpacing: '0.1em', color: p.statusColor, background: `${p.statusColor}12`,
                  border: `1px solid ${p.statusColor}35`, borderRadius: 100, padding: '3px 8px',
                  whiteSpace: 'nowrap', flexShrink: 0, marginTop: 2 }}>
                  {p.status}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem',
                color: 'rgba(228,228,231,0.42)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                {p.desc}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.52rem', fontFamily: '"JetBrains Mono", monospace',
                    color: 'rgba(228,228,231,0.3)', background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '2px 7px' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom subtle glow on hover */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, ${p.statusColor}30, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.15), transparent)', marginTop: 0 }} />

      <style>{`
        @keyframes eco-pulse {
          0%,100% { opacity:1; box-shadow:0 0 8px #4ade80; }
          50%      { opacity:0.4; box-shadow:0 0 16px #4ade80; }
        }
      `}</style>
    </section>
  );
}
