'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CubeLogo from '@/components/ui/CubeLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(exitTimer);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Outer ambient glow */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '360px',
          height: '360px',
          background: 'radial-gradient(circle at center, rgba(139,92,246,0.18) 0%, rgba(109,40,217,0.06) 55%, transparent 75%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />
      {/* Inner tight glow */}
      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '160px',
          height: '160px',
          background: 'radial-gradient(circle at center, rgba(167,139,250,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      {/* Centered content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Cube logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <CubeLogo size={110} />
        </motion.div>

        {/* INITIALIZING SYSTEMS label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            color: 'rgba(139,92,246,0.7)',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Initializing Systems
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{
            width: '200px',
            height: '1px',
            backgroundColor: 'rgba(139,92,246,0.15)',
            borderRadius: '1px',
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, delay: 0.2, ease: 'linear' }}
            style={{
              height: '100%',
              backgroundColor: 'rgba(139,92,246,0.7)',
              borderRadius: '1px',
            }}
          />
        </motion.div>
      </div>

      {/* Version number bottom-left */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '24px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.55rem',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.1em',
        }}
      >
        v2.0
      </motion.span>
    </motion.div>
  );
}
