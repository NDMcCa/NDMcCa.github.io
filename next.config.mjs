/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "github-readme-stats.vercel.app",
          },
        ],
      },
};

export default nextConfig;
