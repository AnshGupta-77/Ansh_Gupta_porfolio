'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import type { Project } from '@/config/projects';

const STATUS_COLORS: Record<string, string> = {
  'ACTIVE DEVELOPMENT': '#facc15',
  'LIVE · EVOLVING':    '#4ade80',
  'PRE-LAUNCH':         '#fb923c',
  'RESEARCH PHASE':     '#c084fc',
  'RESEARCH COMPLETE':  '#60a5fa',
  'PRIVATE BETA':       '#34d399',
  'ALPHA':              '#f472b6',
};

interface Props {
  project: Project;
  index: number;
  large?: boolean; // first tile gets more visual weight
}

export default function ProjectTile({ project, index, large = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered,     setHovered]     = useState(false);
  const [showNotice,  setShowNotice]  = useState(false);

  /* Mouse-reactive tilt */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width  - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const statusColor = STATUS_COLORS[project.status] ?? '#a78bfa';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { onMouseLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      style={{ perspective: '1000px' }}
    >
      <Link href={`/projects/${project.slug}`} className="block focus:outline-none">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            borderRadius: '20px',
            border: `1px solid ${hovered ? `${project.themeColors.primary}40` : 'rgba(255,255,255,0.06)'}`,
            background: hovered
              ? `linear-gradient(135deg, rgba(5,5,5,0.95), ${project.themeColors.primary}12)`
              : 'rgba(10,10,15,0.8)',
            overflow: 'hidden',
            position: 'relative',
            transition: 'border-color 0.4s ease, background 0.4s ease',
            boxShadow: hovered
              ? `0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px ${project.themeColors.primary}30, inset 0 1px 0 rgba(255,255,255,0.04)`
              : '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          {/* ── Image area ── */}
          <div
            className="relative overflow-hidden"
            style={{ height: large ? '320px' : '220px', background: '#080810' }}
          >
            {project.tileImage ? (
              <Image
                src={project.tileImage}
                alt={project.name}
                fill
                className="object-cover object-center"
                style={{
                  transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease',
                  transform: hovered ? 'scale(1.07)' : 'scale(1.01)',
                  filter: hovered
                    ? 'contrast(1.06) saturate(1.05) brightness(0.9)'
                    : 'contrast(1.02) saturate(0.9) brightness(0.75)',
                }}
              />
            ) : (
              /* Initials fallback */
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.themeColors.primary}22, ${project.themeColors.secondary}11)`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: large ? '5rem' : '3.5rem',
                    fontWeight: 900,
                    color: `${project.themeColors.primary}60`,
                    letterSpacing: '-0.06em',
                    userSelect: 'none',
                  }}
                >
                  {project.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.85) 100%)',
                transition: 'opacity 0.4s ease',
              }}
              aria-hidden="true"
            />

            {/* Mouse-reactive glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at 50% 50%, ${project.themeColors.glow}, transparent 70%)`,
                opacity: hovered ? 0.6 : 0,
                transition: 'opacity 0.5s ease',
              }}
              aria-hidden="true"
            />

            {/* Project number */}
            <div
              className="absolute top-4 right-4"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.15em',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Status badge */}
            <div
              className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold"
              style={{
                background: 'rgba(5,5,5,0.75)',
                backdropFilter: 'blur(12px)',
                borderColor: `${statusColor}30`,
                color: statusColor,
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: statusColor,
                  boxShadow: `0 0 6px ${statusColor}`,
                  animation: project.status === 'ACTIVE DEVELOPMENT' || project.status === 'LIVE · EVOLVING'
                    ? 'pulse-dot 2s ease-in-out infinite'
                    : 'none',
                }}
              />
              {project.status}
            </div>
          </div>

          {/* ── Content area ── */}
          <div className="p-5 flex flex-col gap-3">
            {/* Logo + name row */}
            <div className="flex items-center gap-3">
              {project.logo && (
                <div
                  className="rounded-xl overflow-hidden flex-shrink-0 border"
                  style={{
                    width: 36,
                    height: 36,
                    borderColor: `${project.themeColors.primary}30`,
                    background: `${project.themeColors.primary}10`,
                  }}
                >
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h3
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: large ? '1.6rem' : '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: hovered ? '#fff' : 'rgba(228,228,231,0.92)',
                  transition: 'color 0.3s ease',
                  lineHeight: 1.1,
                }}
              >
                {project.name}
              </h3>
            </div>

            {/* Positioning line */}
            <p
              style={{
                fontSize: '0.82rem',
                color: hovered ? 'rgba(228,228,231,0.65)' : 'rgba(228,228,231,0.4)',
                lineHeight: 1.55,
                transition: 'color 0.3s ease',
              }}
            >
              {project.positioning}
            </p>

            {/* Tags + arrow */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${project.themeColors.primary}12`,
                      color: project.themeColors.text,
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      fontFamily: 'var(--font-space-grotesk)',
                      textTransform: 'uppercase',
                      border: `1px solid ${project.themeColors.primary}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.div
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ duration: 0.25, ease: [0.22,1,0.36,1] }}
                style={{ color: project.themeColors.text, opacity: hovered ? 1 : 0.4 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 12 14 0M12 5l7 7-7 7"/>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Bottom glow line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.themeColors.primary}60, transparent)`,
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
            aria-hidden="true"
          />
        </motion.div>
      </Link>

      {/* ── What to Notice — expandable panel below the card ── */}
      {project.whatToNotice && project.whatToNotice.length > 0 && (
        <div style={{ marginTop: 4 }}>
          <button
            onClick={e => { e.preventDefault(); e.stopPropagation(); setShowNotice(s => !s); }}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 16px',
              background: showNotice ? `${project.themeColors.primary}10` : 'rgba(255,255,255,0.02)',
              border: `1px solid ${showNotice ? `${project.themeColors.primary}25` : 'rgba(255,255,255,0.05)'}`,
              borderRadius: showNotice ? '0 0 12px 12px' : '12px',
              cursor: 'pointer',
              transition: 'background 0.25s ease, border-color 0.25s ease',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: showNotice ? project.themeColors.text : 'rgba(228,228,231,0.3)',
              transition: 'color 0.25s ease',
            }}>
              What to Notice
            </span>
            <motion.span
              animate={{ rotate: showNotice ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: project.themeColors.text, opacity: showNotice ? 1 : 0.35 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </motion.span>
          </button>

          <AnimatePresence>
            {showNotice && (
              <motion.div
                key="notice-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  padding: '14px 16px 16px',
                  background: `${project.themeColors.primary}08`,
                  border: `1px solid ${project.themeColors.primary}20`,
                  borderTop: 'none',
                  borderRadius: '0 0 12px 12px',
                  display: 'flex', flexDirection: 'column', gap: 10,
                }}>
                  {project.whatToNotice!.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{
                        flexShrink: 0, width: 5, height: 5, borderRadius: '50%',
                        background: project.themeColors.primary,
                        boxShadow: `0 0 5px ${project.themeColors.primary}60`,
                        marginTop: 6, display: 'inline-block',
                      }} />
                      <p style={{
                        fontFamily: 'var(--font-space-grotesk)', fontSize: '0.76rem',
                        color: 'rgba(228,228,231,0.55)', lineHeight: 1.65, margin: 0,
                      }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <style>{`
        @keyframes pulse-dot {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
      `}</style>
    </motion.div>
  );
}
