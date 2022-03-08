/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ['tsx'],
  images: {
    domains: ['placeimg.com', 'www.aliger.com.br']
  }
}

module.exports = nextConfig
