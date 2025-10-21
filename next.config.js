/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['comercify.s3.amazonaws.com', 'backend.odigix.com'],
  },

};

module.exports = nextConfig;