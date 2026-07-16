'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LINKS } from '@/config/links';

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  'Startup MVPs', 'AI Systems', 'Web Platforms', 'Internal Business Tools',
  'CRM Systems', 'Operational Software', 'Technical Consulting', 'System Architecture',
];

const COLORS = ['#8B5CF6', '#06B6D4', '#4ADE80', '#FB923C'];
const hasLinkedIn = LINKS.linkedin && !LINKS.linkedin.includes('PLACEHOLDER');

export default function Available() {
  return (
    <section style={{ background: '#080810', position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: 48, textAlign: 'center' }}
        >
          <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 16 }}>
            FREELANCE &amp; COLLABORATION
          </p>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)',
            fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, margin: 0 }}>
            Available for<br /><span className="gradient-text">serious builds.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 48 }}>
          {SERVICES.map((s, i) => {
            const c = COLORS[i % COLORS.length];
            return (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, ease: EASE, delay: (i % 4) * 0.05 }}
                whileHover={{ borderColor: c, backgroundColor: `${c}06` }}
                style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '20px 22px',
                  transition: 'border-color 0.35s ease, background-color 0.35s ease', cursor: 'default' }}
              >
                <span style={{ display: 'block', width: 8, height: 8, borderRadius: '50%', background: c, boxShadow: `0 0 8px ${c}80`, marginBottom: 14 }} />
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.98rem', fontWeight: 600, color: '#fff' }}>{s}</span>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}
        >
          <Link href="#contact"
            className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{ padding: '0.85rem 1.6rem', background: '#8B5CF6', color: '#fff',
              fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', boxShadow: '0 0 28px rgba(139,92,246,0.35)' }}>
            Book a Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 14 0M12 5l7 7-7 7"/></svg>
          </Link>
          <a href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-2 rounded-xl font-semibold border transition-all duration-300 hover:scale-[1.02]"
            style={{ padding: '0.85rem 1.6rem', color: 'rgba(228,228,231,0.8)',
              borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.05)',
              fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem' }}>
            Email Me
          </a>
          {hasLinkedIn && (
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl font-semibold border transition-all duration-300 hover:scale-[1.02]"
              style={{ padding: '0.85rem 1.6rem', color: 'rgba(228,228,231,0.8)',
                borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)',
                fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem' }}>
              LinkedIn
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
