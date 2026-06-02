'use client';
import { motion } from 'framer-motion';
import { getPublicProjects } from '@/config/projects';
import ProjectTile from '@/components/project/ProjectTile';
import ASymbol from '@/components/ui/ASymbol';

const projects = getPublicProjects();

export default function BuildWorlds() {
  return (
    <section
      id="build-worlds"
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ambient background "A" */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <ASymbol size={700} opacity={0.025} />
      </div>

      {/* Top gradient edge */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, var(--bg) 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--purple-light)',
                fontFamily: 'var(--font-space-grotesk)',
                marginBottom: '16px',
              }}
            >
              CURRENT ECOSYSTEM
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22,1,0.36,1], delay: 0.05 }}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 0.88,
                color: '#fff',
              }}
            >
              BUILD
              <br />
              <span className="gradient-text">WORLDS</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Products, systems, experiments and execution layers
              currently being engineered — independently.
            </p>
            <div
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-space-grotesk)' }}
            >
              <span
                className="w-8 h-px"
                style={{ background: 'rgba(139,92,246,0.5)' }}
              />
              Products under construction by Ansh Gupta
            </div>
          </motion.div>
        </div>

        {/* ── Tile grid ── */}
        {/* Row 1: one large tile (60%) + one standard (40%) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">
          <div className="md:col-span-3">
            <ProjectTile project={projects[0]} index={0} large />
          </div>
          <div className="md:col-span-2">
            <ProjectTile project={projects[1]} index={1} />
          </div>
        </div>

        {/* Row 2: three equal tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {projects.slice(2, 5).map((p, i) => (
            <ProjectTile key={p.slug} project={p} index={i + 2} />
          ))}
        </div>

        {/* Row 3: remaining tiles (2-col) */}
        {projects.length > 5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.slice(5).map((p, i) => (
              <ProjectTile key={p.slug} project={p} index={i + 5} />
            ))}
          </div>
        )}

        {/* ── Bottom note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-8 flex items-center justify-between border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-space-grotesk)' }}>
            {projects.length} active systems
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-space-grotesk)' }}>
            All independently built
          </span>
        </motion.div>
      </div>
    </section>
  );
}
