'use client';
import { motion } from 'framer-motion';

interface ASymbolProps {
  size?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

/**
 * The "A" identity mark — Ansh's visual signature.
 * Used as a large ambient background element and as a small logo mark.
 * SVG-based: crisp at any size, animatable with CSS/Framer.
 */
export default function ASymbol({
  size = 400,
  opacity = 0.04,
  className = '',
  animate = true,
}: ASymbolProps) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, opacity }}
      animate={animate ? {
        y: [0, -12, 0],
        rotate: [0, 0.4, -0.4, 0],
      } : {}}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        viewBox="0 0 200 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        aria-hidden="true"
      >
        {/* Outer triangle outline */}
        <path
          d="M100 12 L188 198 H12 Z"
          stroke="url(#a-grad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Inner crossbar */}
        <line
          x1="46"
          y1="140"
          x2="154"
          y2="140"
          stroke="url(#a-grad)"
          strokeWidth="2"
        />
        {/* Corner accent dots */}
        <circle cx="100" cy="12"  r="3" fill="url(#a-grad)" opacity="0.8" />
        <circle cx="188" cy="198" r="3" fill="url(#a-grad)" opacity="0.8" />
        <circle cx="12"  cy="198" r="3" fill="url(#a-grad)" opacity="0.8" />
        {/* Center glow node */}
        <circle cx="100" cy="140" r="4" fill="url(#a-grad)" opacity="0.6" />
        {/* Subtle circuit lines from crossbar */}
        <line x1="46"  y1="140" x2="30"  y2="155" stroke="url(#a-grad)" strokeWidth="1" opacity="0.4" />
        <line x1="154" y1="140" x2="170" y2="155" stroke="url(#a-grad)" strokeWidth="1" opacity="0.4" />

        <defs>
          <linearGradient id="a-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#06B6D4" />
            <stop offset="50%"  stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
