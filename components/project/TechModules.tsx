'use client';
import { motion } from 'framer-motion';

interface Props {
  stack: string[];
  primaryColor: string;
}

const TECH_ICONS: Record<string, string> = {
  'Next.js': '▲',
  'React': '⚛',
  'FastAPI': '⚡',
  'Django': '🎸',
  'PostgreSQL': '🐘',
  'Redis': '⬡',
  'Supabase': '⚡',
  'LangChain': '🔗',
  'Docker': '🐳',
  'TypeScript': 'TS',
  'Python': '🐍',
  'WebSockets': '⟳',
  'Leaflet': '🗺',
  'Tailwind CSS': '🌊',
  'Framer Motion': '◎',
  'OpenAI API': '◉',
  'Stripe': 'S',
  'Vercel': '▲',
  'AWS': '☁',
  'Scikit-learn': '🔬',
  'Pandas': '🐼',
  'XGBoost': '⬢',
  'Next.js 15': '▲',
};

export default function TechModules({ stack, primaryColor }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <p
        style={{
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-space-grotesk)',
        }}
      >
        TECH STACK
      </p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.22,1,0.36,1], delay: i * 0.05 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border"
            style={{
              borderColor: `${primaryColor}20`,
              background: `${primaryColor}08`,
            }}
          >
            {TECH_ICONS[tech] && (
              <span style={{ fontSize: '0.75rem' }}>{TECH_ICONS[tech]}</span>
            )}
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'rgba(228,228,231,0.75)',
                letterSpacing: '0.04em',
              }}
            >
              {tech}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
