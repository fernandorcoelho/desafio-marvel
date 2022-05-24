module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'http://gateway.marvel.com/v1/public/comics/323/events/:path*',
      },
    ]
  },
  compiler: {
    styledComponents: true
  }
};
