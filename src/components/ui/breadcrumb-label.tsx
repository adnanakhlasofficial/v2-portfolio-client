'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

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
          {index > 0 && <ArrowRight className="h-4 w-4" />}
          <span>{segment}</span>
        </div>
      ))}
    </div>
  );
}
