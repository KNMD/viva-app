/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
          {
            source: '/viva-service/:path*',
            destination: process.env.APP_BACKEND_BASE + '/viva-service/:path*',
          },
        ];
    },
};

export default nextConfig;
