// import { getHomeDataOne, getHomeDataTwo } from '~/service/getData.js'

export default {
  async nuxtServerInit({ state, commit }, { app, isDev, req, redirect }) {
    if (isDev) {
      // commit('setApiURI', 'https://192.168.10.247:8080') //  配置测试环境接口地址
    }
    try {
      // app.$axios.setHeader('Cookie', req.Cookie)
      // const likes = await app.$axios.$get('https://www.hybjf.com/api/fortuneChur/top.html')
      // const clicks = await app.$axios.$get('https://www.hybjf.com/api/fortuneChur/detail.html?id=1417')
      // // const [ likes, clicks ] = await Promise.all([getHomeDataOne(app), getHomeDataTwo(app)])
      // const contentOne = {
      //   likes: likes[0].clicks,
      //   id: likes[0].id,
      //   clicks: clicks.detail.clicks
      // }
      // commit('setContentOne', contentOne)
    } catch (e) {
      console.error('Error on [nuxtServerInit] action, please run the API server.') // eslint-disable-line no-console
    }
  }
}
