/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        fiber: false,
        includePaths: [path.join(__dirname, 'scss')],
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
