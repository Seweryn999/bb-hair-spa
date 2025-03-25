import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Dodaj poniższe dwie linie, jeśli publikujesz w podkatalogu "bb-hair-spa"
  basePath: "/bb-hair-spa",
  assetPrefix: "/bb-hair-spa",
};

export default nextConfig;
