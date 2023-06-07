/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.howtogeek.com",
      "pbs.twimg.com",
      "media.licdn.com",
    ],
  },
};

module.exports = nextConfig;
