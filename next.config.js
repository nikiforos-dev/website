/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
  images: {
    domains: ['www.rooshv.com', 'jaysanalysis.com', 'i1.wp.com', 'i2.wp.com'],
    // loader: 'akamai',
    // path: process.env.NEXT_PUBLIC_URL,
  },  
}

module.exports = nextConfig

