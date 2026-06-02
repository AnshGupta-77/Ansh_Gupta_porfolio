'use client';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/config/projects';
import ProjectTile from '@/components/project/ProjectTile';
import ASymbol from '@/components/ui/ASymbol';

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = getFeaturedProjects();

export default function WorldsSection() {
  return (
    <section
      id="worlds"
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* ── Top gradient edge — blends from previous section ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 160,
          background: 'linear-gradient(180deg, var(--bg) 0%, transparent 100%)',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* ── Background ASymbol watermark ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <ASymbol size={800} opacity={0.018} animate={false} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" style={{ zIndex: 10 }}>

        {/* ── Section header ── */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">

          {/* Left: section label + big headline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--purple-light)',
                marginBottom: '1.1rem',
              }}
            >
              BUILD WORLDS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.06 }}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(4rem, 8vw, 7rem)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 0.85,
                color: '#fff',
              }}
            >
              BUILD
              <br />
              <span className="gradient-text">WORLDS</span>
            </motion.h2>
          </div>

          {/* Right: description + sub-label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
            className="flex flex-col"
            style={{ gap: '1rem' }}
          >
            <p
              style={{
                color: 'var(--text-muted)',
                lineHeight: 1.78,
                fontSize: '0.95rem',
              }}
            >
              Products, systems, and execution layers currently being engineered —
              each one a distinct digital world built from the ground up with
              precision and intent.
            </p>

            <div
              className="flex items-center"
              style={{ gap: '0.75rem' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 32,
                  height: 1,
                  background: 'rgba(139,92,246,0.5)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-dim)',
                }}
              >
                5 independent systems being engineered
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Tile grid ── */}

        {/* Row 1: [0] col-span-3 (large) + [1] col-span-2 */}
        {projects.length >= 2 && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
            <div className="md:col-span-3">
              <ProjectTile project={projects[0]} index={0} large />
            </div>
            <div className="md:col-span-2">
              <ProjectTile project={projects[1]} index={1} />
            </div>
          </div>
        )}

        {/* Row 2: [2], [3], [4] in equal thirds */}
        {projects.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {projects.slice(2, 5).map((p, i) => (
              <ProjectTile key={p.slug} project={p} index={i + 2} />
            ))}
          </div>
        )}

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 pt-8 flex items-center justify-between border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
            }}
          >
            5 ACTIVE SYSTEMS
          </span>
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
            }}
          >
            ALL INDEPENDENTLY BUILT
          </span>
        </motion.div>

      </div>
    </section>
  );
}
