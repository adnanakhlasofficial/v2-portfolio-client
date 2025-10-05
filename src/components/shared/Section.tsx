import { cn } from '@/lib/utils';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default function Section({ children }: IProps) {
  return (
    <section className={cn('bg-background flex min-h-screen items-center justify-center')}>
      <div className="mx-auto w-full max-w-5xl px-4 py-12 md:px-8 2xl:max-w-7xl 2xl:py-20">
        {children}
      </div>
    </section>
  );
}
