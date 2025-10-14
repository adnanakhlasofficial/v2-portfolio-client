import NavigateButton from '@/components/shared/NavigateButton';
import { IconHome } from '@tabler/icons-react';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <NavigateButton className="absolute top-12 left-12 min-w-30" navigation="/">
        <IconHome /> Back to Home
      </NavigateButton>
      {children}
    </div>
  );
}
