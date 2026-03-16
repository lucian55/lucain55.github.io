/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // 构建时忽略 ESLint（本项目已用独立 eslint 脚本）
    ignoreDuringBuilds: true,
  },
  output: 'export',
}

export default nextConfig

