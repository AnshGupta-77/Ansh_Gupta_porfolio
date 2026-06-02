'use client';
import { motion } from 'framer-motion';
import type { BuildLogEntry } from '@/config/projects';

interface Props {
  entries: BuildLogEntry[];
  primaryColor: string;
}

export default function BuildLog({ entries, primaryColor }: Props) {
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
          BUILD LOG
        </span>
        <span
          className="ml-auto"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.6rem',
            color: 'var(--text-dim)',
            letterSpacing: '0.1em',
          }}
        >
          {entries.length} ENTRIES
        </span>
      </div>

      {/* Log entries */}
      <div className="flex flex-col p-4 gap-3 max-h-[380px] overflow-y-auto">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.22,1,0.36,1], delay: i * 0.05 }}
            className="flex gap-3 items-start"
          >
            {/* Dot + vertical line */}
            <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: `${primaryColor}70` }}
              />
              {i < entries.length - 1 && (
                <div className="w-px flex-1 min-h-[20px]" style={{ background: `${primaryColor}15` }} />
              )}
            </div>

            {/* Date + milestone + note */}
            <div className="flex flex-col gap-0.5 pb-2">
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: `${primaryColor}70`,
                  textTransform: 'uppercase',
                }}
              >
                {entry.date}
              </span>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'rgba(228,228,231,0.75)',
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
              >
                {entry.milestone}
              </p>
              {entry.note && (
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(228,228,231,0.38)',
                    lineHeight: 1.5,
                  }}
                >
                  {entry.note}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
