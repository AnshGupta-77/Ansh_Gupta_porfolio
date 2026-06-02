'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ASymbol from '@/components/ui/ASymbol';

const CHANNELS = [
  { label: 'Email',      handle: 'ansh.gupta0625@gmail.com',         href: 'mailto:ansh.gupta0625@gmail.com',                      color: '#a78bfa', status: 'OPEN'    },
  { label: 'GitHub',     handle: '@AnshGupta-77',                   href: 'https://github.com/AnshGupta-77',                      color: '#e4e4e7', status: 'ACTIVE'  },
  { label: 'LinkedIn',   handle: '/in/ansh-gupta-586643347',        href: 'https://www.linkedin.com/in/ansh-gupta-586643347/',    color: '#0077B5', status: 'CONNECT' },
  { label: 'Instagram',  handle: '@stackby_ansh',                   href: 'https://www.instagram.com/stackby_ansh/',              color: '#E1306C', status: 'FOLLOW'  },
  { label: 'WhatsApp',   handle: '+91 62685 79208',                  href: 'https://wa.me/916268579208',                           color: '#25D366', status: 'MESSAGE' },
  { label: 'Telegram',   handle: '@Ansh7728',                       href: 'https://t.me/Ansh7728',                                color: '#2AABEE', status: 'MESSAGE' },
  { label: 'Braintrust', handle: 'Ansh Gupta — Talent Profile',     href: 'https://app.usebraintrust.com/talent/2171441/',        color: '#F5A623', status: 'HIRE'    },
];

const BOOT_LINES = [
  { text: '> INITIALIZING SECURE CHANNEL...', color: '#4ade80' },
  { text: '✓ Identity verified: Ansh Gupta',  color: '#4ade80' },
  { text: '✓ Systems status: ACTIVE',         color: '#4ade80' },
  { text: '> SELECT COMMUNICATION PROTOCOL:', color: 'rgba(228,228,231,0.6)' },
];

const AVAILABILITY = ['Technical Consulting', 'Product Collaboration', 'System Architecture'];

export default function ContactPage() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [blink, setBlink] = useState(true);

  // Stagger boot lines
  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return;
    const t = setTimeout(() => setVisibleLines(v => v + 1), 350 + visibleLines * 250);
    return () => clearTimeout(t);
  }, [visibleLines]);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 800);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
    setMessage('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: '#050505', paddingTop: '80px' }}>

      {/* Grid pattern bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Ambient blobs */}
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ bottom: '10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      {/* A symbol watermark */}
      <div className="absolute bottom-0 right-0 pointer-events-none" aria-hidden="true">
        <ASymbol size={400} opacity={0.02} />
      </div>

      {/* ── Top nav bar ── */}
      <div className="relative z-10 flex items-center justify-between max-w-5xl mx-auto px-6 py-5">
        <Link href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-300 hover:border-purple-500/30"
          style={{ background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(228,228,231,0.7)', fontFamily: 'var(--font-space-grotesk)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m19 12-14 0M12 19l-7-7 7-7"/>
          </svg>
          Home
        </Link>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: 'rgba(228,228,231,0.25)', letterSpacing: '0.1em' }}>
          COMM TERMINAL v1.0
        </span>
      </div>

      {/* ── Hero ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(3rem,7vw,6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.9, color: '#fff', marginBottom: '16px' }}
        >
          GET IN<br /><span className="gradient-text">TOUCH.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '420px' }}
        >
          Direct line to the systems builder. Select your channel.
        </motion.p>
      </div>

      {/* ── Terminal panel ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-10 max-w-4xl mx-auto px-6 pb-16"
      >
        <div style={{ background: '#0a0a0f', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '20px', overflow: 'hidden' }}>

          {/* Terminal header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
            <span style={{ flex: 1, textAlign: 'center', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>
              ansh@systems:~/contact
            </span>
            <span style={{ fontSize: '0.8rem', color: '#4ade80', opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }}>▮</span>
          </div>

          {/* Boot lines */}
          <div style={{ padding: '24px 24px 16px', fontFamily: '"JetBrains Mono", "Fira Code", monospace', fontSize: '0.78rem', lineHeight: 1.9 }}>
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }} style={{ color: line.color }}>
                {line.text}
              </motion.div>
            ))}
          </div>

          {/* Channel cards grid */}
          <AnimatePresence>
            {visibleLines >= BOOT_LINES.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ padding: '8px 24px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}
              >
                {CHANNELS.map((ch, i) => (
                  <motion.a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                    whileHover={{ scale: 1.02, borderColor: ch.color, backgroundColor: `${ch.color}08` }}
                    style={{
                      display: 'flex', flexDirection: 'column', gap: '10px',
                      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '14px', padding: '18px', cursor: 'pointer', textDecoration: 'none',
                      transition: 'border-color 0.25s ease, background 0.25s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: ch.color,
                          boxShadow: `0 0 8px ${ch.color}80`, flexShrink: 0, display: 'inline-block' }} />
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                          {ch.label}
                        </span>
                      </div>
                      <span style={{ background: `${ch.color}18`, color: ch.color, border: `1px solid ${ch.color}30`,
                        borderRadius: '99px', padding: '2px 8px', fontSize: '0.55rem', fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 700, letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>
                        {ch.status}
                      </span>
                    </div>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: 'rgba(228,228,231,0.38)', wordBreak: 'break-all' }}>
                      {ch.handle}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Message prompt */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '20px 24px' }}>
            <AnimatePresence mode="wait">
              {!formOpen && !submitted && (
                <motion.button
                  key="prompt"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setFormOpen(true)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', color: '#4ade80' }}>{'> YOUR MESSAGE'}</span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', color: '#4ade80', opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }}>_</span>
                </motion.button>
              )}

              {formOpen && !submitted && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: '#4ade80', marginBottom: '4px' }}>
                    {'> TYPE YOUR MESSAGE:'}
                  </span>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={4}
                    placeholder="What would you like to build together?"
                    style={{
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,92,246,0.2)',
                      borderRadius: '10px', padding: '12px 16px', color: '#fff', resize: 'none',
                      fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', lineHeight: 1.7,
                      outline: 'none', width: '100%',
                    }}
                  />
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                      style={{ background: '#8B5CF6', color: '#fff', fontFamily: 'var(--font-space-grotesk)', border: 'none', cursor: 'pointer' }}>
                      SEND MESSAGE →
                    </button>
                    <button type="button" onClick={() => setFormOpen(false)}
                      style={{ background: 'none', border: 'none', color: 'rgba(228,228,231,0.3)', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', cursor: 'pointer' }}>
                      [ESC]
                    </button>
                  </div>
                </motion.form>
              )}

              {submitted && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', color: '#4ade80' }}>
                  ✓ Message received. Will respond within 48h.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Terminal footer */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '10px 24px', background: 'rgba(0,0,0,0.2)' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem', color: 'rgba(228,228,231,0.2)', letterSpacing: '0.08em' }}>
              {'> CONNECTION SECURE  ·  ENCRYPTED  ·  ansh@systems'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Availability section ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl mx-auto px-6 pb-24 text-center"
      >
        <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '20px' }}>
          CURRENTLY AVAILABLE FOR
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
          {AVAILABILITY.map(a => (
            <span key={a} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '99px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem', fontWeight: 600, color: 'rgba(228,228,231,0.7)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80',
                boxShadow: '0 0 6px #4ade80', display: 'inline-block', animation: 'pulse-avail 2s ease-in-out infinite' }} />
              {a}
            </span>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
          Response time: Within 24–48 hours
        </p>
      </motion.div>

      <style>{`
        @keyframes pulse-avail {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
