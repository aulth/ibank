/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    mongodb:process.env.mongodb
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
