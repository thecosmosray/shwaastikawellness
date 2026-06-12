import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Tailored for this stack:
    //  - Next.js SSR/RSC requires 'unsafe-inline' for scripts (no nonce middleware)
    //  - YouTube embeds (frame-src, script-src)
    //  - Google Maps / Google reviews (frame-src, img-src)
    //  - Google Fonts (font-src, style-src)
    //  - WhatsApp links open externally, no frame needed
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' www.youtube.com s.ytimg.com www.google.com",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "font-src 'self' fonts.gstatic.com",
      "img-src 'self' data: blob: *.google.com *.googleapis.com *.googleusercontent.com *.gstatic.com i.ytimg.com",
      "frame-src www.youtube.com www.google.com maps.google.com",
      "connect-src 'self' vitals.vercel-insights.com",
      "media-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    qualities: [75, 85, 88, 90, 92, 95, 100],
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;