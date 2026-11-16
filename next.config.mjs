/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  ...(process.env.NODE_ENV === 'development'
    ? {
        htmlLimitedBots: /.*/,
      }
    : {}),
};

export default nextConfig;

