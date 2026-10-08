export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    number: "01",

    title: "3D Card Experience",

    description:
      "Interactive frontend experience with perspective, hover depth and responsive motion.",

    tags: ["React", "TypeScript", "CSS", "3D"],

    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",

    githubUrl: "https://github.com/khatrinitesh",
  },

  {
    number: "02",

    title: "Modern Portfolio",

    description:
      "A clean, high-impact portfolio system focused on typography, layout and smooth transitions.",

    tags: ["React", "Tailwind", "Lenis", "Motion"],

    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85",

    githubUrl: "https://github.com/khatrinitesh",
  },

  {
    number: "03",

    title: "Digital Campaign UI",

    description:
      "Campaign-focused interfaces combining storytelling, responsive components and polished interactions.",

    tags: ["React", "UI/UX", "API", "Animation"],

    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=85",

    githubUrl: "https://github.com/khatrinitesh",
  },
];
