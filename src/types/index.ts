export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

export type AdminDetailsPublic = {
  id: string;
  profile: string;
  blueProfile: string;
  name: string;
  email: string;
  bio: string;
  description: string;
  story: string;
  _count: {
    techSkills: number;
    tools: number;
    softSkills: number;
    projects: number;
    experiences: number;
    blogs: number;
  };
};
