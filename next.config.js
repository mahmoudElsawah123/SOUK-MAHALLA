const path = require('path')
const advancedHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
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
    value: "origin-when-cross-origin",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'souq.deltawy.com',
            port: '3015',
    
          },
        ],
          domains :  ['souq.deltawy.com'],
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          formats: ['image/webp'],
      },
      async headers() {
        return [
          {
            // Apply these headers to all routes in your application.
            source: "/:path*",
            headers: advancedHeaders,
          },
        ];
      },
      compiler: {
        removeConsole: false,
      },
      reactStrictMode : false,
      
}

module.exports = nextConfig
