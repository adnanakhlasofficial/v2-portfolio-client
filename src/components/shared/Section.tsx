import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Section({ children }: IProps) {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-12 md:px-8 2xl:max-w-7xl 2xl:py-20">
        {children}
      </div>
    </section>
  );
}
