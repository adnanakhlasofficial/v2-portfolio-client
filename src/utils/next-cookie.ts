'use server';
import { cookies } from 'next/headers';

export const getNextCookie = async (cookieName: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName);
};

export const clearNextCookie = async (cookieName: string) => {
  const cookieStore = await cookies();
  return cookieStore.delete(cookieName);
};
