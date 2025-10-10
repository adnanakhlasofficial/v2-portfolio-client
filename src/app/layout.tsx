import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import {
  IconAlertTriangle,
  IconExclamationCircle,
  IconInfoCircle,
  IconLoader2,
  IconRosetteDiscountCheck,
} from '@tabler/icons-react';

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
      <body className={`${jetbrainsMono.className} dark antialiased`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            className: '!bg-primary !text-primary-foreground !border-none',
          }}
          icons={{
            success: <IconRosetteDiscountCheck stroke={2} />,
            error: <IconExclamationCircle stroke={2} />,
            info: <IconInfoCircle stroke={2} />,
            warning: <IconAlertTriangle stroke={2} />,
            loading: (
              <span className="animate-spin">
                <IconLoader2 className="animate-spin" stroke={2} />
              </span>
            ),
          }}
        />
      </body>
    </html>
  );
}
