module.exports = {
  mode: 'spa',
  head: {
    title: 'cocorodb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // prettier-ignore
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
    ],
    script: [{ src: '/ncmb.min.js' }],
  },
  env: {
    ncmb: {
      applicationKey: process.env.NCMB_APPLICATION_KEY,
      clientKey: process.env.NCMB_APPLICATION_KEY,
    },
  },
  plugins: [
    { src: '~plugins/vuetify.js' },
    { src: '~plugins/elements' },
    { src: '~plugins/ncmb', ssr: false },
  ],
  css: ['~assets/styles/app.styl'],
  vendor: ['~/plugins/vuetify.js'],
  extractCSS: true,
  build: {
    // Run ESLint on save
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
