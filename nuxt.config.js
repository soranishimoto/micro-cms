// .env設定
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

// generate時にaxiosを使って詳細ページを生成
const axios = require('axios')

export default {
  srcDir: 'src/',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Cabin:400','Spectral:400,800']
    }
  },
  dotenv: {
    path: process.cwd()
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // .scssファイルをグローバルに読み込む
  styleResources: {
    scss: [
      '~/assets/scss/_setting.scss'
    ]
  },
  // .env設定
  env: {
    API_KEY,
    API_URL
  },
  // Netlifyへ詳細ページの自動デプロイ
  generate: {
    routes() {
      const demo = axios
        .get('https://soranishimoto.microcms.io/api/v1/gourmet', {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(post => {
            return '/posts/' + post.id
          })
        })
      return Promise.all([demo]).then(values => {
        return values.join().split(',')
      })
    }
  }
}
