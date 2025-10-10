import cookieNames from '@/constants/cookieNames';
import { cookies } from 'next/headers';

export const getNextCookie = async (cookieName: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName);
};
