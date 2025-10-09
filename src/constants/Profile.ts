import ProfileDP from '@/assets/profile-picture.png';
import { StaticImageData } from 'next/image';

export type UserProfile = {
  name: string;
  email: string;
  bio: string;
  description: string;
  story: string;
  profile: StaticImageData; // For Next.js with next/image
};

export const user: UserProfile = {
  name: 'Adnan Bin Akhlas',
  email: "official.adnanakhlas@gmail.com",
  bio: 'Full Stack Developer & Creative Problem Solver',
  description:
    'I craft beautiful, performant web experiences that blend innovative design with cutting-edge technology. Passionate about building products that make a difference.',
  story:
    "I'm a full-stack developer who thrives on building modular, scalable systems with clean design and intuitive user experiences. I enjoy solving complex problems, collaborating across teams, and continuously refining workflows to make development faster, smarter, and more maintainable.",
  profile: ProfileDP,
};
