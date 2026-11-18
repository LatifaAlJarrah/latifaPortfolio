export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  techLabel?: string;
  features: string[];
  image?: { src: string; alt: string; width: number; height: number };
  live: string;
  liveLabel?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    slug: "ind-damage-assessment",
    title: "IND — Industrial Damage Assessment",
    category: "National Platform / Palestinian Federation of Industries",
    description:
      "A national platform for tracking and evaluating damage across the industrial sector in Gaza, implemented by the Palestinian Federation of Industries. As a front-end developer, I contributed to building intuitive, responsive interfaces that streamline data collection and give stakeholders and decision-makers a clearer picture, including interactive data visualizations such as graphs and maps.",
    // TODO: replace with the real stack once confirmed
    tech: ["Responsive UI", "Data Visualization", "API Integration"],
    techLabel: "Focus areas",
    features: [
      "Registration and assessment-request flows for owners of damaged industrial facilities",
      "Interfaces that streamline data collection for field and technical teams",
      "Interactive data visualizations, including graphs and maps",
      "Front-end integration with back-end systems and APIs",
      "Arabic-language interface, responsive across desktop and tablet",
    ],
    // TODO: add a screenshot at /public/images/ind.png and set image: { src: "/images/ind.png", alt, width, height }
    live: "https://ida.pfi.ps/",
    liveLabel: "Visit Website",
  },
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
    features: [
      "Browse ready-made portfolio templates",
      "Build a personalized portfolio website from a template",
      "Authentication and user flows with NextAuth",
      "Data layer built on MongoDB and Prisma",
      "Responsive interface built with Next.js and React",
    ],
    image: {
      src: "/images/profolio.png",
      alt: "Profolio template marketplace homepage",
      width: 1896,
      height: 914,
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
    features: [
      "Category-based product browsing",
      "Product filtering",
      "Recommended products",
      "Shopping cart and wishlist navigation",
      "Authentication interfaces and checkout",
    ],
    image: {
      src: "/images/ultimate-furniture.avif",
      alt: "Ultimate Furniture homepage hero section showing a modern living room",
      width: 828,
      height: 621,
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
    features: [
      "Product category navigation",
      "Promotional banners",
      "Featured products and best-seller sections",
      "Customer FAQs",
      "Responsive layout across devices",
    ],
    image: {
      src: "/images/chef-supply.avif",
      alt: "Professional kitchen equipment displayed in the Chefsupply banner",
      width: 1920,
      height: 2876,
    },
    live: "https://chef-supply-mocha.vercel.app/",
    code: "https://github.com/LatifaAlJarrah/Chef-Supply",
  },
];

export const skills = [
  { label: "Front-End", value: "React & Next.js" },
  { label: "Languages", value: "TypeScript & JavaScript" },
  { label: "Styling", value: "Tailwind CSS" },
  { label: "Backend (basic)", value: "MySQL" },
  { label: "Tools", value: "Git, GitHub & Figma" },
];

export const marqueeSkills = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "HTML & CSS", "MySQL", "Git & GitHub", "Figma", "Cursor",
];
