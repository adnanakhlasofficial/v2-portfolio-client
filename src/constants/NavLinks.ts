import {
  Home,
  UserRound,
  FolderOpen,
  Briefcase,
  BrainCircuit,
  Mail,
  BookOpenText,
} from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home, // 🏠 clean and universal
  },
  {
    label: "About",
    href: "/about",
    icon: UserRound, // 👤 softer and more modern than User
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderOpen, // 📂 conveys open access to work
  },
  {
    label: "Experiences",
    href: "/experiences",
    icon: Briefcase, // 💼 classic for work history
  },
  {
    label: "Skills",
    href: "/skills",
    icon: BrainCircuit, // 🧠+⚡️ elegant metaphor for technical skills
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail, // ✉️ more intuitive than Send
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: BookOpenText, // 📖 clean and readable for articles
  },
];
