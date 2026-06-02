'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CubeLogo from '@/components/ui/CubeLogo';

// ─── Subtitle definitions ──────────────────────────────────────────────────
interface Sub { start: number; end: number; lines: string[]; }

const SUBTITLES: Sub[] = [
  { start: 0.3,  end: 2.8,  lines: ['Not built to imitate.'] },
  { start: 3.1,  end: 5.5,  lines: ['Built to create presence.'] },
  { start: 5.9,  end: 9.8,  lines: ['From intelligent systems', 'to immersive digital experiences —'] },
  { start: 10.1, end: 13.2, lines: ['Every product here', 'is engineered with intention.'] },
  { start: 13.6, end: 17.0, lines: ['Welcome to the world of Ansh Gupta.'] },
];

// "BGM full" levels
const BGM_FULL = { drone: 0.20, bass: 0.14, pad: 0.10, room: 0.018, fan: 0.024 };
// Ducked levels while narration is audible
const BGM_DUCK = { drone: 0.022, bass: 0.016, pad: 0.012, room: 0.006, fan: 0.008 };

// ─── Web Audio ambient engine ──────────────────────────────────────────────
function buildAmbient(ctx: AudioContext) {
  const master = ctx.createGain();
  master.gain.value = 1;
  master.connect(ctx.destination);

  const bufSize = ctx.sampleRate * 4;
  const noiseBuf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;

  // Room tone
  const roomSrc = ctx.createBufferSource();
  roomSrc.buffer = noiseBuf; roomSrc.loop = true;
  const roomBpf = ctx.createBiquadFilter();
  roomBpf.type = 'bandpass'; roomBpf.frequency.value = 480; roomBpf.Q.value = 0.4;
  const roomGain = ctx.createGain(); roomGain.gain.value = 0;
  roomSrc.connect(roomBpf).connect(roomGain).connect(master);
  roomSrc.start();

  // PC fan hum
  const fanSrc = ctx.createBufferSource();
  fanSrc.buffer = noiseBuf; fanSrc.loop = true;
  const fanLpf = ctx.createBiquadFilter();
  fanLpf.type = 'lowpass'; fanLpf.frequency.value = 95;
  const fanGain = ctx.createGain(); fanGain.gain.value = 0;
  fanSrc.connect(fanLpf).connect(fanGain).connect(master);
  fanSrc.start();

  // Drone oscillators
  const droneGain = ctx.createGain(); droneGain.gain.value = 0;
  droneGain.connect(master);
  [55, 57.5].forEach(f => {
    const osc = ctx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = f;
    const g = ctx.createGain(); g.gain.value = 0.5;
    osc.connect(g).connect(droneGain); osc.start();
  });

  // Bass swell
  const bassGain = ctx.createGain(); bassGain.gain.value = 0;
  bassGain.connect(master);
  const bassOsc = ctx.createOscillator();
  bassOsc.type = 'sine'; bassOsc.frequency.value = 42;
  const bassLpf = ctx.createBiquadFilter();
  bassLpf.type = 'lowpass'; bassLpf.frequency.value = 200;
  bassOsc.connect(bassLpf).connect(bassGain); bassOsc.start();

  // Synth pad
  const padGain = ctx.createGain(); padGain.gain.value = 0;
  padGain.connect(master);
  const padHpf = ctx.createBiquadFilter();
  padHpf.type = 'highpass'; padHpf.frequency.value = 700;
  padHpf.connect(padGain);
  [220, 277.18, 329.63].forEach((f, i) => {
    const osc = ctx.createOscillator();
    osc.type = 'triangle'; osc.frequency.value = f;
    const g = ctx.createGain(); g.gain.value = [0.5, 0.35, 0.22][i];
    osc.connect(g).connect(padHpf); osc.start();
  });

  return { master, droneGain, bassGain, padGain, roomGain, fanGain, bassOsc };
}

function startKeyboardClicks(ctx: AudioContext, dest: GainNode, durationMs: number) {
  let active = true;
  const next = () => {
    if (!active) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 900 + Math.random() * 1400;
    env.gain.setValueAtTime(0.045, now);
    env.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);
    osc.connect(env).connect(dest);
    osc.start(now); osc.stop(now + 0.03);
    setTimeout(next, 120 + Math.random() * 450);
  };
  next();
  setTimeout(() => { active = false; }, durationMs);
}

// Ramp all BGM nodes to target values over `dur` seconds from `t`
function rampBGM(
  nodes: ReturnType<typeof buildAmbient>,
  t: number,
  target: typeof BGM_FULL,
  dur: number,
) {
  nodes.droneGain.gain.cancelScheduledValues(t);
  nodes.bassGain.gain.cancelScheduledValues(t);
  nodes.padGain.gain.cancelScheduledValues(t);
  nodes.roomGain.gain.cancelScheduledValues(t);
  nodes.fanGain.gain.cancelScheduledValues(t);

  nodes.droneGain.gain.setValueAtTime(nodes.droneGain.gain.value, t);
  nodes.bassGain.gain.setValueAtTime(nodes.bassGain.gain.value, t);
  nodes.padGain.gain.setValueAtTime(nodes.padGain.gain.value, t);
  nodes.roomGain.gain.setValueAtTime(nodes.roomGain.gain.value, t);
  nodes.fanGain.gain.setValueAtTime(nodes.fanGain.gain.value, t);

  nodes.droneGain.gain.linearRampToValueAtTime(target.drone, t + dur);
  nodes.bassGain.gain.linearRampToValueAtTime(target.bass,   t + dur);
  nodes.padGain.gain.linearRampToValueAtTime(target.pad,     t + dur);
  nodes.roomGain.gain.linearRampToValueAtTime(target.room,   t + dur);
  nodes.fanGain.gain.linearRampToValueAtTime(target.fan,     t + dur);
}

export default function VideoIntro({ onComplete }: { onComplete: () => void }) {
  const v1Ref          = useRef<HTMLVideoElement>(null);
  const audioRef       = useRef<HTMLAudioElement>(null);
  const audioCtxRef    = useRef<AudioContext | null>(null);
  const nodesRef       = useRef<ReturnType<typeof buildAmbient> | null>(null);
  const completedRef   = useRef(false);
  const engineStarted  = useRef(false);
  const narrationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [entered,    setEntered]    = useState(false);
  const [fading,     setFading]     = useState(false);
  const [muted,      setMuted]      = useState(false);
  const [activeSub,  setActiveSub]  = useState<Sub | null>(null);
  const [subVisible, setSubVisible] = useState(false);

  // ── Start the Web Audio ambient/BGM engine ───────────────────────────────
  const startAudioEngine = useCallback(() => {
    if (engineStarted.current) return;
    engineStarted.current = true;
    try {
      const ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioCtxRef.current = ctx;
      const nodes = buildAmbient(ctx);
      nodesRef.current = nodes;
      const t = ctx.currentTime;

      // Fade BGM in from silence → full over 0.6 s
      rampBGM(nodes, t, BGM_FULL, 0.6);

      // Keyboard typing texture for the first ~8 s
      startKeyboardClicks(ctx, nodes.master, 8000);

      // Bass pitch glide for cinematic tension
      nodes.bassOsc.frequency.setValueAtTime(38, t);
      nodes.bassOsc.frequency.linearRampToValueAtTime(55, t + 9);
    } catch { /* audio unavailable in this browser */ }
  }, []);

  // ── Duck BGM when narration starts ───────────────────────────────────────
  const duckBGM = useCallback(() => {
    const ctx   = audioCtxRef.current;
    const nodes = nodesRef.current;
    if (!ctx || !nodes) return;
    rampBGM(nodes, ctx.currentTime, BGM_DUCK, 1.2);
  }, []);

  // ── Trigger completion — fade out and call onComplete ─────────────────────
  const triggerComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setSubVisible(false); setActiveSub(null); setFading(true);

    const ctx   = audioCtxRef.current;
    const nodes = nodesRef.current;
    if (ctx && nodes) {
      const t = ctx.currentTime;
      [nodes.droneGain, nodes.bassGain, nodes.padGain, nodes.roomGain, nodes.fanGain]
        .forEach(g => {
          g.gain.cancelScheduledValues(t);
          g.gain.setValueAtTime(g.gain.value, t);
          g.gain.linearRampToValueAtTime(0.0001, t + 1.2);
        });
      setTimeout(() => ctx.close().catch(() => {}), 1500);
    }
    setTimeout(() => { audioRef.current?.pause(); onComplete(); }, 1050);
  }, [onComplete]);

  // ── Enter gate click ─────────────────────────────────────────────────────
  const handleEnter = useCallback(() => {
    if (entered) return;
    setEntered(true);

    // 1. Start BGM immediately (user gesture → AudioContext allowed)
    startAudioEngine();

    // 2. Unlock narration element
    const audio = audioRef.current;
    if (audio) { audio.volume = 1.0; audio.load(); }

    // 3. Start video — plays once, freezes on last frame when it ends
    const v1 = v1Ref.current;
    if (v1) {
      Array.from(v1.textTracks).forEach(tr => { tr.mode = 'disabled'; });
      v1.play().catch(() => {
        v1.muted = true;
        v1.play().catch(() => {});
      });
    }

    // 4. After 1.5 s: duck BGM and start narration
    narrationTimer.current = setTimeout(() => {
      duckBGM();
      const a = audioRef.current;
      if (a) {
        a.currentTime = 0;
        a.play().catch(() => {});
      }
    }, 1500);
  }, [entered, startAudioEngine, duckBGM]);

  // ── Freeze video on last frame when it ends ──────────────────────────────
  // Without this, some browsers show a black frame after the video ends.
  useEffect(() => {
    const v1 = v1Ref.current;
    if (!v1) return;
    const onEnded = () => {
      if (v1.duration > 0) {
        v1.currentTime = v1.duration - 0.001;
      }
      v1.pause();
    };
    v1.addEventListener('ended', onEnded);
    return () => v1.removeEventListener('ended', onEnded);
  }, []);

  // ── Subtitle sync ─────────────────────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      const ct  = audio.currentTime;
      const hit = SUBTITLES.find(s => ct >= s.start && ct <= s.end) ?? null;
      if (hit !== activeSub) {
        if (hit) { setActiveSub(hit); setSubVisible(true); }
        else     { setSubVisible(false); setTimeout(() => setActiveSub(null), 380); }
      }
    };
    audio.addEventListener('timeupdate', onTime);
    return () => audio.removeEventListener('timeupdate', onTime);
  }, [activeSub]);

  // ── Narration ended → complete ────────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => triggerComplete();
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, [triggerComplete]);

  // ── Mute sync ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  // ── Skip ──────────────────────────────────────────────────────────────────
  const handleSkip = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    if (narrationTimer.current) clearTimeout(narrationTimer.current);
    audioRef.current?.pause();
    const ctx   = audioCtxRef.current;
    const nodes = nodesRef.current;
    if (ctx && nodes) {
      const t = ctx.currentTime;
      [nodes.droneGain, nodes.bassGain, nodes.padGain, nodes.roomGain, nodes.fanGain]
        .forEach(g => {
          g.gain.cancelScheduledValues(t);
          g.gain.setValueAtTime(g.gain.value, t);
          g.gain.linearRampToValueAtTime(0.0001, t + 0.4);
        });
    }
    setFading(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  // ── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => () => {
    if (narrationTimer.current) clearTimeout(narrationTimer.current);
    audioCtxRef.current?.close().catch(() => {});
  }, []);

  // ── Shared button style ───────────────────────────────────────────────────
  const btnStyle: React.CSSProperties = {
    background: 'rgba(5,5,5,0.6)', backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)',
    fontSize: '0.57rem', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
    letterSpacing: '0.2em', textTransform: 'uppercase' as const,
    padding: '8px 16px', borderRadius: '8px',
    cursor: 'pointer', userSelect: 'none' as const, lineHeight: 1,
  };

  return (
    <>
      {/* Narration audio — always mounted so it preloads during Enter gate */}
      <audio ref={audioRef} src="/videos/intro-audio.mp3" preload="auto" onError={() => {}} />

      {/* ── Enter gate ── */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="enter-gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleEnter}
            style={{
              position: 'fixed', inset: 0, zIndex: 95, background: '#000',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 50% 50% at 50% 60%, rgba(139,92,246,0.08) 0%, transparent 70%)',
            }} />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, marginBottom: 44 }}>
                <CubeLogo size={96} />
                <span style={{
                  fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem',
                  fontWeight: 700, letterSpacing: '0.32em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                }}>
                  ANSH GUPTA SYSTEMS
                </span>
              </div>

              <motion.div
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
              >
                <span style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(1.8rem,3vw,2.8rem)',
                  fontWeight: 900, letterSpacing: '-0.03em', color: '#fff',
                }}>
                  ENTER
                </span>
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
                  color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em',
                }}>
                  CLICK ANYWHERE
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main intro — ALWAYS in DOM so refs are valid on first click ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 90,
        background: '#000', overflow: 'hidden',
        opacity:       !entered ? 0 : fading ? 0 : 1,
        pointerEvents: !entered ? 'none' : 'auto',
        transition:    fading ? 'opacity 1.05s ease' : 'opacity 0.3s ease',
      }}>
        {/* Video — loops so it always has content while narration plays */}
        <video
          ref={v1Ref}
          src="/videos/intro-video.mp4"
          muted playsInline preload="auto" loop
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 82% 82% at 50% 50%, transparent 28%, rgba(0,0,0,0.72) 100%)',
        }} />

        {/* Film grain */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 4, opacity: 0.042, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }} />

        {/* Letterbox bars */}
        <div style={{ position: 'absolute', top:    0, left: 0, right: 0, height: 52, background: '#000', zIndex: 6 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 52, background: '#000', zIndex: 6 }} />
        <div style={{
          position: 'absolute', bottom: 52, left: 0, right: 0, height: 160,
          zIndex: 5, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(0,0,0,0.88), transparent)',
        }} />

        {/* Subtitles */}
        <div style={{
          position: 'absolute', bottom: 100, left: '50%', transform: 'translateX(-50%)',
          zIndex: 20, pointerEvents: 'none', textAlign: 'center',
          width: '82%', maxWidth: 680,
          opacity: subVisible ? 1 : 0, transition: 'opacity 0.32s ease',
        }}>
          {activeSub && (
            <div style={{
              display: 'inline-block', background: 'rgba(0,0,0,0.52)',
              backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
              borderRadius: 12, padding: '13px 32px',
              border: '1px solid rgba(255,255,255,0.055)',
            }}>
              {activeSub.lines.map((line, i) => (
                <p key={i} style={{
                  margin: 0, padding: i > 0 ? '3px 0 0' : 0,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(0.88rem,1.9vw,1.08rem)', fontWeight: 300,
                  color: 'rgba(255,255,255,0.9)', letterSpacing: '0.055em', lineHeight: 1.5,
                }}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Controls */}
        {entered && (
          <div style={{
            position: 'absolute', top: 64, right: 24,
            display: 'flex', gap: 8, zIndex: 30, alignItems: 'center',
          }}>
            <button style={btnStyle} onClick={() => setMuted(m => !m)}>
              {muted ? '○  MUTED' : '◉  SOUND'}
            </button>
            <button style={btnStyle} onClick={handleSkip}>SKIP  →</button>
          </div>
        )}

        {/* Identity marker */}
        <div style={{
          position: 'absolute', bottom: 80, left: 36, zIndex: 20, pointerEvents: 'none',
          opacity: entered ? 1 : 0, transition: 'opacity 0.55s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#4ade80',
              boxShadow: '0 0 10px rgba(74,222,128,0.75)', display: 'inline-block',
              animation: 'ag-pulse 2.2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-space-grotesk)', fontSize: '0.56rem', fontWeight: 700,
              letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.36)',
            }}>
              ANSH GUPTA SYSTEMS
            </span>
          </div>
        </div>

        <style>{`
          @keyframes ag-pulse {
            0%,100% { opacity:1; transform:scale(1); }
            50%      { opacity:0.35; transform:scale(0.82); }
          }
        `}</style>
      </div>
    </>
  );
}
