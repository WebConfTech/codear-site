const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(withFonts({
  experimental: {
    async rewrites() {
      return [
        { source: '/', destination: '/' },
        { source: '/conocenos', destination: '/about' },
        { source: '/codigo-de-conducta', destination: '/coc' },
        { source: '/comunicaciones', destination: '/comuniques' },
        { source: '/comunidades', destination: '/communities' },
      ];
    },
    catchAllRouting: true,
  },
}));
