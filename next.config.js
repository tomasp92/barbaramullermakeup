/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["drive.google.com", "scontent.faep14-3.fna.fbcdn.net", "scontent.faep14-2.fna.fbcdn.net"]
  },
  experimental: { images: { allowFutureImage: true } }
}

module.exports = nextConfig
