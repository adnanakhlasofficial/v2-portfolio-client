import NavigateButton from '@/components/shared/NavigateButton';
import { HomeIcon } from 'lucide-react';
import React, { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <NavigateButton className="absolute top-12 left-12 min-w-30" navigation="/">
        <HomeIcon /> Back to Home
      </NavigateButton>
      {children}
    </div>
  );
}
