'use client';

import { Button } from '@/components/ui/button';
import { navLinks } from '@/constants/NavLinks';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        size="icon"
        className="fixed top-6 right-6 z-50 shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <nav
        className={`fixed top-1/2 left-6 z-40 -translate-y-1/2 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100'
        } `}
      >
        <div className="bg-card/80 border-border flex flex-col gap-3 rounded-2xl border p-3 shadow-2xl backdrop-blur-md">
          {navLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'group bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:scale-110',
                  {
                    'bg-primary text-primary-foreground': item.href === pathname,
                  },
                )}
                aria-label={item.label}
              >
                <Icon className="h-5 w-5" />
                <span className="bg-card border-border text-primary invisible absolute left-full ml-4 rounded-lg border px-3 py-1.5 text-sm font-medium whitespace-nowrap opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {isOpen && (
        <div
          className="bg-background/80 fixed inset-0 z-30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
