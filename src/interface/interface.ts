import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: string;
  icon: string;
}

export interface ExperienceType {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
  projectLink?: string;
}

export interface Portfolio {
  name: string;
  title: string;
  about: string;
  graduation: string;
  mobile: string;
  profileImage: string;
  skills: Skill[];
  experience: ExperienceType[];
  social: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
}

export interface SocialIconsType {
  github: LucideIcon;
  linkedin: LucideIcon;
  email: LucideIcon;
  whatsapp: LucideIcon;
}

export interface SocialLinksType {
  github: string;
  linkedin: string;
  email: string;
  whatsapp: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  tech?: string;
  liveUrl?: string;
  src: string;
  alt: string;
}
export interface SkillImageComparisonProps {
  title: string;
  beforeImage: string;
  afterImage: string;
}
