import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'images.prismic.io',
      'aceternity.com',
      'portal.mch.ifsuldeminas.edu.br',
      'images.unsplash.com',
      'assets.aceternity.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
