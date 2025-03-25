/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/bb-hair-spa" : "",
  // assetPrefix: isProd ? "/bb-hair-spa/" : "",  // <-- Wykomentuj to na próbę
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
