/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dev.to",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
    ],
  },
  // Optimize for Vercel deployment
  experimental: {
    // Enable persistent caching for better performance
    turbopackPersistentCachingForBuild: true,
  },
  // Improve API timeout for external calls
  env: {
    DEVTO_TIMEOUT: '15000', // 15 seconds for Dev.to API
  },
};

export default nextConfig;
