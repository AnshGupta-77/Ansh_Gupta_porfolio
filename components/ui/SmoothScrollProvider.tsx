'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    // Expose globally so section-anchor navigation (e.g. HomeExperience) can
    // drive Lenis directly instead of fighting it with native scroll.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // In-page anchor links (navbar, CTAs) — drive Lenis so the browser's native
    // hash jump doesn't fight the smooth-scroll engine (which made nav buttons
    // feel dead). Same-page #ids scroll smoothly; unknown ids are ignored.
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement)?.closest('a[href*="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const hashIndex = href.indexOf('#');
      if (hashIndex < 0) return;
      // Only handle same-page anchors ("#id" or "/#id" on the home route).
      const path = href.slice(0, hashIndex);
      if (path && path !== '/' && path !== window.location.pathname) return;
      const id = href.slice(hashIndex + 1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -72 });
      history.replaceState(null, '', `#${id}`);
    }
    document.addEventListener('click', onClick);

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('click', onClick);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, []);

  // On route change with no hash target, snap Lenis to the top. Without this,
  // Lenis keeps the previous page's scroll offset, so a fresh project page
  // would open partway down ("starts from the bottom"). Hash targets (e.g.
  // /#worlds) are handled by the destination page, so we skip those.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash) return;
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
