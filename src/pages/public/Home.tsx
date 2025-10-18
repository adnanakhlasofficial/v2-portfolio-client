import { getAdminPublic } from '@/actions/admin';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { IconArrowBigRight, IconSparkles } from '@tabler/icons-react';
import Link from 'next/link';

export default async function Home() {
  const admin = await getAdminPublic();

  return (
    <div className="overflow-hidden">
      <Section>
        <div className="relative flex flex-col items-center justify-center">
          {/* Top-Left Gradient */}
          <div className="bg-primary/20 absolute -top-10 -left-0 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          {/* Bottom-Right Gradient */}
          <div className="bg-chart-4/20 absolute -right-0 -bottom-10 h-96 w-96 animate-pulse rounded-full blur-3xl delay-1000" />
          <div className="relative mx-auto space-y-4 text-center">
            <div className="bg-muted/50 border-border text-foreground animate-fade-in hover:text-primary inline-flex cursor-default items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <IconSparkles className="!h-5 !w-5" />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-foreground animate-fade-in-up text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m
              <div
                className={`from-primary to-chart-4 font-cascadia bg-gradient-to-r bg-clip-text text-transparent`}
              >
                <strong>{admin.name}</strong>
              </div>
            </h1>

            <p className="text-muted-foreground animate-fade-in-up mx-auto max-w-4xl text-xl leading-relaxed font-light delay-200 sm:text-2xl md:text-3xl">
              {admin.bio}
            </p>

            <p className="text-muted-foreground animate-fade-in-up mx-auto max-w-3xl text-base leading-relaxed delay-300 sm:text-lg">
              {admin.description}
            </p>

            <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 pt-4 delay-500 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group w-50 px-8 py-6 font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Link href="/projects">
                  View My Projects
                  <IconArrowBigRight className="!h-5 !w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="hover:text-primary-foreground hover:bg-primary px-8 py-6 font-medium transition-all duration-300"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
