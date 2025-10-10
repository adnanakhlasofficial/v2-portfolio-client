import { AdminDetailsPublic, ApiResponse } from '@/types';

export const getAdminPublic = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/public`);
  const data = (await res.json()) as ApiResponse<AdminDetailsPublic>;
  return data?.data;
};
