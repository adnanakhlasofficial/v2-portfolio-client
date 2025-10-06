import About from '@/pages/public/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Meet Adnan — Developer & Systems Thinker',
  description:
    'Learn about Adnan’s philosophy, approach to modular development, and passion for automation and maintainability. A proactive innovator in full-stack engineering.',
};

export default function AboutPage() {
  return <About />;
}
