'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface IProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg' | null | undefined;
}

export default function BackButton({ children, className, variant, size }: IProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.back();
  };
  return (
    <Button className={className} variant={variant} size={size} onClick={handleNavigate}>
      {children}
    </Button>
  );
}
