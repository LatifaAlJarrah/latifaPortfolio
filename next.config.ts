import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // TODO: remove once the two external project images are saved in /public/images
    remotePatterns: [
      { protocol: "https", hostname: "furniture-store-snowy-ten.vercel.app" },
      { protocol: "https", hostname: "chef-supply-mocha.vercel.app" },
    ],
  },
};

export default nextConfig;
