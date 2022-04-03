/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ['tsx'],
  images: {
    domains: ['placeimg.com', 'www.aliger.com.br']
  },

  async redirects() {
    return [
      {
        source: '/app',
        destination: '/',
        permanent: true
      },
      {
        source: '/login',
        destination: '/app/auth/login',
        permanent: true
      },
      {
        source: '/app/auth',
        destination: '/app/auth/login',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
