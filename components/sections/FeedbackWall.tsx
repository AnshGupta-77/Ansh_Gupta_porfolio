'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden:   { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

// ─── Replace YOUR_FORMSPREE_ID with the 8-char ID from formspree.io ───────────
// 1. Go to https://formspree.io/
// 2. Create a free account → New Form → copy the form ID
// 3. Paste it below (e.g. "xwpbbkgr")
const FORMSPREE_ID = 'xkoedryl';
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function FeedbackWall() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');
  const [status,  setStatus]  = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('sent');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 10, padding: '12px 16px',
    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem',
    color: '#fff', outline: 'none',
    transition: 'border-color 0.25s ease',
  };

  return (
    <section
      id="feedback"
      style={{
        background: '#050505',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 55% at 100% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          className="feedback-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}
        >

          {/* Left: header */}
          <div>
            <motion.span variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700, color: '#a78bfa', letterSpacing: '0.25em',
                textTransform: 'uppercase', marginBottom: 16 }}>
              FEEDBACK WALL
            </motion.span>
            <motion.h2 variants={fadeUp} custom={0.06} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, margin: 0 }}>
              Honest feedback<br />is how I get better.
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ color: 'rgba(228,228,231,0.38)', fontSize: '0.9rem', lineHeight: 1.8,
                maxWidth: 420, margin: '20px 0 0', fontFamily: 'var(--font-space-grotesk)' }}>
              If you&apos;ve worked with me, seen my work, or have a perspective worth sharing —
              leave it here. Anonymous is fine. Blunt is better.
            </motion.p>

            {/* Context chips */}
            <motion.div variants={fadeUp} custom={0.14} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
              {['Collaboration experience', 'Project quality', 'Communication', 'Technical depth', 'Product thinking'].map(chip => (
                <span key={chip} style={{
                  fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem',
                  padding: '5px 11px', borderRadius: 100,
                  background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)',
                  color: 'rgba(167,139,250,0.65)', letterSpacing: '0.05em',
                }}>
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div variants={fadeUp} custom={0.12} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}>

            {status === 'sent' ? (
              <div style={{
                background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)',
                borderRadius: 16, padding: '36px 28px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>✓</div>
                <p style={{
                  fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem',
                  fontWeight: 700, color: '#4ade80', margin: '0 0 8px',
                }}>
                  Feedback received.
                </p>
                <p style={{
                  fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem',
                  color: 'rgba(228,228,231,0.4)', margin: 0, lineHeight: 1.6,
                }}>
                  Thank you — it&apos;s read and taken seriously.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                style={{
                  background: 'rgba(255,255,255,0.018)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '28px 24px',
                  display: 'flex', flexDirection: 'column', gap: 16,
                }}
              >
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{
                      display: 'block', fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em',
                      color: 'rgba(228,228,231,0.3)', textTransform: 'uppercase', marginBottom: 8,
                    }}>
                      Name <span style={{ color: 'rgba(228,228,231,0.18)' }}>(optional)</span>
                    </label>
                    <input
                      type="text" value={name} onChange={e => setName(e.target.value)}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(139,92,246,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.09)')}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block', fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em',
                      color: 'rgba(228,228,231,0.3)', textTransform: 'uppercase', marginBottom: 8,
                    }}>
                      Email <span style={{ color: 'rgba(228,228,231,0.18)' }}>(optional)</span>
                    </label>
                    <input
                      type="email" value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(139,92,246,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.09)')}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{
                    display: 'block', fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em',
                    color: 'rgba(228,228,231,0.3)', textTransform: 'uppercase', marginBottom: 8,
                  }}>
                    Feedback <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    value={message} onChange={e => setMessage(e.target.value)}
                    placeholder="Be honest. Specifics are more useful than generalities."
                    required rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(139,92,246,0.4)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.09)')}
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <p style={{
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem',
                    color: '#ef4444', margin: 0,
                  }}>
                    Something went wrong. Please try emailing directly at ansh.gupta0625@gmail.com
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending' || !message.trim()}
                  style={{
                    background: status === 'sending' ? 'rgba(139,92,246,0.4)' : '#8B5CF6',
                    color: '#fff', border: 'none', borderRadius: 10,
                    padding: '13px 24px', cursor: status === 'sending' ? 'wait' : 'pointer',
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem', fontWeight: 700,
                    letterSpacing: '0.06em', transition: 'background 0.25s ease, opacity 0.25s ease',
                    opacity: (!message.trim()) ? 0.45 : 1,
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Submit Feedback'}
                </button>

                <p style={{
                  fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem',
                  color: 'rgba(228,228,231,0.2)', margin: 0, lineHeight: 1.5,
                }}>
                  Anonymous submissions are welcome. Your email is never shared or published.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .feedback-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
