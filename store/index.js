import Vuex from 'vuex'
import mutations from '~/store/mutations'
import actions from '~/store/actions'

const store = () => new Vuex.Store({
  state: {
    websites: '5se7en\'s personal website',
    headerRight: {
      github: 'github',
      qq: 'QQ'
    },
    visibleHeader: false,
    visibleLike: false,
    apiURI: 'https://www.hybjf.com', // 配置线上接口域名
    lang: {
      links: {
        homepage: '返回首页'
      }
    },
    navList: {
      home: { text: '首页', to: '/' },
      project: { text: '前端面经', to: '/interview' },
      share: { text: '技术分享', to: '/share' },
      start: { text: '前端基础', to: '/start' },
      improve: { text: '前端综合', to: '/improve' },
      tools: { text: '工程化相关', to: '/tools' },
      frame: { text: '框架学习', to: '/frame' },
      contact: { text: '联系反馈', to: '/contact' }
    },
    contentOne: {
      github: 'Github',
      likes: 0,
      id: 0,
      views: 0
    },
    contentTwo: {
      position: 'Front end developer',
      name: '5se7en',
      description: {
        self: '自我描述',
        pOne: '我是一名前端开发的求知者，渴求学习更多的前端技能充实自己，不断完善提高自己，希望我们能够共同成长。',
        pTwo: '做一个有梦想有追求的前端工程师，对工作能够认真负责，对生活永远怀揣憧憬，对新鲜事物永远保持好奇心，乐观、豁达',
        pThree: '平时喜欢打篮球，看电影、看动漫、打一些团队配合竞技游戏，是个游戏迷。'
      }
    },
    projects: {
      part: [
        {name: '龙湖集团', url: '#', version: '前端开发工程师', technology: 'Vue全家桶'},
        {name: '中骏集团', url: '#', version: '前端开发工程师', technology: 'React全家桶'},
        {name: '好友邦金服', url: '#', version: '前端开发工程师', technology: 'Vue全家桶'}
      ]
    },
    openource: {
      repositories: [
        {description: 'nuxtjs+express+vuex搭建的服务端渲染（SSR）个人网站项目', link: 'https://github.com/se7en-1992/5se7en.com'},
        {description: '使用 NodeJS + Express + MongoDB +上线环境部署 搭建H5抽奖活动页面', link: 'https://github.com/se7en-1992/lottery'},
        {description: '分享一些平时自收集的大厂前端面经', link: 'https://github.com/se7en-1992/interview-questions'}
      ]
    }
  },
  mutations,
  actions
})

export default store
