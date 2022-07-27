/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CH_API_KEY: process.env.CH_API_KEY,
  }
}

module.exports = nextConfig
