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

export interface AdminDetailsPrivate {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  profile: string;
  blurProfile: string | null;
  bio: string;
  description: string;
  story: string;
  skills: string | null;
  createdAt: string;
  updatedAt: string;
  _count: {
    techSkills: number;
    tools: number;
    softSkills: number;
    blogs: number;
    projects: number;
    experiences: number;
  };
}

export interface IProject {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  liveLink: string;
  clientRepoLink: string;
  serverRepoLink: string;
  createdAt: string;
  updatedAt: string;
}

export interface IExperience {
  slug: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievement: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IBlog {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
