'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen       from '@/components/ui/LoadingScreen';
import VideoIntro          from '@/components/ui/VideoIntro';
import Hero                from '@/components/sections/Hero';
import WorldsSection       from '@/components/sections/WorldsSection';
import IdeationProjects    from '@/components/sections/IdeationProjects';
import SystemsEngineering  from '@/components/sections/SystemsEngineering';
import About               from '@/components/sections/About';
import Process             from '@/components/sections/Process';
import Skills              from '@/components/sections/Skills';
import PreDeliveryChecklist from '@/components/sections/PreDeliveryChecklist';
import Education           from '@/components/sections/Education';
import Philosophy          from '@/components/sections/Philosophy';
import Testimonials        from '@/components/sections/Testimonials';
import FeedbackWall        from '@/components/sections/FeedbackWall';
import Contact             from '@/components/sections/Contact';

type Phase = 'loading' | 'video' | 'main';

export default function HomeExperience() {
  const [phase, setPhase] = useState<Phase>('loading');

  // ── Skip intro on browser back (if already seen this session) ─────────────
  useEffect(() => {
    try {
      if (sessionStorage.getItem('intro-seen')) {
        setPhase('main');
      }
    } catch { /* sessionStorage may be blocked in some environments */ }
  }, []);

  const handleVideoComplete = () => {
    try { sessionStorage.setItem('intro-seen', '1'); } catch { /* ignore */ }
    setPhase('main');
  };

  return (
    <AnimatePresence mode="wait">
      {phase === 'loading' && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingScreen onComplete={() => setPhase('video')} />
        </motion.div>
      )}

      {phase === 'video' && (
        <motion.div
          key="video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <VideoIntro onComplete={handleVideoComplete} />
        </motion.div>
      )}

      {phase === 'main' && (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/*
           * Emotional flow:
           * 1. Human Introduction       → Hero (greeting + headline + portrait)
           * 2. Featured Projects        → WorldsSection (deep project case studies)
           * 3. Ideation Concepts        → IdeationProjects (3 concept cards)
           * 4. Architecture Depth       → SystemsEngineering (how systems are built)
           * 5. Founder Story            → About (who, why, mindset)
           * 6. Engineering Methodology  → Process (9-stage workflow)
           * 7. Technical Capability     → Skills (tech stack + reasoning)
           * 8. Delivery Standard        → PreDeliveryChecklist (quality gates)
           * 9. Learning & Growth        → Education (background + self-directed)
           * 10. Engineering Philosophy  → Philosophy (5 principles)
           * 11. Trust Layer             → Testimonials (named reviews)
           * 12. Open Feedback           → FeedbackWall (public submissions)
           * 13. Collaboration & Contact → Contact (founder-oriented)
           */}
          <Hero />
          <WorldsSection />
          <IdeationProjects />
          <SystemsEngineering />
          <About />
          <Process />
          <Skills />
          <PreDeliveryChecklist />
          <Education />
          <Philosophy />
          <Testimonials />
          <FeedbackWall />
          <Contact />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
