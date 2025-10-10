import {
  Home,
  UserRound,
  FolderOpen,
  Briefcase,
  BrainCircuit,
  Mail,
  BookOpenText,
  LayoutDashboardIcon,
} from 'lucide-react';

export const navLinks = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'About',
    href: '/about',
    icon: UserRound,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: FolderOpen,
  },
  {
    label: 'Experiences',
    href: '/experiences',
    icon: Briefcase,
  },
  {
    label: 'Skills',
    href: '/skills',
    icon: BrainCircuit,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Mail,
  },
  {
    label: 'Blogs',
    href: '/blogs',
    icon: BookOpenText,
  },
  {
    label: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboardIcon,
  },
];
