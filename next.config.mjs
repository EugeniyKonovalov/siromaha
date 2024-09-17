/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    reactCompiler: true,
    ppr: "incremental",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
