import { IconBrandLine, IconLocationPin, IconMail, IconPhone } from '@tabler/icons-react';

export const contactLinks = [
  {
    icon: IconMail,
    label: 'Email',
    value: 'official.adnanakhlas@gmail.com',
    href: 'mailto:official.adnanakhlas@gmail.com',
  },
  {
    icon: IconPhone,
    label: 'Phone',
    value: '+880 1776-345635',
    href: 'tel:+8801776345635',
  },
  {
    icon: IconLocationPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: 'https://maps.google.com?q=Dhaka+Bangladesh',
  },
  {
    icon: IconBrandLine,
    label: 'Live Chat',
    value: 'Available on weekdays',
    href: '/chat',
  },
];
