'use client';
import { CopyIcon } from 'lucide-react';
import { toast } from 'sonner';

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
    <button
      onClick={copyToClipboard}
      className={`hover:bg-muted rounded p-2 transition ${className}`}
      aria-label="Copy to clipboard"
    >
      <CopyIcon className="h-4 w-4" />
    </button>
  );
};
