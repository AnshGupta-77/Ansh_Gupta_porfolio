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

const BASE_URL = 'https://stackbyansh.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Stack By Ansh — Systems Engineering Studio',
    template: '%s — Stack By Ansh',
  },
  description:
    'Stack By Ansh is a systems engineering studio founded by Ansh Gupta. We design and build product ecosystems, AI systems, realtime platforms, and operational infrastructure — architecture-first, from concept to scale.',
  keywords: [
    'Stack By Ansh', 'Ansh Gupta', 'Systems Architect', 'Product Engineer', 'Founder',
    'AI Systems Developer', 'Full Stack Engineer', 'Startup Product Development',
    'Digital Ecosystem Builder', 'Operational Systems', 'Next.js Developer',
    'FastAPI Developer', 'LangChain', 'React', 'TypeScript', 'Operonix', 'BikeTribe',
    'OOZE', 'Architect AI', 'Seva Agro', 'Software Studio', 'Engineering Studio',
  ],
  authors: [{ name: 'Ansh Gupta', url: BASE_URL }],
  creator: 'Ansh Gupta',
  publisher: 'Stack By Ansh',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Stack By Ansh',
    title: 'Stack By Ansh — Systems Engineering Studio',
    description:
      'Architecture-first product engineering. Ansh Gupta designs and builds complete digital systems — from AI pipelines to cinematic interfaces — for founders who need more than code.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stack By Ansh — Systems Engineering Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stack By Ansh — Systems Engineering Studio',
    description:
      'Architecture-first product engineering. Building complete digital systems for ambitious founders.',
    images: ['/images/og-image.png'],
    creator: '@stackby_ansh',
    site: '@stackby_ansh',
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
  category: 'technology',
};

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Stack By Ansh',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  description:
    'Stack By Ansh is a systems engineering studio that designs and builds product ecosystems, AI systems, realtime platforms, and operational infrastructure.',
  founder: {
    '@type': 'Person',
    name: 'Ansh Gupta',
    url: BASE_URL,
    jobTitle: 'Founder & Systems Architect',
    sameAs: [
      'https://github.com/AnshGupta-77',
      'https://www.linkedin.com/in/ansh-gupta-586643347/',
      'https://www.instagram.com/stackby_ansh/',
    ],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'sales@stackbyansh.com',
    contactType: 'sales',
  },
  sameAs: [
    'https://github.com/AnshGupta-77',
    'https://www.linkedin.com/in/ansh-gupta-586643347/',
    'https://www.instagram.com/stackby_ansh/',
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ansh Gupta',
  url: BASE_URL,
  image: `${BASE_URL}/images/hero/face.png`,
  jobTitle: 'Systems Architect & Product Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Stack By Ansh',
  },
  description:
    'Ansh Gupta is a self-taught systems architect and solo founder who builds complete digital product ecosystems — from database schema to deployment, from user behavior design to business logic architecture.',
  knowsAbout: [
    'Systems Architecture', 'Product Engineering', 'AI Systems', 'Full Stack Development',
    'Next.js', 'FastAPI', 'LangChain', 'PostgreSQL', 'Realtime Systems',
  ],
  sameAs: [
    'https://github.com/AnshGupta-77',
    'https://www.linkedin.com/in/ansh-gupta-586643347/',
    'https://www.instagram.com/stackby_ansh/',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stack By Ansh',
  url: BASE_URL,
  description: 'Systems engineering studio by Ansh Gupta.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Ansh Gupta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ansh Gupta is a self-taught systems architect, product engineer, and founder of Stack By Ansh — a systems engineering studio. He builds complete digital product ecosystems independently, from architecture to interface to deployment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Stack By Ansh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stack By Ansh is a systems engineering studio founded by Ansh Gupta. It designs and builds product ecosystems, AI systems, realtime platforms, and operational infrastructure for founders and startups — architecture-first, from concept to scale.',
      },
    },
    {
      '@type': 'Question',
      name: 'What systems has Stack By Ansh built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stack By Ansh has built: Operonix (AI execution OS for founders), BikeTribe (realtime rider ecosystem platform), OOZE (cinematic fashion commerce experience), Architect AI (intelligent strategic workspace), and Seva Agro (industrial agricultural platform).',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of work does Stack By Ansh take on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stack By Ansh is selectively open to founder collaborations, product engineering engagements, AI system builds, realtime platform development, and ecosystem-level thinking partnerships. Contact sales@stackbyansh.com to discuss a project.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      style={{ fontFamily: 'var(--font-inter)', scrollBehavior: 'auto' }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
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
