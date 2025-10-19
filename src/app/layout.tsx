import { DevelopmentNoticeModal } from '@/components/public/DevelopmentNoticeModal';
import { Toaster } from '@/components/ui/sonner';
import {
  IconAlertTriangle,
  IconExclamationCircle,
  IconInfoCircle,
  IconLoader2,
  IconRosetteDiscountCheck,
} from '@tabler/icons-react';
import type { Metadata } from 'next';
import { Cascadia_Code, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

const jetbrainsMono = JetBrains_Mono({
  variable: '--jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'sans-serif',
  ],
});

const cascadiaCode = Cascadia_Code({
  variable: '--cascadia-code',
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${cascadiaCode.variable} font-jetbrains scrollbar-hide min-h-screen bg-[url("/bg-dots.svg")] bg-contain bg-center antialiased transition-all duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <DevelopmentNoticeModal />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              classNames: {
                success:
                  '!from-primary !to-chart-4 !bg-gradient-to-r !text-primary-foreground !border-none',
                error: '!bg-destructive !text-primary-foreground !border-none',
                loading: '!bg-chart-2 !text-primary-foreground !border-none',
                warning: '!bg-chart-5 !text-primary-foreground !border-none',
                info: '!bg-chart-3 !text-primary-foreground !border-none',
              },
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
        </ThemeProvider>
      </body>
    </html>
  );
}
