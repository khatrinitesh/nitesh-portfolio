export interface Experience {
  number: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    number: "01",
    role: "Frontend UI Developer",
    company: "ADSMN Interactive",
    period: "Present",
    description:
      "Building responsive interfaces, reusable React components and interactive digital experiences with modern frontend technologies.",
  },

  {
    number: "02",
    role: "Frontend Developer",
    company: "Creative Digital Projects",
    period: "Previous",
    description:
      "Developing campaign microsites and modern web experiences with strong visual execution, responsive layouts and reusable components.",
  },

  {
    number: "03",
    role: "UI Developer",
    company: "Web Projects",
    period: "Earlier",
    description:
      "Translating Figma designs and visual systems into responsive, production-ready web interfaces.",
  },
];
