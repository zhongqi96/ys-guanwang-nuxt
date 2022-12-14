module.exports = {
  /*
  ** Headers of the page
  */
 generate: {
  routes: [
    '/news-detail/news1',
    '/news-detail/news2',
    '/news-detail/news3',
    '/news-detail/news4',
    '/employ-detail/employ1'
  ]
 },
  head: {
    title: '易食纵横股份有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '易食纵横股份有限公司是专业化铁路餐饮投资管理公司，与南昌铁路局、兰州铁路局、郑州铁路局、西安铁路局、广州铁路局、海南铁路展开高铁动车组及既有线列车的餐饮服务合作。公司凭借对铁路餐饮行业多年的深入探讨和经验积累，已顺利的将航空配餐服务模式同铁路餐饮结合起来，致力于建设“美味、营养、安全、健康”的铁路餐饮服务品牌。' },
      { name: 'keywords', content: '易食，易食纵横，铁路餐饮，高铁，高铁餐饮，高铁乘务员，高铁外卖，动车，动车组，动车餐饮，动车乘务员' },
      { name: 'format-detection',content: 'telephone=no'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',href:'https://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css'}
    ],
    script: [{
      src:'https://api.map.baidu.com/api?v=30&ak=eez0YjFuTB6wp49hLOgYFch9cCGYYMrh'
    },
    {
      src:'https://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js'
    }
    ]
  },
  css:['~assets/css/reset.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // plugin

  plugins: [
    { src: '~/plugins/common.js'}
  ],
    /*
    ** Build configuration
    */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.devtool = '#source-map' // 添加此行代码
      }
    }
  }
}

