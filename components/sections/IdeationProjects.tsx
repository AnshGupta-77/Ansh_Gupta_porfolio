'use client';

import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden:   { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const STAGE_LABELS: Record<string, string> = {
  'Researching':  '#06B6D4',
  'Designing':    '#8B5CF6',
  'Prototyping':  '#FB923C',
  'Template Ready': '#4ADE80',
};

const CONCEPTS = [
  {
    name:    'Comedy Culture',
    tagline: 'A digital comedy ecosystem connecting creators, content, and culture.',
    description:
      'An entertainment platform built around comedy content creators — discovery, community, and culture in a single cohesive ecosystem. Designed to make comedy a discoverable, shareable, and monetizable craft.',
    areas:   ['Creator Ecosystem', 'Content Discovery', 'Culture Layer', 'Community Architecture'],
    stage:   'Researching',
    subject: 'Comedy Culture — Concept Discussion',
  },
  {
    name:    'Wedding Planner Platform',
    tagline: 'A complete event planning ecosystem connecting couples with vendors and planning tools.',
    description:
      'An end-to-end template platform for wedding planners and event organizers — vendor discovery, booking workflows, budget tracking, and guest coordination in one behavioral system. Template built and running. Deployment in progress.',
    areas:   ['Vendor Marketplace', 'Workflow Design', 'Budget Systems', 'Event Coordination'],
    stage:   'Template Ready',
    subject: 'Wedding Planner Platform — Discussion',
    note:    'Template complete · Deploying soon',
  },
  {
    name:    'Mien',
    tagline: 'A personalized fashion intelligence app — style identity, wardrobe, and taste unified.',
    description:
      'A fashion concept built around personal style identity rather than trend chasing. AI-powered wardrobe curation, outfit building, and style discovery tailored to individual aesthetic profiles — not algorithmic bestsellers.',
    areas:   ['Style Intelligence', 'Wardrobe Architecture', 'AI Curation', 'Personal Identity'],
    stage:   'Designing',
    subject: 'Mien — Concept Discussion',
  },
];

export default function IdeationProjects() {
  return (
    <section
      id="ideation"
      style={{
        background: '#050505',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.03) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <motion.span variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700, color: '#a78bfa', letterSpacing: '0.25em',
              textTransform: 'uppercase', marginBottom: 16 }}>
            IDEAS IN DEVELOPMENT
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0.06} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
            Building next.
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ color: 'rgba(228,228,231,0.38)', fontSize: '0.9rem', lineHeight: 1.8,
              maxWidth: 520, margin: '16px 0 0', fontFamily: 'var(--font-space-grotesk)' }}>
            These are live ideas in the founder notebook — structured, mapped, and waiting
            for the right collaborator or the right moment to build.
          </motion.p>
        </div>

        {/* Cards */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}
          className="ideation-grid"
        >
          {CONCEPTS.map((c, i) => {
            const stageColor = STAGE_LABELS[c.stage] ?? '#a78bfa';
            return (
              <motion.div
                key={c.name}
                variants={fadeUp} custom={0.08 + i * 0.08}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                style={{
                  background: 'rgba(255,255,255,0.018)',
                  border: `1px solid ${stageColor}18`,
                  borderRadius: 18,
                  padding: '28px 24px',
                  display: 'flex', flexDirection: 'column', gap: 20,
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 24, right: 24, height: 1,
                  background: `linear-gradient(90deg, transparent, ${stageColor}50, transparent)`,
                }} />

                {/* Stage badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.55rem',
                    fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                    padding: '4px 10px', borderRadius: 100,
                    background: `${stageColor}12`, color: stageColor, border: `1px solid ${stageColor}30`,
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%', background: stageColor,
                      boxShadow: `0 0 5px ${stageColor}`,
                      animation: 'ideation-pulse 2.4s ease-in-out infinite',
                      display: 'inline-block',
                    }} />
                    {c.stage}
                  </span>
                  {c.note && (
                    <span style={{
                      fontFamily: '"JetBrains Mono", monospace', fontSize: '0.55rem',
                      color: `${stageColor}80`, letterSpacing: '0.06em',
                    }}>
                      {c.note}
                    </span>
                  )}
                </div>

                {/* Name + tagline */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '1.35rem',
                    fontWeight: 800, color: '#fff', letterSpacing: '-0.03em',
                    lineHeight: 1.1, margin: '0 0 10px',
                  }}>
                    {c.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem',
                    color: `${stageColor}CC`, fontWeight: 500, lineHeight: 1.5, margin: 0,
                  }}>
                    {c.tagline}
                  </p>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-space-grotesk)', fontSize: '0.8rem',
                  color: 'rgba(228,228,231,0.42)', lineHeight: 1.75, margin: 0, flex: 1,
                }}>
                  {c.description}
                </p>

                {/* Focus areas */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {c.areas.map(area => (
                    <span key={area} style={{
                      fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem',
                      color: 'rgba(228,228,231,0.4)',
                      padding: '4px 10px', borderRadius: 8,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      {area}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`mailto:sales@stackbyansh.com?subject=${encodeURIComponent(c.subject)}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem',
                    fontWeight: 700, color: stageColor,
                    padding: '10px 16px', borderRadius: 10,
                    background: `${stageColor}10`, border: `1px solid ${stageColor}25`,
                    textDecoration: 'none', cursor: 'pointer',
                    transition: 'background 0.25s ease, border-color 0.25s ease',
                    letterSpacing: '0.04em',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${stageColor}1E`;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${stageColor}45`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${stageColor}10`;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${stageColor}25`;
                  }}
                >
                  Discuss This Idea
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m5 12 14 0M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p variants={fadeUp} custom={0.32} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
            color: 'rgba(228,228,231,0.15)', letterSpacing: '0.1em',
            textAlign: 'center', margin: '40px 0 0',
          }}>
          {'> ideas awaiting the right collaborator or the right moment'}
        </motion.p>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .ideation-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes ideation-pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
