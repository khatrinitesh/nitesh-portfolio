import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
}

export interface Portfolio {
  name: string;
  title: string;
  about: string;
  graduation: string;
  mobile: string;
  profileImage: string;
  skills: Skill[];
  experience: Experience[];
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
