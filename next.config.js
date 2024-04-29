/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');

const nextConfig = {
    // output: 'export'
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'http://ardor.ak.xyz/api/:path*', // 设置目标 API 的地址
    //         },
    //     ];
    // },

}

module.exports = nextConfig
