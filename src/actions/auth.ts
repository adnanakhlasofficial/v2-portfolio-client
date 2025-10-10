'use server';

import { VerifyFormValues } from '@/components/forms/admin/VerifyForm';
import cookieNames from '@/constants/cookieNames';
import { getNextCookie, clearNextCookie } from '@/utils/next-cookie';
import { cookies } from 'next/headers';

export const handleVerifyAction = async (data: VerifyFormValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (!res.ok) {
    return null;
  }

  const setCookie = res.headers.get('set-cookie');
  const cookieStore = await cookies();
  if (setCookie) {
    const tokenValue = setCookie.split(';')[0].split('=')[1];

    cookieStore.set(cookieNames.accessToken, tokenValue, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
  }

  return true;
};

export const handleDisconnectAction = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/disconnect`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!res.ok) {
    return null;
  }

  await clearNextCookie(cookieNames.accessToken);
  return true;
};

export const checkConnectAction = async () => {
  const cookie = await getNextCookie(cookieNames.accessToken);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/check`, {
    method: 'GET',
    headers: {
      Cookie: `${cookie?.name}=${cookie?.value}`,
    },
    credentials: 'include',
  });

  if (!res.ok) {
    return null;
  }
  return true;
};
