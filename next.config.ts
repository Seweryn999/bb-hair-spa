// On GitHub Pages the site lives under /bb-hair-spa; locally it is served from the root.
const basePath = process.env.GITHUB_ACTIONS === "true" ? "/bb-hair-spa" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  basePath,
  env: {
    BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
