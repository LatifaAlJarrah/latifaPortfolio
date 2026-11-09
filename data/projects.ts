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
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
    ],
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
      "A responsive e-commerce storefront for furniture and mattresses, featuring category-based product browsing, product filtering, recommended products, shopping cart, wishlist navigation, authentication interfaces, and checkout. I designed and developed the front-end experience with a focus on responsive layouts, reusable components, and intuitive shopping interactions.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: {
      src: "/images/ultimate-furniture.avif",
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
    description:
      "A responsive e-commerce storefront for professional kitchen equipment, featuring product category navigation, promotional banners, featured products, best-seller sections, and customer FAQs. I designed and developed the front-end experience with a focus on clean layouts, intuitive product discovery, reusable components, and responsive design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: {
      src: "/images/chef-supply.avif",
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
