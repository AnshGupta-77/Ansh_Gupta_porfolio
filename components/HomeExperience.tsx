'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioIntro from '@/components/ui/PortfolioIntro';
import Hero from '@/components/sections/Hero';
import Identity from '@/components/sections/Identity';
import EcosystemStrip from '@/components/sections/EcosystemStrip';
import WorldsSection from '@/components/sections/WorldsSection';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Philosophy from '@/components/sections/Philosophy';
import Approach from '@/components/sections/Approach';
import Standards from '@/components/sections/Standards';
import Journey from '@/components/sections/Journey';
import Available from '@/components/sections/Available';
import Contact from '@/components/sections/Contact';

export default function HomeExperience() {
  const [introDone, setIntroDone] = useState(false);

  // Honor any #hash once the intro has cleared (return from a project page).
  useEffect(() => {
    if (!introDone) return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement, o?: object) => void } }).__lenis;
      if (lenis) lenis.scrollTo(el, { immediate: true });
      else el.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    const raf = requestAnimationFrame(() => requestAnimationFrame(scroll));
    return () => cancelAnimationFrame(raf);
  }, [introDone]);

  return (
    <>
      {/* Main content is always mounted underneath — the intro is a fixed
          overlay on top of it, so there's no blank flash once it fades. */}
      <PortfolioIntro onComplete={() => setIntroDone(true)} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <Identity />
        <About />
        <Philosophy />
        <WorldsSection />
        <EcosystemStrip />
        <Approach />
        <Skills />
        <Standards />
        <Journey />
        <Available />
        <Contact />
      </motion.main>
    </>
  );
}
