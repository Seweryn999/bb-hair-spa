/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Włączamy statyczny eksport
  output: "export",
  // Ustawiamy basePath i assetPrefix na nazwę repozytorium (w produkcji)
  basePath: isProd ? "/moja-strona" : "",
  assetPrefix: isProd ? "/moja-strona/" : "",
  // Wyłączamy optymalizację obrazów w trybie statycznym
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
