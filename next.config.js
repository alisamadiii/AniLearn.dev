/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer2");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
