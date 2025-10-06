import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
});

export const metadata: Metadata = {
  title: 'Adnan Bin Akhlas | Full-Stack Web Developer | TypeScript, React, Next.js, Node.js',
  description:
    'Explore Adnan’s portfolio showcasing scalable full-stack web apps built with TypeScript, React, Next.js, Node.js, Prisma, and more. Ideal for developer clients and recruiters seeking modular, maintainable solutions.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} dark antialiased`}>{children}</body>
    </html>
  );
}
