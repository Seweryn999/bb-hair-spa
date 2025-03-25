/** @type {import('next').NextConfig} */
import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
};

module.exports = nextConfig;
