import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 this enables static export (creates `out/` after build)
  images: {
    domains: [
      "assets.aceternity.com",
      "images.unsplash.com",
      "randomuser.me",
    ],
  },
};

export default nextConfig;
