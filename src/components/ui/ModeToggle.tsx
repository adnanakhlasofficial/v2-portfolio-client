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
      className="hover:text-primary-foreground group hover:bg-primary h-12 w-12 overflow-hidden rounded-xl transition-all duration-300 group-hover:w-38"
      aria-label="Toggle theme"
      asChild
    >
      <span className="flex items-center justify-start gap-4">
        {theme === 'light' ? <IconMoon className="!h-6 !w-6" /> : <IconSun className="!h-6 !w-6" />}
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </Button>
  );
}
