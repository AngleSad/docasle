/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/docasle",
  assetPrefix: "/docasle/",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
