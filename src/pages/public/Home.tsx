import { checkConnectAction } from '@/actions/auth';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { user } from '@/constants/Profile';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Cascadia_Code } from 'next/font/google';
import Link from 'next/link';

const cascadiaCodeItalic = Cascadia_Code({
  subsets: ['latin'],
  style: 'italic',
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

export default async function Home() {
  const res = await checkConnectAction();

  return (
    <Section>
      <div className="relative flex flex-col items-center justify-center">
        {/* Top-Left Gradient */}
        <div className="bg-primary/20 absolute -top-10 -left-0 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        {/* Bottom-Right Gradient */}
        <div className="bg-chart-4/20 absolute -right-0 -bottom-10 h-96 w-96 animate-pulse rounded-full blur-3xl delay-1000" />
        <div className="relative mx-auto space-y-4 text-center">
          <div className="bg-muted/50 border-border text-foreground animate-fade-in hover:text-primary inline-flex cursor-default items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <Sparkles className="h-4 w-4" />
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-foreground animate-fade-in-up text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <div
              className={`from-primary to-chart-4 bg-gradient-to-r bg-clip-text text-transparent ${cascadiaCodeItalic.className}`}
            >
              <strong>{user.name}</strong>
            </div>
          </h1>

          <p className="text-muted-foreground animate-fade-in-up mx-auto max-w-4xl text-xl leading-relaxed font-light delay-200 sm:text-2xl md:text-3xl">
            {user.bio}
          </p>

          <p className="text-muted-foreground animate-fade-in-up mx-auto max-w-3xl text-base leading-relaxed delay-300 sm:text-lg">
            {user.description}
          </p>

          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 pt-4 delay-500 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group px-8 py-6 font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/experiences">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-primary hover:text-primary px-8 py-6 font-medium transition-all duration-300"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
