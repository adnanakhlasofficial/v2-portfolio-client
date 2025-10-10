'use client';
import { IconLogout } from '@tabler/icons-react';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { handleDisconnectAction } from '@/actions/auth';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

export default function LogoutButton() {
  const handleDisconnect = async () => {
    const res = await handleDisconnectAction();
    if (!res) {
      toast.error('Failed to disconnect. Please try again.');
    }
    toast.success('Disconnected successfully. See you next time!');
    redirect('/');
  };

  return (
    <DropdownMenuItem onClick={handleDisconnect}>
      <IconLogout />
      Disconnect
    </DropdownMenuItem>
  );
}
