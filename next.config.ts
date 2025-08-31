
import type {NextConfig} from 'next';

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.icann.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'aftld.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ca.go.ke',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.icta.go.ke',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kictanet.or.ke',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kenet.or.ke',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ibm.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default withPWA(nextConfig);
