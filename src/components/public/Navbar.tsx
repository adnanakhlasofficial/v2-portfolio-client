'use client';

import { getAdminPrivate } from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/constants/NavLinks';
import { cn } from '@/lib/utils';
import { AdminDetailsPrivate } from '@/types';
import { IconLayoutDashboard, IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ModeToggle from '../ui/ModeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [admin, setAdmin] = useState<null | AdminDetailsPrivate>(null);
  const pathname = usePathname();

  useEffect(() => {
    async function getAdmin() {
      const data = await getAdminPrivate();
      setAdmin(data);
    }
    getAdmin();
  }, []);

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground fixed top-6 right-6 z-50 shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
      </Button>

      <nav
        className={`fixed top-1/2 left-6 z-40 -translate-y-1/2 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100'
        } `}
      >
        <div className="bg-background/80 border-border flex flex-col gap-3 rounded-2xl border p-3 shadow-2xl backdrop-blur-md transition-all duration-300">
          {navLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <Button
                className={cn(
                  'hover:text-primary-foreground group hover:bg-primary h-12 w-12 rounded-xl transition-colors duration-300',
                  {
                    'bg-primary text-primary-foreground': item.href === pathname,
                  },
                )}
                key={index}
                onClick={() => setIsOpen(false)}
                variant="secondary"
                aria-label={item.label}
                asChild
              >
                <Link href={item.href}>
                  <Icon className="!h-6 !w-6" />
                  <span className="bg-background border-border text-primary absolute left-full ml-4 hidden rounded-lg border px-3 py-1.5 text-sm font-medium whitespace-nowrap opacity-0 shadow-lg !transition-all !duration-300 group-hover:block group-hover:opacity-100">
                    {item.label}
                  </span>
                </Link>
              </Button>
            );
          })}

          {admin && (
            <Button
              className="hover:text-primary-foreground group hover:bg-primary h-12 w-12 rounded-xl"
              onClick={() => setIsOpen(false)}
              variant="secondary"
              aria-label="Dashboard"
              asChild
            >
              <Link href="/admin">
                <IconLayoutDashboard className="!h-6 !w-6" />
                <span className="bg-background border-border text-primary absolute left-full ml-4 hidden rounded-lg border px-3 py-1.5 text-sm font-medium whitespace-nowrap opacity-0 shadow-lg !transition-all !duration-300 group-hover:block group-hover:opacity-100">
                  Dashboard
                </span>
              </Link>
            </Button>
          )}
          <ModeToggle />
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
