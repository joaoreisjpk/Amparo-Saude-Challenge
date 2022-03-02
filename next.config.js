/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: 'https://localhost:3000/api/',
  },
};

module.exports = nextConfig;
