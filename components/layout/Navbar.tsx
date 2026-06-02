'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { LINKS } from '@/config/links';
import { IMAGES } from '@/config/images';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Worlds',  href: '#worlds'  },
  { label: 'About',   href: '#about'   },
  { label: 'Stack',   href: '#stack'   },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dimLink: React.CSSProperties = {
    fontFamily: 'var(--font-space-grotesk)',
    fontSize: '0.72rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: 'rgba(228,228,231,0.55)',
    transition: 'color 0.2s',
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,5,5,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '1px solid rgba(139,92,246,0.3)',
            }}
          >
            <Image
              src={IMAGES.logo.icon}
              alt="Ansh Gupta"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.9rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            ANSH
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={dimLink}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(228,228,231,0.55)')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* GitHub link */}
          <Link
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5"
            style={dimLink}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(228,228,231,0.55)')}
          >
            GitHub
            <ExternalLink size={14} />
          </Link>

          {/* Separator */}
          <div
            style={{
              width: 1,
              height: 16,
              background: 'rgba(255,255,255,0.1)',
            }}
          />

          {/* Available indicator */}
          <div className="flex items-center gap-1.5">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#4ade80',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(74,222,128,0.6)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.7rem',
                fontWeight: 500,
                color: 'rgba(74,222,128,0.7)',
                letterSpacing: '0.06em',
              }}
            >
              Available
            </span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px"
            style={{ background: 'rgba(228,228,231,0.7)', transformOrigin: 'center' }}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-4 h-px"
            style={{ background: 'rgba(228,228,231,0.7)' }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px"
            style={{ background: 'rgba(228,228,231,0.7)', transformOrigin: 'center' }}
          />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-5"
            style={{
              background: 'rgba(5,5,5,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(228,228,231,0.6)',
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Separator */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

            {/* GitHub */}
            <Link
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(228,228,231,0.55)',
              }}
            >
              GitHub
              <ExternalLink size={13} />
            </Link>

            {/* Available */}
            <div className="flex items-center gap-1.5">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#4ade80',
                  display: 'inline-block',
                  boxShadow: '0 0 6px rgba(74,222,128,0.6)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.7rem',
                  color: 'rgba(74,222,128,0.7)',
                }}
              >
                Available
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
