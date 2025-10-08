import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'official.adnanakhlas@gmail.com',
    href: 'mailto:official.adnanakhlas@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1776-345635',
    href: 'tel:+8801776345635',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: 'https://maps.google.com?q=Dhaka+Bangladesh',
  },
  {
    icon: MessageSquare,
    label: 'Live Chat',
    value: 'Available on weekdays',
    href: '/chat', // link to chat widget if available
  },
];
