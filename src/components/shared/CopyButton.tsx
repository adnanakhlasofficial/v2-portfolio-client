'use client';
import { IconClipboard } from '@tabler/icons-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

export const CopyButton = ({ value, label, className = '' }: CopyButtonProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast.success(`${label} successfully copied to clipboard!`);
  };

  return (
    <Button
      variant="ghost"
      onClick={copyToClipboard}
      className={`hover:bg-muted hidden rounded p-2 transition ${className}`}
      aria-label="Copy to clipboard"
    >
      <IconClipboard className="!h-4 !w-4" />
    </Button>
  );
};
