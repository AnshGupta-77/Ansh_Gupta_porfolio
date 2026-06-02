'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ASymbol from '@/components/ui/ASymbol';

const EASE = [0.22, 1, 0.36, 1] as const;
const FADE_UP = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)' },
};

const LIVE_SYSTEMS = [
  { name: 'Operonix',   desc: 'AI Execution OS',    status: 'BUILDING', color: '#8B5CF6' },
  { name: 'BikeTribe',  desc: 'Rider Ecosystem',     status: 'ACTIVE',   color: '#FB923C' },
  { name: 'OOZE',       desc: 'Cinematic Commerce',  status: 'LIVE',     color: '#4ADE80' },
  { name: 'Architect',  desc: 'Strategic Workspace', status: 'RESEARCH', color: '#06B6D4' },
];

const TECH_PILLS = ['Next.js', 'TypeScript', 'FastAPI', 'LangChain', 'PostgreSQL', 'Framer Motion', 'Python', 'React'];

const IDENTITY_PARAS = [
  'Every product I build starts as a systems diagram. Architecture before code. Execution before aesthetics.',
  'I build interconnected ecosystems — not isolated apps. Each project compounds on the last.',
  'Execution is the only metric that matters. Not ideas. Not plans. Shipped systems.',
];

export default function Hero() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const layer1Ref   = useRef<HTMLDivElement>(null);
  const layer2Ref   = useRef<HTMLDivElement>(null);
  const layer3Ref   = useRef<HTMLDivElement>(null);
  const mouseRef    = useRef({ x: 0, y: 0 });
  const currRef     = useRef({ x: 0, y: 0 });
  const rafRef      = useRef<number>(0);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia('(pointer: coarse)').matches) return;
    const ctx = canvas.getContext('2d')!;
    let w = 0, h = 0, rafId: number;
    const particles = Array.from({ length: 22 }, () => ({
      x:  Math.random(), y:  Math.random(),
      vx: (Math.random() - 0.5) * 0.00018,
      vy: (Math.random() - 0.5) * 0.00018,
      r:  Math.random() * 1.5 + 0.5,
      o:  Math.random() * 0.3 + 0.08,
    }));
    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.o})`; ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, []);

  /* ── Mouse parallax (smooth lerp) ── */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', onMouse, { passive: true });
    const animate = () => {
      const LERP = 0.055;
      currRef.current.x += (mouseRef.current.x - currRef.current.x) * LERP;
      currRef.current.y += (mouseRef.current.y - currRef.current.y) * LERP;
      const { x, y } = currRef.current;
      if (layer1Ref.current) layer1Ref.current.style.transform = `translate(${x * 14}px, ${y * 10}px)`;
      if (layer2Ref.current) layer2Ref.current.style.transform = `translate(${x * 22}px, ${y * 16}px)`;
      if (layer3Ref.current) layer3Ref.current.style.transform = `translate(${x * 8}px,  ${y * 6}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.5, zIndex: 0 }} />

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div className="absolute" style={{ top: '20%', right: '15%', width: 220, height: 220, borderRadius: '50%',
          background: 'rgba(139,92,246,0.06)', filter: 'blur(60px)', animation: 'hero-float 8s ease-in-out infinite' }} />
        <div className="absolute" style={{ bottom: '25%', left: '8%', width: 160, height: 160, borderRadius: '50%',
          background: 'rgba(6,182,212,0.05)', filter: 'blur(60px)', animation: 'hero-float 12s ease-in-out 2s infinite' }} />
      </div>

      {/* ASymbol watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden="true" style={{ zIndex: 1 }}>
        <ASymbol size={480} opacity={0.03} />
      </div>

      {/* ── Main hero viewport ── */}
      <div
        className="relative min-h-screen flex flex-col justify-center"
        style={{ paddingTop: '88px', zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT: main content */}
            <motion.div
              className="flex flex-col" style={{ gap: '1.75rem' }}
              initial="hidden" animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              {/* Human greeting */}
              <motion.p variants={FADE_UP} transition={{ duration: 0.5, ease: EASE }}
                style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem',
                  color: 'rgba(228,228,231,0.38)', letterSpacing: '0.04em', margin: 0 }}>
                Hi, I&rsquo;m Ansh.
              </motion.p>

              {/* Status pill */}
              <motion.div variants={FADE_UP} transition={{ duration: 0.6, ease: EASE }}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                  style={{ background: 'rgba(139,92,246,0.06)', borderColor: 'rgba(139,92,246,0.2)',
                    color: 'rgba(228,228,231,0.7)', fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80',
                    boxShadow: '0 0 6px #4ade80', animation: 'pulse-green 2s ease-in-out infinite', flexShrink: 0 }} />
                  Founder &bull; Systems Architect &bull; Product Engineer
                </span>
              </motion.div>

              {/* Headline */}
              <div className="flex flex-col" style={{ gap: '0.05em' }}>
                {(['SYSTEMS.', 'INTERFACES.', 'DIGITAL WORLDS.'] as const).map((line, i) => (
                  <motion.div key={line} variants={FADE_UP} transition={{ duration: 0.9, ease: EASE, delay: i * 0.05 }}>
                    <span className={i === 2 ? 'gradient-text' : ''} style={{
                      display: 'block', fontFamily: 'var(--font-space-grotesk)',
                      fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 900,
                      letterSpacing: '-0.04em', lineHeight: 0.88,
                      color: i === 2 ? undefined : '#fff',
                    }}>
                      {line}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Sub */}
              <motion.p variants={FADE_UP} transition={{ duration: 0.7, ease: EASE }}
                style={{ color: 'rgba(228,228,231,0.45)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: 460 }}>
                Solo entrepreneur building behavioral ecosystems, realtime platforms,
                and operational systems designed for real-world execution — from architecture
                to interface to scale.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={FADE_UP} transition={{ duration: 0.7, ease: EASE }}
                className="flex flex-wrap items-center" style={{ gap: '0.875rem' }}>
                <Link href="#worlds"
                  className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                  style={{ padding: '0.75rem 1.5rem', background: '#8B5CF6', color: '#fff',
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem',
                    boxShadow: '0 0 28px rgba(139,92,246,0.35)' }}>
                  Explore Projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="m5 12 14 0M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl font-semibold border transition-all duration-300 hover:border-purple-500/40"
                  style={{ padding: '0.75rem 1.5rem', color: 'rgba(228,228,231,0.75)',
                    borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.05)',
                    fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', backdropFilter: 'blur(8px)' }}>
                  Get in Touch
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={FADE_UP} transition={{ duration: 0.7, ease: EASE }}
                className="flex items-center" style={{ gap: 0, paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {[{ value: '5+', label: 'Products' }, { value: '3+', label: 'Live Systems' }, { value: '2025', label: 'Currently Active' }]
                  .map((stat, i) => (
                    <div key={stat.label} className="flex items-center" style={{ gap: 0 }}>
                      {i > 0 && <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.07)', margin: '0 1.5rem', flexShrink: 0 }} />}
                      <div className="flex flex-col" style={{ gap: '0.15rem' }}>
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.3rem', fontWeight: 800,
                          letterSpacing: '-0.03em', color: 'rgba(228,228,231,0.85)', lineHeight: 1 }}>{stat.value}</span>
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.58rem', fontWeight: 600,
                          letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(228,228,231,0.28)' }}>{stat.label}</span>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: floating ecosystem visualization */}
            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
              style={{ height: 520, position: 'relative' }}
            >
              {/* Grid lines background */}
              <div ref={layer3Ref} style={{ position: 'absolute', inset: 0, willChange: 'transform' }} aria-hidden="true">
                <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
                  <defs>
                    <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139,92,246,1)" strokeWidth="0.6"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-hero)" />
                </svg>
                <div style={{ position: 'absolute', top: 0, right: 0, width: 60, height: 60,
                  borderTop: '1px solid rgba(139,92,246,0.3)', borderRight: '1px solid rgba(139,92,246,0.3)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: 60, height: 60,
                  borderBottom: '1px solid rgba(139,92,246,0.15)', borderLeft: '1px solid rgba(139,92,246,0.15)' }} />
              </div>

              {/* Layer 1 (mid parallax): System status card */}
              <div ref={layer1Ref} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
                  style={{
                    position: 'absolute', top: 32, right: 24, width: 280,
                    background: 'rgba(8,8,16,0.82)', backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(139,92,246,0.18)', borderRadius: 14,
                    overflow: 'hidden', animation: 'hero-float 9s ease-in-out infinite',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                    <span style={{ marginLeft: 6, fontFamily: '"JetBrains Mono", monospace', fontSize: '0.55rem',
                      color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>live.systems</span>
                  </div>
                  {LIVE_SYSTEMS.map((s, i) => (
                    <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px',
                      borderBottom: i < LIVE_SYSTEMS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.color,
                        boxShadow: `0 0 6px ${s.color}90`, flexShrink: 0, display: 'inline-block',
                        animation: s.status === 'LIVE' ? 'pulse-green 2s infinite' : undefined }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem',
                          fontWeight: 600, color: '#fff', letterSpacing: '0.02em' }}>{s.name}</div>
                        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.56rem',
                          color: 'rgba(228,228,231,0.35)' }}>{s.desc}</div>
                      </div>
                      <span style={{ fontSize: '0.5rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                        letterSpacing: '0.1em', color: s.color, background: `${s.color}15`,
                        border: `1px solid ${s.color}30`, borderRadius: 100, padding: '2px 7px', whiteSpace: 'nowrap' }}>
                        {s.status}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Architecture nodes SVG */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.0, ease: EASE }}
                  style={{ position: 'absolute', bottom: 90, left: 20, animation: 'hero-float 13s ease-in-out 4s infinite' }}
                  aria-hidden="true"
                >
                  <svg width="180" height="90" viewBox="0 0 180 90">
                    <line x1="20" y1="45" x2="80" y2="20" stroke="rgba(139,92,246,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
                    <line x1="20" y1="45" x2="80" y2="70" stroke="rgba(139,92,246,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
                    <line x1="80" y1="20" x2="160" y2="45" stroke="rgba(6,182,212,0.2)" strokeWidth="1" strokeDasharray="3 3"/>
                    <line x1="80" y1="70" x2="160" y2="45" stroke="rgba(6,182,212,0.2)" strokeWidth="1" strokeDasharray="3 3"/>
                    {[{cx:20,cy:45,c:'#8B5CF6'},{cx:80,cy:20,c:'#06B6D4'},{cx:80,cy:70,c:'#4ADE80'},{cx:160,cy:45,c:'#FB923C'}].map((n,i)=>(
                      <g key={i}>
                        <circle cx={n.cx} cy={n.cy} r="7" fill={`${n.c}15`} stroke={`${n.c}50`} strokeWidth="1"/>
                        <circle cx={n.cx} cy={n.cy} r="3" fill={n.c} opacity="0.9"/>
                      </g>
                    ))}
                  </svg>
                </motion.div>
              </div>

              {/* Layer 2 (deeper parallax): floating tech pills + counter */}
              <div ref={layer2Ref} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
                  style={{
                    position: 'absolute', bottom: 100, right: 8, width: 200,
                    background: 'rgba(8,8,16,0.75)', backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '14px 16px',
                    animation: 'hero-float 11s ease-in-out 3s infinite',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.56rem', fontWeight: 700,
                    letterSpacing: '0.18em', color: 'rgba(228,228,231,0.3)', textTransform: 'uppercase', marginBottom: 10 }}>
                    ECOSYSTEM LOAD
                  </div>
                  {[{ label: 'Products', pct: 89, color: '#8B5CF6' }, { label: 'Systems', pct: 72, color: '#06B6D4' }].map(b => (
                    <div key={b.label} style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', color: 'rgba(228,228,231,0.5)' }}>{b.label}</span>
                        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: b.color }}>{b.pct}%</span>
                      </div>
                      <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ width: `${b.pct}%`, height: '100%', background: b.color,
                          borderRadius: 2, boxShadow: `0 0 6px ${b.color}60` }} />
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Floating tech pills */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2, ease: EASE }}
                  style={{ position: 'absolute', top: '38%', left: 12, display: 'flex', flexWrap: 'wrap', gap: 6, maxWidth: 200,
                    animation: 'hero-float 10s ease-in-out 1s infinite' }}
                  aria-hidden="true"
                >
                  {TECH_PILLS.slice(0, 5).map(pill => (
                    <span key={pill} style={{
                      fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', fontWeight: 600,
                      letterSpacing: '0.04em', color: 'rgba(167,139,250,0.7)',
                      background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)',
                      borderRadius: 100, padding: '4px 10px',
                    }}>
                      {pill}
                    </span>
                  ))}
                </motion.div>

                {/* Ambient code snippet */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.4, ease: EASE }}
                  style={{ position: 'absolute', top: '20%', left: '30%',
                    fontFamily: '"JetBrains Mono", monospace', fontSize: '0.52rem',
                    color: 'rgba(139,92,246,0.3)', lineHeight: 1.7, pointerEvents: 'none',
                    animation: 'hero-float 15s ease-in-out 6s infinite' }}
                  aria-hidden="true"
                >
                  <div><span style={{ color: 'rgba(6,182,212,0.4)' }}>const</span> <span style={{ color: 'rgba(74,222,128,0.4)' }}>system</span> = {'{'}</div>
                  <div style={{ paddingLeft: 12 }}><span style={{ color: 'rgba(167,139,250,0.4)' }}>status</span>: <span style={{ color: 'rgba(251,146,60,0.4)' }}>&apos;ACTIVE&apos;</span>,</div>
                  <div style={{ paddingLeft: 12 }}><span style={{ color: 'rgba(167,139,250,0.4)' }}>products</span>: <span style={{ color: 'rgba(251,146,60,0.4)' }}>5</span>,</div>
                  <div>{'}'}</div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          style={{ gap: '0.4rem', zIndex: 10 }} aria-hidden="true">
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.55rem',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(228,228,231,0.18)' }}>scroll</span>
          <div className="rounded-full overflow-hidden" style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.06)' }}>
            <motion.div className="w-full rounded-full" style={{ height: '40%', background: 'rgba(139,92,246,0.55)' }}
              animate={{ y: ['0%', '150%', '0%'] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
        </motion.div>
      </div>

      {/* ── Identity / Portrait section — below fold ── */}
      <div
        className="relative"
        style={{ background: '#080810' }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse 80% 80% at 40% 40%, rgba(139,92,246,0.18) 0%, transparent 70%)',
                  filter: 'blur(40px)', transform: 'scale(1.1)',
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: '3/4', maxHeight: '560px',
                  boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(139,92,246,0.1)',
                }}
              >
                <Image
                  src="/images/hero/face.png"
                  alt="Ansh Gupta"
                  fill
                  className="object-cover object-center"
                  style={{ filter: 'contrast(1.05) saturate(0.9) brightness(1.02)' }}
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(5,5,5,0.4) 100%)' }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-2 rounded-xl border"
                  style={{
                    background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', fontWeight: 600, color: 'rgba(228,228,231,0.8)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    Building in Public
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: '20px' }}>
                  THE BUILDER
                </p>
                <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2.5rem,5vw,4.2rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 0.95 }}>
                  Systems architect.<br />
                  Product engineer.<br />
                  Digital world<br />
                  builder.
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                style={{ width: '40px', height: '1px', background: 'rgba(139,92,246,0.5)', transformOrigin: 'left' }}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="flex flex-col gap-4"
              >
                {IDENTITY_PARAS.map((p, i) => (
                  <p key={i} style={{ fontSize: '0.92rem', color: 'rgba(228,228,231,0.5)', lineHeight: 1.85 }}>{p}</p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {[{ n: '5+', l: 'Active Systems' }, { n: '2024–', l: 'Compounding' }].map(s => (
                  <div key={s.n} className="flex flex-col gap-1 rounded-xl p-4"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.n}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.l}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap gap-2"
              >
                {['⬡ Full Stack', '⬡ AI Native', '⬡ Systems First'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', color: 'var(--purple-light)', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-float {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(8px,-12px) scale(1.02); }
        }
        @keyframes pulse-green {
          0%,100% { opacity:1;   box-shadow:0 0 6px #4ade80; }
          50%      { opacity:0.5; box-shadow:0 0 14px #4ade80; }
        }
      `}</style>
    </section>
  );
}
