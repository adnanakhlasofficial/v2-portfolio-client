import { cn } from '@/lib/utils';
import { Icon } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenuButton } from './sidebar';

interface IProps {
  title: string;
  url: string;
  icon: Icon;
}

export default function SidebarButton({ title, url, icon: Icon }: IProps) {
  const pathname = usePathname();
  return (
    <SidebarMenuButton
      asChild
      className={cn(
        'hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground h-10 min-w-8 ring transition-all duration-200 ease-linear active:scale-95',
        {
          'bg-primary text-primary-foreground ring-primary font-medium': url === pathname,
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
