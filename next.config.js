/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://110.42.234.194/api/:path*', // 设置目标 API 的地址
            },
        ];
    },

}

module.exports = nextConfig
