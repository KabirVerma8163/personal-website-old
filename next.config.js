/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'avatars.githubusercontent.com',
    //     port: '',
    //     pathname: 'a/logo/GitHub/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.pixabay.com',
    //     port: '',
    //     pathname: '/photo/2017/07/28/23/18/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'media.istockphoto.com',
    //     port: '',
    //     pathname: '/id/984996502/vector/**',
    //   },
    // ],
    domains: ['cdn.pixabay.com', 'media.istockphoto.com'],    
  },

}

module.exports = nextConfig
