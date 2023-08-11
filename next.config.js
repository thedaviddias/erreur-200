/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    async redirects() {
      return [
        {
          source: '/analytics-web-gdpr-et-google-analytics/analytics-web-gdpr-et-google-analytics',
          destination: '/analytics-web-gdpr-et-google-analytics',
          permanent: true,
        },
        {
          source: '/la-jamstack/la-jamstack',
          destination: '/la-jamstack',
          permanent: true,
        },
      ]
    }
  }
}

module.exports = withContentlayer(nextConfig)
