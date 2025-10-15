'use server';

import { ExperienceFormValues } from '@/components/forms/admin/AddExperienceForm';
import cookieNames from '@/constants/cookieNames';
import { ApiResponse, IExperience } from '@/types';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const handleAddExperienceAction = async (data: ExperienceFormValues) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(cookieNames.accessToken);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/experience`, {
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
  revalidateTag('EXPERIENCES');
  return true;
};

export const handleGetExperiencesAction = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/experience`, {
    method: 'GET',
    next: {
      tags: ['EXPERIENCES'],
    },
  });

  if (!res.ok) {
    return [];
  }
  const data = (await res.json()) as ApiResponse<IExperience[]>;

  return data?.data;
};
