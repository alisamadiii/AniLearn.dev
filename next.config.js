const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.alirezasamadi.com" }],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, wekpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
