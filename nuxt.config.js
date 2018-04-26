module.exports = {
  ssr: false,

  /* Headers of the page */
  head: {
    title: 'cocorodb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/ncmb.min.js' }],
  },
  env: {
    ncmb: {
      applicationKey: process.env.NCMB_APPLICATION_KEY,
      clientKey: process.env.NCMB_APPLICATION_KEY,
    },
  },
  plugins: [{ src: '~plugins/ncmb', ssr: false }],
  build: {
    /* Run ESLint on save */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
