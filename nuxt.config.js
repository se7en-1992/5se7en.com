const packageData = require('./package.json')
module.exports = {
  head: {
    title: '5se7en\'s personal website',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: packageData.description },
      { hid: 'keywords', name: 'keywords', content: packageData.keywords.join(', ') },
      { hid: 'author', name: 'author', content: packageData.author }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/scss/main.scss',
    'element-ui/lib/theme-chalk/index.css',
    'mint-ui/lib/style.css'
  ],
  modules: [
    '@nuxtjs/axios'
    // '~/modules/timer',
    // '~/modules/autoReward',
    // '~/modules/addlike',
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/mint-ui',
    '@/plugins/axios'
  ],
  build: {
    vendor: ['~/plugins/axios', 'element-ui', 'mint-ui']
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      // savedPosition 只有在 popstate 导航（如按浏览器的返回按钮）时可以获取。
      if (savedPosition) {
        return savedPosition
      } else {
        let position = { x: 0, y: 0 }
        // 目标页面子组件少于两个
        if (to.matched.length < 2) {
          // 滚动至页面顶部
          position = { x: 0, y: 0 }
        } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
          // 如果目标页面子组件中存在配置了scrollToTop为true
          position = { x: 0, y: 0 }
        }
        // 如果目标页面的url有锚点,  则滚动至锚点所在的位置
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  loading: { color: '#41B883' },
  cache: true
}
