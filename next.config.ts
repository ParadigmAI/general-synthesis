import type { NextConfig } from "next";

// Served from a GitHub Pages project URL (/<repo>) until the custom domain is
// attached; CI passes the base path from actions/configure-pages. Empty once
// a CNAME is in place, so the same config works for both.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
