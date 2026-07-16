'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CubeLogo from '@/components/ui/CubeLogo';

const FLAG = 'ag_portfolio_intro_v1';

/**
 * Cinematic intro. Shown once per session on the homepage.
 * - Click to enter (required so audio can play).
 * - Video (~8s) and audio (~12s) start together, in sync.
 * - Video has no loop, so it naturally freezes on its last frame when it ends
 *   — no code needed for that, just don't reset currentTime after.
 * - The site does NOT open when the video ends. It waits for the audio (the
 *   longer track) to finish, so the frozen last frame holds under the
 *   remaining narration. Site opens the instant the audio ends.
 * - No subtitles.
 * SSR-safe: renders nothing once the intro has played this session.
 */
export default function PortfolioIntro({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const doneRef = useRef(false);

  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [entered, setEntered] = useState(false);
  const [fading, setFading] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && sessionStorage.getItem(FLAG) === '1') {
      onComplete();
    } else {
      setShow(true);
      document.documentElement.style.overflow = 'hidden';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setFading(true);
    try { sessionStorage.setItem(FLAG, '1'); } catch {}
    try { audioRef.current?.pause(); } catch {}
    document.documentElement.style.overflow = '';
    setTimeout(onComplete, 700);
  }, [onComplete]);

  const handleEnter = useCallback(() => {
    if (entered) return;
    setEntered(true);
    const v = videoRef.current;
    const a = audioRef.current;
    // Start both together, in sync.
    if (v) { v.currentTime = 0; v.play().catch(() => { v.muted = true; v.play().catch(() => {}); }); }
    if (a && !muted) { a.currentTime = 0; a.volume = 1; a.play().catch(() => finish()); }
    else finish(); // no audio available/allowed — don't trap the visitor
    setTimeout(finish, 30000); // hard safety, well past the ~12s narration
  }, [entered, muted, finish]);

  // The site opens only when the AUDIO ends (it's the longer track). The
  // video is left alone at that point — it already froze on its last frame.
  useEffect(() => {
    if (!show) return;
    const a = audioRef.current;
    const onEnded = () => finish();
    const onErr = () => finish();
    a?.addEventListener('ended', onEnded);
    a?.addEventListener('error', onErr);
    return () => { a?.removeEventListener('ended', onEnded); a?.removeEventListener('error', onErr); };
  }, [show, finish]);

  useEffect(() => { if (audioRef.current) audioRef.current.muted = muted; }, [muted]);

  if (!mounted || !show) return null;

  const btn: React.CSSProperties = {
    background: 'rgba(5,5,5,0.6)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)',
    fontSize: '0.57rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
    letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 16px', borderRadius: 8, cursor: 'pointer',
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: '#000',
      opacity: fading ? 0 : 1, transition: 'opacity 0.9s ease', pointerEvents: fading ? 'none' : 'auto' }}>
      <audio ref={audioRef} src="/videos/intro-audio.mp3" preload="auto" />
      <video ref={videoRef} src="/videos/intro-video.mp4" muted={muted} playsInline preload="auto"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: entered ? 1 : 0, transition: 'opacity 0.8s ease' }} />

      {entered && (
        <>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 82% 82% at 50% 50%, transparent 30%, rgba(0,0,0,0.72) 100%)' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 48, background: '#000' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 48, background: '#000' }} />
          <div style={{ position: 'absolute', top: 60, right: 20, display: 'flex', gap: 8, zIndex: 10 }}>
            <button style={btn} onClick={() => setMuted(m => !m)}>{muted ? '○ Muted' : '◉ Sound'}</button>
            <button style={btn} onClick={finish}>Skip →</button>
          </div>
        </>
      )}

      {/* Enter gate */}
      <AnimatePresence>
        {!entered && (
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            onClick={handleEnter}
            style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none', background: 'transparent' }}
          >
            <div aria-hidden style={{ position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 50% 50% at 50% 55%, rgba(139,92,246,0.1), transparent 70%)' }} />
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
              style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
              <CubeLogo size={72} />
              <motion.div animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.4rem,2.4vw,2rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>ENTER</span>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.58rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em' }}>CLICK ANYWHERE</span>
              </motion.div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
