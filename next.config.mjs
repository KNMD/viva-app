/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
          {
            source: '/viva-service/:path*',
            destination: process.env.APP_BACKEND_BASE + '/viva-service/:path*',
          },
          {
            source: '/engine/:path*',
            destination: process.env.APP_ENGINE_BASE + '/engine/:path*',
          },
        ];
    },
};

export default nextConfig;
