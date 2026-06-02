'use client';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
  }),
};

interface Cluster { name: string; color: string; pills: string[]; why: string; }

const clusters: Cluster[] = [
  {
    name:  'FRONTEND SYSTEMS',
    color: '#8B5CF6',
    pills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    why:   'Next.js for SSR + edge-ready deployment. TypeScript for correctness at build time, not runtime surprises. Framer Motion for animation that communicates state rather than just decoration.',
  },
  {
    name:  'BACKEND INFRASTRUCTURE',
    color: '#06B6D4',
    pills: ['FastAPI', 'Django', 'Python', 'REST APIs', 'WebSockets', 'Node.js'],
    why:   'FastAPI for async Python with auto-generated docs and type validation. WebSockets for real-time layers without polling overhead. Python as the universal language bridging AI, automation, and backend logic.',
  },
  {
    name:  'AI SYSTEMS',
    color: '#A78BFA',
    pills: ['LangChain', 'OpenAI API', 'Agents', 'RAG Pipelines', 'Embeddings', 'LLM Routing'],
    why:   'LangChain for agent orchestration and memory management. RAG pipelines to ground LLMs in private data. LLM routing for cost-aware model selection — not every query needs GPT-4.',
  },
  {
    name:  'DATA LAYER',
    color: '#4ADE80',
    pills: ['PostgreSQL', 'Redis', 'Supabase', 'Prisma', 'Vector DBs', 'SQL'],
    why:   'PostgreSQL for relational integrity on complex schemas. Redis for sub-millisecond caching and pub/sub. Prisma for type-safe ORM that eliminates entire categories of runtime errors.',
  },
  {
    name:  'MOTION & EXPERIENCE',
    color: '#FB923C',
    pills: ['Framer Motion', 'GSAP', 'Lenis', 'Canvas API', 'Three.js', 'CSS Animations'],
    why:   'GSAP for timeline-precise cinematic sequences. Lenis for scroll physics that feel intentional. Canvas API for generative visuals that can\'t be replicated with DOM elements.',
  },
  {
    name:  'DEVOPS & ARCHITECTURE',
    color: '#60A5FA',
    pills: ['Docker', 'Vercel', 'Git', 'System Design', 'API Architecture', 'CI/CD'],
    why:   'Docker for reproducible environments that eliminate "works on my machine." System design as the first deliverable, not an afterthought. API contracts defined before any implementation begins.',
  },
];

// Marquee rows — duplicate items for seamless loop
const ROW1 = ['Next.js', 'TypeScript', 'React', 'FastAPI', 'Python', 'LangChain', 'PostgreSQL', 'Framer Motion', 'Docker', 'Tailwind CSS', 'OpenAI', 'Redis', 'Node.js', 'Prisma', 'GSAP'];
const ROW2 = ['Three.js', 'Supabase', 'Vercel', 'CI/CD', 'WebSockets', 'RAG Pipelines', 'LLM Routing', 'Embeddings', 'Canvas API', 'Django', 'REST APIs', 'Vector DBs', 'System Design', 'Lenis'];

export default function Skills() {
  return (
    <section id="skills"
      style={{ background: '#050505', padding: 'clamp(80px,10vw,140px) 0', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(139,92,246,0.04) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(24px,6vw,80px)' }}>

        {/* Section header */}
        <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginBottom: 56, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
            color: '#a78bfa', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            TECHNOLOGY STACK
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.05, margin: 0 }}>
            The systems I build with.
          </h2>
          <p style={{ color: 'rgba(228,228,231,0.4)', fontSize: '0.9rem', fontFamily: 'var(--font-space-grotesk)',
            margin: 0, maxWidth: 460, lineHeight: 1.7 }}>
            Not buzzwords. The actual infrastructure behind every product.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee strip (full bleed) ── */}
      <div style={{ marginBottom: 64, overflow: 'hidden', position: 'relative' }}>
        {/* Edge fades */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 120, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(90deg, #050505, transparent)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 120, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(270deg, #050505, transparent)' }} />

        {/* Row 1 — scrolls left */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 10, animation: 'marquee-left 28s linear infinite',
          width: 'max-content' }}>
          {[...ROW1, ...ROW1].map((t, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem', fontWeight: 600,
              color: 'rgba(167,139,250,0.55)', background: 'rgba(139,92,246,0.07)',
              border: '1px solid rgba(139,92,246,0.15)', borderRadius: 100,
              padding: '7px 18px', margin: '0 6px', whiteSpace: 'nowrap', letterSpacing: '0.04em',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div style={{ display: 'flex', gap: 0, animation: 'marquee-right 32s linear infinite',
          width: 'max-content' }}>
          {[...ROW2, ...ROW2].map((t, i) => (
            <span key={i} style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', fontWeight: 500,
              color: 'rgba(6,182,212,0.45)', background: 'rgba(6,182,212,0.05)',
              border: '1px solid rgba(6,182,212,0.12)', borderRadius: 100,
              padding: '6px 16px', margin: '0 6px', whiteSpace: 'nowrap', letterSpacing: '0.03em',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Cluster grid ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(24px,6vw,80px)' }}>
        <div className="skills-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {clusters.map((cluster, i) => (
            <ClusterCard key={cluster.name} cluster={cluster} index={i} />
          ))}
        </div>

        <motion.p variants={fadeUp} custom={0.6} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ textAlign: 'center', fontFamily: 'var(--font-space-grotesk)', fontStyle: 'italic',
            color: 'rgba(228,228,231,0.2)', fontSize: '0.85rem', marginTop: 48, marginBottom: 0 }}>
          Always learning. Always shipping.
        </motion.p>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (max-width: 1023px) { .skills-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 639px)  { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ClusterCard({ cluster, index }: { cluster: Cluster; index: number }) {
  return (
    <motion.div
      variants={fadeUp} custom={index * 0.07} initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ borderColor: cluster.color, backgroundColor: `${cluster.color}07` }}
      style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 22,
        display: 'flex', flexDirection: 'column', gap: 14,
        transition: 'border-color 0.25s ease, background-color 0.25s ease',
        cursor: 'default', background: 'rgba(255,255,255,0.01)' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0,
          background: `${cluster.color}18`, border: `1px solid ${cluster.color}28`,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: cluster.color, opacity: 0.85 }} />
        </div>
        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '0.7rem',
          letterSpacing: '0.13em', color: cluster.color, textTransform: 'uppercase' }}>
          {cluster.name}
        </span>
      </div>

      {/* Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {cluster.pills.map(pill => (
          <span key={pill} style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 500,
            color: `${cluster.color}CC`, background: `${cluster.color}08`,
            border: `1px solid ${cluster.color}22`, borderRadius: 100, padding: '4px 10px',
            letterSpacing: '0.02em', transition: 'background 0.2s ease, border-color 0.2s ease' }}>
            {pill}
          </span>
        ))}
      </div>

      {/* Why this stack */}
      <p style={{
        fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem',
        color: `${cluster.color}70`, lineHeight: 1.65, margin: 0,
        fontStyle: 'italic', borderTop: `1px solid ${cluster.color}15`, paddingTop: 10,
      }}>
        {cluster.why}
      </p>
    </motion.div>
  );
}
