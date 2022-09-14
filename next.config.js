/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['images.pexels.com', "lh3.googleusercontent.com"]
  }
}

module.exports = nextConfig
