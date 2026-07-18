import type { NextConfig } from "next";

// Static export for GitHub Pages. The basePath matches the repo name so the
// site works at https://<user>.github.io/holistic-hub-v2/. Local dev is
// unaffected (basePath only applies when GITHUB_PAGES=1).
const isPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isPages ? "/holistic-hub-v2" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
