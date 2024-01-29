/** @type {import('next').NextConfig} */
const path = require('path');

nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/feed',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
