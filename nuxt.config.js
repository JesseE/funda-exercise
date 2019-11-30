import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  //https://nuxtjs.org/faq/http-proxy/
  //axios has bult in support for this proxy module
  //this needs to be done if you want to have cross origin resources
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios'],
    '@nuxtjs/dotenv',
    // '@nuxtjs/pwa',
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    prefix: '/'
    // See https://github.com/nuxt-community/axios-module#options

  },

  proxy: {
    '/api/': {
      target: 'http://partnerapi.funda.nl/feeds/Aanbod.svc/',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      "presets": [
        ["@babel/preset-env", {
          "useBuiltIns": false,
        }],
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime"
      ]
    },
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
