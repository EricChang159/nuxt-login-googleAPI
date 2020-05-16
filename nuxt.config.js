
module.exports = {
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
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  /**
   * axios
   */
  axios: {
    proxy: true, // 表示開啓代理
    prefix: '/api', // 表示給請求url加個前綴 /api
    credentials: true // 表示跨域請求時是否需要使用憑證
  },
  proxy: {
    '/api': { 
      target: 'https://www.apiopen.top', // 目標接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替換成 /
        changeOrigin: true // 表示是否跨域
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
    extend (config, ctx) {
    },
    vendor: ['axios'] // 爲防止重複打包
  }
}
