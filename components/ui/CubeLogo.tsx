'use client';

import { motion } from 'framer-motion';

interface CubeLogoProps {
  size?: number;
  className?: string;
}

/**
 * Isometric purple cube — the visual identity mark for the loading gate.
 * Inspired by modular systems / building blocks aesthetic.
 * Three visible faces with gradient fills, inner shelf cuts, and pulsing glow.
 */
export default function CubeLogo({ size = 120, className = '' }: CubeLogoProps) {
  // Cube geometry (viewBox 0 0 120 110)
  // Edge length ~37px in isometric projection
  // Top:   M60 12 L97 33 L60 54 L23 33 Z
  // Left:  M23 33 L60 54 L60 96 L23 75 Z
  // Right: M60 54 L97 33 L97 75 L60 96 Z
  //
  // Shelf cuts divide each face into 3 horizontal "modules":
  //   Left face  1/3:  (23,47) → (60,68)
  //   Left face  2/3:  (23,61) → (60,82)
  //   Right face 1/3:  (60,68) → (97,47)
  //   Right face 2/3:  (60,82) → (97,61)

  return (
    <motion.div
      className={`select-none pointer-events-none ${className}`}
      style={{ width: size, height: Math.round(size * 110 / 120) }}
      animate={{
        y: [0, -7, 0],
        filter: [
          'drop-shadow(0 0 10px rgba(139,92,246,0.55)) drop-shadow(0 0 28px rgba(109,40,217,0.28))',
          'drop-shadow(0 0 22px rgba(167,139,250,0.85)) drop-shadow(0 0 52px rgba(139,92,246,0.48))',
          'drop-shadow(0 0 10px rgba(139,92,246,0.55)) drop-shadow(0 0 28px rgba(109,40,217,0.28))',
        ],
      }}
      transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 120 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={Math.round(size * 110 / 120)}
        aria-hidden="true"
      >
        <defs>
          {/* Top face — lightest, catches the "light" */}
          <linearGradient id="cl-top" x1="23" y1="33" x2="97" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#ddd6fe" />
            <stop offset="55%"  stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Left face — medium purple */}
          <linearGradient id="cl-left" x1="0" y1="33" x2="0" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>

          {/* Right face — darkest, in shadow */}
          <linearGradient id="cl-right" x1="97" y1="33" x2="60" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#2e1065" />
          </linearGradient>

          {/* Sub-block fills */}
          <linearGradient id="cl-left-lo" x1="0" y1="61" x2="0" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#5b21b6" />
            <stop offset="100%" stopColor="#3b0764" />
          </linearGradient>
          <linearGradient id="cl-right-hi" x1="97" y1="33" x2="60" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>

        {/* ── TOP FACE ─────────────────────────────────────────────── */}
        <path d="M60 12 L97 33 L60 54 L23 33 Z" fill="url(#cl-top)" />

        {/* Inner diagonal on top face (depth line from center toward back-right) */}
        <line x1="60" y1="12" x2="60" y2="54" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />

        {/* ── LEFT FACE ────────────────────────────────────────────── */}
        {/* Bottom module (2/3 → bottom): darker */}
        <path d="M23 61 L60 82 L60 96 L23 75 Z" fill="url(#cl-left-lo)" />
        {/* Middle module (1/3 → 2/3) */}
        <path d="M23 47 L60 68 L60 82 L23 61 Z" fill="url(#cl-left)" />
        {/* Top module (top → 1/3): slightly lighter overlay */}
        <path d="M23 33 L60 54 L60 68 L23 47 Z" fill="url(#cl-left)" />
        <path d="M23 33 L60 54 L60 68 L23 47 Z" fill="rgba(255,255,255,0.07)" />

        {/* Shelf cut lines — left face */}
        <line x1="23" y1="47" x2="60" y2="68" stroke="rgba(5,5,5,0.5)"   strokeWidth="1.5" />
        <line x1="23" y1="61" x2="60" y2="82" stroke="rgba(5,5,5,0.45)"  strokeWidth="1.5" />

        {/* ── RIGHT FACE ───────────────────────────────────────────── */}
        {/* Top module (top → 1/3): slightly lighter */}
        <path d="M60 54 L97 33 L97 47 L60 68 Z" fill="url(#cl-right-hi)" />
        {/* Middle module (1/3 → 2/3) */}
        <path d="M60 68 L97 47 L97 61 L60 82 Z" fill="url(#cl-right)" />
        {/* Bottom module (2/3 → bottom): darkest */}
        <path d="M60 82 L97 61 L97 75 L60 96 Z" fill="url(#cl-right)" />
        <path d="M60 82 L97 61 L97 75 L60 96 Z" fill="rgba(0,0,0,0.22)" />

        {/* Shelf cut lines — right face */}
        <line x1="60" y1="68" x2="97" y2="47" stroke="rgba(5,5,5,0.4)"   strokeWidth="1.5" />
        <line x1="60" y1="82" x2="97" y2="61" stroke="rgba(5,5,5,0.35)"  strokeWidth="1.5" />

        {/* ── EDGE HIGHLIGHTS ──────────────────────────────────────── */}
        {/* Top-left ridge — brightest highlight */}
        <line x1="60" y1="12" x2="23" y2="33" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
        {/* Top-right ridge */}
        <line x1="60" y1="12" x2="97" y2="33" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
        {/* Left outer edge */}
        <line x1="23" y1="33" x2="23" y2="75" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />
        {/* Right outer edge */}
        <line x1="97" y1="33" x2="97" y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
        {/* Front vertical edge */}
        <line x1="60" y1="54" x2="60" y2="96" stroke="rgba(0,0,0,0.55)"  strokeWidth="1.2" />
        {/* Bottom edges */}
        <line x1="23" y1="75" x2="60" y2="96" stroke="rgba(0,0,0,0.40)" strokeWidth="0.8" />
        <line x1="60" y1="96" x2="97" y2="75" stroke="rgba(0,0,0,0.40)" strokeWidth="0.8" />

        {/* ── CORNER ACCENT DOTS ───────────────────────────────────── */}
        <circle cx="60" cy="12" r="2.2" fill="rgba(255,255,255,0.75)" />
        <circle cx="97" cy="33" r="1.5" fill="rgba(255,255,255,0.30)" />
        <circle cx="23" cy="33" r="1.5" fill="rgba(255,255,255,0.22)" />
        <circle cx="60" cy="54" r="1.2" fill="rgba(255,255,255,0.15)" />
      </svg>
    </motion.div>
  );
}
