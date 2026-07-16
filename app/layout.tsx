import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import CursorGlow from '@/components/ui/CursorGlow';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const BASE_URL = 'https://anshgupta.dev';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ansh Gupta — Build Worlds',
    template: '%s — Ansh Gupta',
  },
  description:
    'Systems architect, product engineer, and founder. Building Operonix, BikeTribe, OOZE, Architect AI, and Seva Agro — an interconnected ecosystem of ambitious digital products.',
  keywords: [
    'Ansh Gupta', 'Full Stack Developer', 'Systems Architect', 'Product Engineer',
    'React', 'Next.js', 'FastAPI', 'AI', 'LangChain', 'Operonix', 'BikeTribe', 'OOZE',
    'Founder', 'Builder', 'TypeScript', 'Portfolio',
  ],
  authors: [{ name: 'Ansh Gupta', url: BASE_URL }],
  creator: 'Ansh Gupta',
  publisher: 'Ansh Gupta',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Ansh Gupta',
    title: 'Ansh Gupta — Build Worlds',
    description: 'Systems architect and founder. An interconnected ecosystem of evolving digital products.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ansh Gupta — Build Worlds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansh Gupta — Build Worlds',
    description: 'Systems architect and founder. Building digital ecosystems with precision and intent.',
    images: ['/images/og-image.png'],
    creator: '@stackby_ansh',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      style={{ fontFamily: 'var(--font-inter)', scrollBehavior: 'auto' }}
    >
      <body className="grain min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <SmoothScrollProvider>
          <CursorGlow />
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
