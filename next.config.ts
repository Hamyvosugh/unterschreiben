import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security configurations
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable compression
  reactStrictMode: true, // Enable React strict mode

  // Disable X-Powered-By header globally
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "off",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "no-referrer",
        },
        {
          key: "Permissions-Policy",
          value:
            "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
        },
      ],
    },
  ],

  // Image optimization security
  images: {
    remotePatterns: [], // No external images allowed
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Disable unnecessary features
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Production optimizations
  output: "standalone", // Better for production deployment
  experimental: {
    // Enable security features
    strictNextHead: true,
  },
};

export default nextConfig;
