export interface SkillGroup {
  number: string;
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },

  {
    number: "02",
    title: "Styling",
    items: ["Tailwind CSS", "Responsive UI", "Animations", "Design Systems"],
  },

  {
    number: "03",
    title: "Frameworks",
    items: ["Next.js", "Vite", "React Router", "Framer Motion"],
  },

  {
    number: "04",
    title: "Tools",
    items: ["Git", "GitHub", "Figma", "REST APIs", "VS Code"],
  },
];
