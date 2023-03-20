/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn-icons-png.flaticon.com",
      "user-images.githubusercontent.com",
      "public-files.gumroad.com",
    ],
  },
};

module.exports = nextConfig;
