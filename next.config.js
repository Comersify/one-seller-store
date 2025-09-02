/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1"],
    domains: ['comercify.s3.amazonaws.com'],
  },

};

module.exports = nextConfig;