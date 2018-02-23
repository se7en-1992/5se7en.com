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
    apiURI: 'https://www.hybjf.com',//配置线上接口域名
    lang: {
      links: {
        homepage: '返回首页'
      }
    },
    navList: {
      project: { text: '曾经项目' , to: '/projects'},
      share: { text: '技术分享' , to: '/share'},
      start: { text: '初涉前端' , to: '/start'},
      improve: { text: '庖丁解牛' , to: '/improve'},
      tools: { text: '自动化工具' , to: '/tools'},
      frame: { text: '框架学习' , to: '/frame'},
      html5: { text: 'html5' , to: '/html5'},
      contact: { text: '联系反馈' , to: '/contact'}
    },
    contentOne: {
      github: 'Github',
      likes: 88,
      views: 18834
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
    setContentOne(state, likes, views) {
      state.contentOne.likes = likes
      state.contentOne.views = views
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
  },
  actions: {
    async nuxtServerInit({ state, commit }, { isDev, req, redirect }) {
      if (isDev) {
        commit('setApiURI', 'https://www.hybjf.com')//配置测试环境接口地址
      }
      try {
        const resReleases = await axios(state.apiURI + '/api/crowdfunding/index.html')
        commit('setContentOne', resReleases.data.RecommendAviation.type, resReleases.data.RecommendAviation.id)
      } catch (e) {
        console.error('Error on [nuxtServerInit] action, please run the API server.') // eslint-disable-line no-console
      }
    }
  }
})

export default store
