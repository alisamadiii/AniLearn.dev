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
  transpilePackages: ["react-syntax-highlighter"],
};

module.exports = nextConfig;
