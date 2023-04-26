const path = require('path')

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'css')],
    },
    trailingSlash: true,
    devIndicators: {
        buildActivity: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com'
      },
    ],
  },
}
