import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Disabled typed routes to simplify dynamic blog routes
  // typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
}

export default nextConfig
