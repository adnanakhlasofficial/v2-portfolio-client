'use server';

import { ProjectFormValues } from '@/components/forms/admin/AddProjectForm';
import cookieNames from '@/constants/cookieNames';
import { getNextCookie } from '@/utils/next-cookie';

export const handleAddProjectAction = async (data: ProjectFormValues) => {
  const cookie = await getNextCookie(cookieNames.accessToken);
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

  console.log(await res.json());

  return true;
};
