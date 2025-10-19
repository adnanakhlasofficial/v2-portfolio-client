'use server';

import { ProjectFormValues } from '@/components/forms/admin/AddProjectForm';
import cookieNames from '@/constants/cookieNames';
import { ApiResponse, IProject } from '@/types';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const handleAddProjectAction = async (data: ProjectFormValues) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(cookieNames.accessToken);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
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
  revalidateTag('PROJECTS');
  return true;
};

export const handleGetProjectsAction = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: 'GET',
    next: {
      tags: ['PROJECTS'],
    },
  });

  if (!res.ok) {
    return [];
  }
  const data = (await res.json()) as ApiResponse<IProject[]>;
  return data?.data;
};
