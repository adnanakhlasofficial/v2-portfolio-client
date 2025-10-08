import React from 'react';
import { SidebarMenuButton } from './sidebar';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface IProps {
  title: string;
  url: string;
  icon: LucideIcon;
}

export default function SidebarButton({ title, url, icon: Icon }: IProps) {
  const pathname = usePathname();
  return (
    <SidebarMenuButton
      asChild
      className={cn(
        'hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear',
        {
          'bg-primary text-primary-foreground': url === pathname,
        },
      )}
      tooltip={title}
    >
      <Link href={url}>
        {Icon && <Icon />}
        <span>{title}</span>
      </Link>
    </SidebarMenuButton>
  );
}
