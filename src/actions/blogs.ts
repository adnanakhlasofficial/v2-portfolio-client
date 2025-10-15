'use server';

import { BlogFormValues } from '@/components/forms/admin/Blog/AddBlogForm';
import cookieNames from '@/constants/cookieNames';
import { ApiResponse, IBlog } from '@/types';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const handleAddBlogAction = async (data: BlogFormValues) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(cookieNames.accessToken);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
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
  revalidateTag('BLOGS');
  return true;
};

export const handleGetBlogsAction = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: 'GET',
    next: {
      tags: ['BLOGS'],
    },
  });

  if (!res.ok) {
    return [];
  }
  const data = (await res.json()) as ApiResponse<IBlog[]>;

  return data?.data;
};
export const handleGetSingleBlogAction = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`, {
    method: 'GET',
    next: {
      tags: ['BLOGS'],
    },
  });

  if (!res.ok) {
    return null;
  }
  const data = (await res.json()) as ApiResponse<IBlog>;

  return data?.data;
};
