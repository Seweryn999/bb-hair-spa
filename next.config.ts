import type { NextConfig } from "next";

// Zmodyfikuj environment tak, by zawsze mieć poprzedzający slash
// Jeśli user wstawi "bb-hair-spa", to i tak dodamy "/" z przodu
function ensureLeadingSlash(path: string) {
  if (!path.startsWith("/")) {
    return "/" + path;
  }
  return path;
}

let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
basePath = ensureLeadingSlash(basePath);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
