'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const CHANNELS = [
  { label: 'Sales',       handle: 'sales@stackbyansh.com',                href: 'mailto:sales@stackbyansh.com',                          color: '#8B5CF6', status: 'PRIMARY' },
  { label: 'Email',       handle: 'ansh.gupta0625@gmail.com',             href: 'mailto:ansh.gupta0625@gmail.com',                       color: '#a78bfa', status: 'OPEN' },
  { label: 'WhatsApp',    handle: '+91 62685 79208',                       href: 'https://wa.me/916268579208',                            color: '#25D366', status: 'MESSAGE' },
  { label: 'LinkedIn',    handle: '/in/ansh-gupta-586643347',             href: 'https://www.linkedin.com/in/ansh-gupta-586643347/',     color: '#0077B5', status: 'CONNECT' },
  { label: 'Instagram',   handle: '@stackby_ansh',                        href: 'https://www.instagram.com/stackby_ansh/',               color: '#E1306C', status: 'FOLLOW' },
  { label: 'Telegram',    handle: '@Ansh7728',                            href: 'https://t.me/Ansh7728',                                 color: '#2AABEE', status: 'MESSAGE' },
  { label: 'GitHub',      handle: '@AnshGupta-77',                        href: 'https://github.com/AnshGupta-77',                       color: 'rgba(228,228,231,0.75)', status: 'ACTIVE' },
  { label: 'Braintrust',  handle: 'Ansh Gupta — Talent Profile',          href: 'https://app.usebraintrust.com/talent/2171441/',         color: '#F5A623', status: 'HIRE' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: '#050505', paddingTop: '8rem', paddingBottom: '6rem' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Label */}
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: '1.75rem' }}>
          Open to Connect
        </motion.p>

        {/* Headline */}
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(3rem,6vw,5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 0.95, marginBottom: '1.75rem' }}>
          {"Let's build"}<br />something<br /><span className="gradient-text">worth building.</span>
        </motion.h2>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '520px', marginBottom: '1.5rem' }}>
          Stack By Ansh is selectively open to founder collaborations, product engineering
          engagements, and ecosystem-level thinking partnerships. If you&apos;re a startup,
          founder, or product team who needs a system architect — not just a developer —
          reach out at{' '}
          <a href="mailto:sales@stackbyansh.com"
            style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>
            sales@stackbyansh.com
          </a>.
        </motion.p>

        {/* Collaboration categories */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2.5rem' }}>
          {['Startups & Founders', 'Product Engineering', 'AI Systems', 'Realtime Platforms', 'Operational Systems', 'Ecosystem Design', 'Business Automation', 'Studio Collaboration'].map(cat => (
            <span key={cat} style={{
              fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 600,
              padding: '5px 12px', borderRadius: 100,
              background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.18)',
              color: 'rgba(167,139,250,0.8)', letterSpacing: '0.06em',
            }}>
              {cat}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ marginBottom: '4rem', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="mailto:sales@stackbyansh.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#8B5CF6', color: '#fff', fontFamily: 'var(--font-space-grotesk)' }}>
            Start a Project <ArrowRight size={15} />
          </Link>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:border-purple-500/40"
            style={{ color: 'rgba(228,228,231,0.65)', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontFamily: 'var(--font-space-grotesk)' }}>
            Full Contact Terminal →
          </Link>
        </motion.div>

        {/* ── Communication Terminal ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ marginBottom: '5rem' }}>

          {/* Terminal label */}
          <p style={{ fontFamily: '"JetBrains Mono", "Fira Code", monospace', fontSize: '0.7rem', color: '#4ade80', letterSpacing: '0.05em', marginBottom: '12px' }}>
            {'> COMMUNICATION CHANNELS'}
          </p>

          {/* Terminal panel */}
          <div style={{ background: '#0a0a0a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '16px', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
              <span style={{ marginLeft: '8px', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
                channels.sh — ansh@systems
              </span>
            </div>

            {/* Rows */}
            {CHANNELS.map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.06 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.025)' }}
                className="flex items-center justify-between group"
                style={{ padding: '14px 20px', borderBottom: i < CHANNELS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', cursor: 'pointer', textDecoration: 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Dot indicator */}
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: ch.color, boxShadow: `0 0 8px ${ch.color}80`, flexShrink: 0, display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>
                    {ch.label}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: 'rgba(228,228,231,0.38)' }}>
                    {ch.handle}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: `${ch.color}15`, color: ch.color, border: `1px solid ${ch.color}30`, fontSize: '0.55rem', letterSpacing: '0.12em', fontFamily: 'var(--font-space-grotesk)', whiteSpace: 'nowrap' }}>
                    {ch.status}
                  </span>
                  <motion.svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}
                    animate={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}>
                    <path d="m5 12 14 0M12 5l7 7-7 7"/>
                  </motion.svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
            © 2025 Ansh Gupta
          </span>
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Build Worlds.
          </span>
          <Link href="/resume/Ansh_Gupta_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-300 hover:text-purple-400"
            style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-space-grotesk)', letterSpacing: '0.1em' }}>
            <Download size={12} /> Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
