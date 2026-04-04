import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  transpilePackages: ["weaver-ui-joyui"],
  output: "export",
  basePath: isGitHubPages ? "/weaver" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
