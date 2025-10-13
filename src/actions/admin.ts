'use server';

import { UpdateProfileFormValues } from '@/components/forms/admin/UpdateProfileForm';
import cookieNames from '@/constants/cookieNames';
import { AdminDetailsPrivate, AdminDetailsPublic, ApiResponse } from '@/types';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const getAdminPublic = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/public`, {
    next: {
      tags: ['ADMIN'],
    },
  });
  const data = (await res.json()) as ApiResponse<AdminDetailsPublic>;
  return data?.data;
};

export const handleUpdateAdminAction = async (data: Partial<UpdateProfileFormValues>) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(cookieNames.accessToken);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `${cookie?.name}=${cookie?.value}`,
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return null;
  }
  revalidateTag('ADMIN');
  return true;
};

export const getAdminPrivate = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(cookieNames.accessToken);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/private`, {
    headers: {
      Cookie: `${cookie?.name}=${cookie?.value}`,
    },
    credentials: 'include',
    next: {
      tags: ['ADMIN'],
    },
  });

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as ApiResponse<AdminDetailsPrivate>;
  return data?.data;
};
