export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: { src: string; alt: string; width: number; height: number };
  live: string;
  code: string;
};

export const projects: Project[] = [
  {
    slug: "profolio",
    title: "Profolio",
    category: "Web Application / Portfolio Platform",
    description:
      "A portfolio-building platform that allows users to explore ready-made templates and create a personalized portfolio website. I built the responsive interface and implemented the core user flows using Next.js, React.js and modern front-end technologies.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma"],
    image: {
      src: "/images/profolio.png",
      alt: "Profolio template marketplace homepage",
      width: 1600,
      height: 1333,
    },
    live: "https://profolio-coral-seven.vercel.app/",
    code: "https://github.com/LatifaAlJarrah/Profolio",
  },
  {
    slug: "ultimate-furniture",
    title: "Ultimate Furniture",
    category: "E-Commerce / Retail",
    description:
      "A responsive e-commerce interface for furniture and mattresses, featuring product browsing, shopping cart, wishlist, authentication, and checkout flows. I designed and developed the front-end experience with a focus on responsive layouts, reusable components, and smooth user interactions.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    // TODO: save this image into /public/images and use a local path
    image: {
      src: "https://furniture-store-snowy-ten.vercel.app/src/assets/images/home-slide1.jpg",
      alt: "Ultimate Furniture homepage hero section showing a modern living room",
      width: 1600,
      height: 1000,
    },
    live: "https://furniture-store-snowy-ten.vercel.app/",
    code: "https://github.com/LatifaAlJarrah/Furniture-Store",
  },
  {
    slug: "chefsupply",
    title: "Chefsupply",
    category: "E-Commerce / Retail",
    // TODO: confirm this description matches the real features of the project
    description:
      "A responsive e-commerce interface for professional kitchen equipment, with product browsing and clear, easy-to-scan layouts. I designed and developed the front end with a focus on responsive design, reusable components, and smooth interactions.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    // TODO: save this image into /public/images and use a local path
    image: {
      src: "https://chef-supply-mocha.vercel.app/src/assets/images/banner-image.jpg",
      alt: "Professional kitchen equipment displayed in the Chefsupply banner",
      width: 1920,
      height: 820,
    },
    live: "https://chef-supply-mocha.vercel.app/",
    code: "https://github.com/LatifaAlJarrah/Chef-Supply",
  },
];

export const skills = [
  { label: "Front-End", value: "React & Next.js" },
  { label: "Language", value: "TypeScript" },
  { label: "Styling", value: "Tailwind CSS" },
  { label: "State", value: "Zustand / Hooks" },
  { label: "Design", value: "Figma & UI" },
];

export const marqueeSkills = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "Zustand", "Supabase", "Node.js", "Figma", "Git & GitHub",
];
