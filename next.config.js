/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    unoptimized:true,
    remotePatterns:[
      {
        protocol:"http",
        hostname:"i.ibb.co",
        port:"",
        pathname:"**",
      },
    ],
  },
};

module.exports = nextConfig
