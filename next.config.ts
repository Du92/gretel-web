import type { NextConfig } from "next";

const requestedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = requestedBasePath === "/" ? "" : requestedBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
