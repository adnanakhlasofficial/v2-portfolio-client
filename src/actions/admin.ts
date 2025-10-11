'use server';

import { UpdateProfileFormValues } from '@/components/forms/admin/UpdateProfileForm';
import cookieNames from '@/constants/cookieNames';
import { AdminDetailsPrivate, AdminDetailsPublic, ApiResponse } from '@/types';
import { getNextCookie } from '@/utils/next-cookie';

export const getAdminPublic = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/public`, {
    cache: 'no-cache',
  });
  const data = (await res.json()) as ApiResponse<AdminDetailsPublic>;
  return data?.data;
};

export const handleUpdateAdminAction = async (data: Partial<UpdateProfileFormValues>) => {
  const cookie = await getNextCookie(cookieNames.accessToken);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `${cookie?.name}=${cookie?.value}`,
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  console.log(await res.json());

  if (!res.ok) {
    return null;
  }
  return true;
};

export const getAdminPrivate = async () => {
  const cookie = await getNextCookie(cookieNames.accessToken);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/private`, {
    cache: 'no-cache',
    headers: {
      Cookie: `${cookie?.name}=${cookie?.value}`,
    },
    credentials: 'include',
  });

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as ApiResponse<AdminDetailsPrivate>;
  return data?.data;
};
