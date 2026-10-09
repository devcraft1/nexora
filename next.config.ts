import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server be opened via 127.0.0.1 as well as localhost.
  allowedDevOrigins: ["127.0.0.1"],
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
