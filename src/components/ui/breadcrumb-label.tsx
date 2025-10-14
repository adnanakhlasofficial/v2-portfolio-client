'use client';
import { IconArrowRight } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function BreadcrumbLabel() {
  const pathname = usePathname();

  const segments = useMemo(() => {
    if (!pathname) return [];

    return pathname
      .split('/')
      .filter(Boolean)
      .map((segment) => segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()));
  }, [pathname]);

  return (
    <div className="text-muted-foreground flex items-center gap-2 text-sm">
      {segments.map((segment, index) => (
        <div key={index} className="flex items-center gap-1">
          {index > 0 && <IconArrowRight className="!h-5 !w-5" />}
          <span>{segment}</span>
        </div>
      ))}
    </div>
  );
}
