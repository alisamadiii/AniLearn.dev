const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.alirezasamadi.com" }],
  },
};

module.exports = withContentlayer(nextConfig);
