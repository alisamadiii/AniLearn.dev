/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pbs.twimg.com",
      "cdn-icons-png.flaticon.com",
      "assets.stickpng.com",
    ],
  },
};

module.exports = nextConfig;
