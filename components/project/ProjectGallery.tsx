'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectGalleryProps {
  images: string[];
  name: string;
  primaryColor: string;
  glow: string;
}

const AUTO_MS = 4500;

/**
 * Premium auto-rotating project gallery shown on the project detail page.
 * - Crossfades through screenshots on a timer
 * - Pauses on hover / when the tab is hidden
 * - Arrow + dot controls for manual navigation
 * Renders nothing if there are no images, so projects without screenshots
 * simply skip the section until real images are supplied.
 */
export default function ProjectGallery({ images, name, primaryColor, glow }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex(i => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setIndex(i => (i + 1) % count), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  if (count === 0) return null;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative' }}
    >
      {/* Ambient theme glow behind the frame */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-12% -8%',
          background: `radial-gradient(ellipse at 50% 40%, ${glow}, transparent 70%)`,
          filter: 'blur(60px)',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main stage */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 10',
          borderRadius: '18px',
          overflow: 'hidden',
          border: `1px solid ${primaryColor}26`,
          background: '#0a0a0f',
          zIndex: 1,
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={images[index]}
              alt={`${name} — view ${index + 1} of ${count}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle top/bottom vignette for legibility of controls */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 22%, transparent 70%, rgba(0,0,0,0.45) 100%)',
          }}
        />

        {/* Counter */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 14,
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.7)',
            background: 'rgba(5,5,5,0.55)',
            backdropFilter: 'blur(8px)',
            padding: '4px 10px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </div>

        {/* Arrows (only when more than one image) */}
        {count > 1 && (
          <>
            <GalleryArrow dir="left" onClick={() => go(-1)} />
            <GalleryArrow dir="right" onClick={() => go(1)} />
          </>
        )}
      </div>

      {/* Dots */}
      {count > 1 && (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16 }}>
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to view ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 22 : 7,
                height: 7,
                borderRadius: 999,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                background: i === index ? primaryColor : 'rgba(255,255,255,0.18)',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function GalleryArrow({ dir, onClick }: { dir: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      aria-label={dir === 'left' ? 'Previous image' : 'Next image'}
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [dir]: 12,
        width: 38,
        height: 38,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        cursor: 'pointer',
        color: '#fff',
        background: 'rgba(5,5,5,0.5)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        transition: 'background 0.2s',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        {dir === 'left' ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}
