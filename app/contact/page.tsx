import ContactPage from '@/components/pages/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get in Touch — Ansh Gupta',
  description: 'Direct communication channels to Ansh Gupta — systems builder, full-stack developer, founder.',
};

export default function Page() {
  return <ContactPage />;
}
