import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    domain: 'http://localhost:3000',
  },
  images: {
    domains: ['i.scdn.co'],
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };

    return config;
  },
};

export default withContentlayer(nextConfig);
