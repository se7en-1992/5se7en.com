import axios from 'axios'
import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    websites: '5se7en\'s personal website',
    headerRight: {
      github: 'github',
      qq: 'QQ'
    },
    visibleHeader: false,
    visibleAffix: false,
    apiURI: 'https://docs.api.nuxtjs.org',
    locale: 'en',
    lang: {
      links: {
        homepage: '返回首页'
      }
    },
    menu: {},
    navList: {
      project: { text: '曾经项目' , to: '/projects'},
      share: { text: '技术分享' , to: '/share'},
      start: { text: '初涉前端' , to: '/start'},
      improve: { text: '庖丁解牛' , to: '/improve'},
      tools: { text: '自动化工具' , to: '/tools'},
      frame: { text: '框架学习' , to: '/frame'},
      html5: { text: 'html5' , to: '/html5'},
      contact: { text: '联系反馈' , to: '/contact'}
    }
  },
  mutations: {
    toggle(state, key) {
      state[key] = !state[key]
    },
    setApiURI(state, apiURI) {
      state.apiURI = apiURI
    },
    setDocVersion(state, docVersion) {
      state.docVersion = docVersion
    },
    setGhVersion(state, ghVersion) {
      state.ghVersion = ghVersion
    },
    setLocale(state, locale) {
      state.locale = locale
    },
    setLang(state, lang) {
      state.lang = lang
    },
    setMenu(state, menu) {
      state.menu = menu
    }
  }
})

export default store
