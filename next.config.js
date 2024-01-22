/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    eslint: { ignoreDuringBuilds: true },
}

const withImages = require('next-images')
module.exports = withImages({
    inlineImageLimit: false
})