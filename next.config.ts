import type { NextConfig } from "next";

const ALLOWED_ORIGIN = "http://localhost:5173";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  async headers() {
    return [
      {
        // Apply CORS headers to all routes so requests from the widget
        // dev server (http://localhost:5173) are permitted.
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: ALLOWED_ORIGIN },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
        ],
      },
    ];
  },
};

export default nextConfig;
