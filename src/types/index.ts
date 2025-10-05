export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

export type AdminDetailsPublic = {
  id: string;
  name: string;
  email: string;
  bio: string;
  description: string;
  story: string;
};
