import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const customDomain = process.env.CUSTOM_DOMAIN === "true";
const basePath = githubPages && repository && !customDomain ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  trailingSlash: githubPages,
  basePath,
  images: { unoptimized: githubPages },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
