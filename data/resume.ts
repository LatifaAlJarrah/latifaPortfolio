export type Job = {
  role: string;
  org: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Front-End Developer",
    org: "Palestinian Federation of Industries (PFI)",
    period: "Feb 2026 — Present",
    current: true,
    bullets: [
      "Designed responsive, user-friendly UI interfaces based on project requirements.",
      "Developed interactive data visualization tools, including graphs and maps, to present industrial-sector data effectively.",
      "Integrated front-end components with back-end systems and APIs to enable dynamic, data-driven functionality.",
      "Optimized web platforms for responsive performance across desktop and tablet devices.",
      "Contributed to digital solutions supporting industrial-sector damage assessment and recovery planning in Gaza.",
    ],
  },
  {
    role: "Front-End Developer",
    org: "Sadeim",
    period: "Oct 2024 — Feb 2026",
    bullets: [
      "Developed and maintained responsive user interfaces using React.js and Tailwind CSS.",
      "Collaborated with designers and backend developers to deliver high-quality web experiences.",
      "Focused on performance optimization and writing clean, reusable code.",
    ],
  },
];

export const education = {
  degree: "Bachelor’s Degree in Computer Science",
  school: "Al-Aqsa University — Gaza, Palestine",
  period: "2020 — 2025",
};

export const training = {
  title: "React Pro Training Program",
  org: "Gaza Sky Geeks",
  period: "2025 — Present",
  text: "Hands-on training focused on React.js, Next.js, and modern front-end practices, including performance optimization, UI/UX design, and collaborative development with Git and GitHub.",
};

export const languages = [
  { name: "Arabic", level: "Excellent" },
  { name: "English", level: "Good" },
];
