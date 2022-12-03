/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
    domains: ['prothomkotha.com'],
  },
}

module.exports = nextConfig
