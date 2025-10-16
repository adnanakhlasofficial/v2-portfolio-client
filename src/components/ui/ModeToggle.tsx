'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { Button } from './button';
import { toast } from 'sonner';
import { useEffect } from 'react';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'light') {
      toast.info('Dark mode is recommended for a better viewing experience!');
    }
  }, [theme]);

  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      className="hover:text-primary-foreground group hover:bg-primary h-12 w-12 rounded-xl transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <IconMoon className="!h-6 !w-6" /> : <IconSun className="!h-6 !w-6" />}
      <span className="bg-background border-border text-primary absolute left-full ml-4 hidden rounded-lg border px-3 py-1.5 text-sm font-medium whitespace-nowrap opacity-0 shadow-lg transition-all duration-300 group-hover:block group-hover:opacity-100">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </Button>
  );
}
