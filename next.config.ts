import type { NextConfig } from "next";

function ensureLeadingSlash(path: string) {
  if (!path || path === "") return ""; // jeżeli pusty, zwróć pusty ciąg
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
