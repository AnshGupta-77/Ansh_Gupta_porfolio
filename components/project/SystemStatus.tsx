'use client';
import { motion } from 'framer-motion';
import type { SystemStatusItem } from '@/config/projects';

const STATE_STYLES: Record<string, { color: string; symbol: string }> = {
  'STABLE':         { color: '#4ade80', symbol: '●' },
  'IN DEVELOPMENT': { color: '#c084fc', symbol: '◌' },
  'TESTING':        { color: '#60a5fa', symbol: '◐' },
  'PROTOTYPING':    { color: '#facc15', symbol: '◐' },
  'RESEARCH':       { color: '#fb923c', symbol: '?' },
  'PLANNED':        { color: 'rgba(228,228,231,0.2)', symbol: '○' },
};

interface Props {
  items: SystemStatusItem[];
  primaryColor: string;
}

export default function SystemStatus({ items, primaryColor }: Props) {
  const stable = items.filter(i => i.state === 'STABLE').length;
  const total = items.length;

  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{
        borderColor: `${primaryColor}20`,
        background: 'rgba(5,5,5,0.6)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Terminal header */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: `${primaryColor}15`, background: `${primaryColor}08` }}
      >
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: '#f87171' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#facc15' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#4ade80' }} />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: `${primaryColor}80`,
            marginLeft: '8px',
          }}
        >
          SYSTEM STATUS
        </span>
        <span
          className="ml-auto"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.6rem',
            color: '#4ade80',
            letterSpacing: '0.1em',
          }}
        >
          {stable}/{total} STABLE
        </span>
      </div>

      {/* Status rows */}
      <div className="flex flex-col">
        {items.map((item, i) => {
          const style = STATE_STYLES[item.state] ?? STATE_STYLES['PLANNED'];
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.22,1,0.36,1], delay: i * 0.06 }}
              className="flex items-center justify-between px-4 py-3 border-t"
              style={{ borderColor: `${primaryColor}08` }}
            >
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontSize: '0.65rem',
                    color: style.color,
                    animation: item.state === 'STABLE' || item.state === 'IN DEVELOPMENT'
                      ? 'pulse-dot 2.5s ease-in-out infinite'
                      : 'none',
                  }}
                >
                  {style.symbol}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'rgba(228,228,231,0.75)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item.label}
                </span>
              </div>
              <span
                className="px-2 py-0.5 rounded-full uppercase"
                style={{
                  background: `${style.color}12`,
                  color: style.color,
                  border: `1px solid ${style.color}25`,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.state}
              </span>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
