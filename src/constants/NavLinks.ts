import {
  BookOpenText,
  Briefcase,
  Code2,
  FolderOpen,
  Home,
  PhoneIcon,
  UserRound,
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
    icon: Code2,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: PhoneIcon,
  },
  {
    label: 'Blogs',
    href: '/blogs',
    icon: BookOpenText,
  },
];
