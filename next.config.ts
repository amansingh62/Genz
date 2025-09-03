import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "images.unsplash.com", // ✅ Correct Unsplash domain
      "randomuser.me", // ✅ For user profile images
    ],
  },
};

export default nextConfig;
