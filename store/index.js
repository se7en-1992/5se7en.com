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
    visibleLike: false,
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
    },
    contentTwo: {
      position: 'Front end developer',
      name: '5se7en',
      description: {
        self: '自我描述',
        pOne: '我是一名前端开发的求知者，渴求学习更多的前端技能充实自己，不断完善提高自己，学习能力较强，逻辑能力较好。',
        pTwo: '团队合作能力较好，有梦想有追求的前端工程师，对新鲜事物有很强的好奇心，学习能力较强，性格乐观、内敛，平时',
        pThree: '喜欢锻炼、看电影、打一些团队配合竞技游戏，注重效率，对技术有热情。'
      }
    },
    projects: {
      part: [
        {name: '好友邦金服官网', url: 'https://www.hybjf.com/', version: '已上线', technology: 'Node+express'},
        {name: '好友邦金服微信端', url: 'https://www.hybjf.com/wx/', version: '已上线', technology: 'Node+express+h5'},
        {name: '个人网站', url: 'http://www.5se7en.com/', version: '已上线', technology: 'Nuxtjs+Node+express'},
        {name: '逼真的翻书页效果', url: 'https://www.hybjf.com/crowdFunding/definition', version: '已上线', technology: 'Canvas+h5'},
        {name: 'H5套马游戏', url: 'https://www.hybjf.com/game/20170925Activity', version: '已上线', technology: 'Phaser+h5'}
      ]
    },
    openource: {
      repositories: [
        {description: 'nuxtjs+express+vuex搭建的服务端渲染（SSR）个人网站项目', link: 'https://github.com/se7en-1992/5se7en.com'},
        {description: '使用 NodeJS + Express + MongoDB +上线环境部署 搭建H5抽奖活动页面', link: 'https://github.com/se7en-1992/lottery'},
        {description: '分享前端基础知识share web knowledge', link: 'https://github.com/se7en-1992/A'},
      ]
    }
  },
  mutations: {
    toggle(state, key) {
      state[key] = !state[key]
    },
    setApiURI(state, apiURI) {
      state.apiURI = apiURI
    },
    setContentOne(state, contentOne) {
      state.contentOne.likes = contentOne.id
      state.contentOne.views = contentOne.clicks
    }
  },
  actions: {
    async nuxtServerInit({ state, commit }, { isDev, req, redirect }) {
      if (isDev) {
        commit('setApiURI', 'https://www.hybjf.com')//配置测试环境接口地址
      }
      try {
        const resReleases = await axios(state.apiURI + '/api/fortuneChur/detail.html?id=1417')
        //console.log(resReleases.data.RecommendAviation.type+"------"+resReleases.data.RecommendAviation.id)
        commit('setContentOne', resReleases.data.detail)
      } catch (e) {
        console.error('Error on [nuxtServerInit] action, please run the API server.') // eslint-disable-line no-console
      }
    }
  }
})

export default store
