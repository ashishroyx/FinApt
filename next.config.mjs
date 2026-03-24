/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me'], // ✅ Allow this domain for remote image loading
  },
};

export default nextConfig;
