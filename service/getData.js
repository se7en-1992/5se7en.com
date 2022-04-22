// /*
//  * 首页数据1
// */
// export const getHomeDataOne = (app) => app.$axios.$get('/v1/fortuneChur/top.html');

// /*
//  * 首页数据2
// */
// export const getHomeDataTwo = (app) => app.$axios.$get('/v1/fortuneChur/detail.html?id=1417');

// // 首页点赞请求
// export const likeAdd = (app, id) => app.$axios.get('/v1/fortuneChur/detail.html', {
//   params:{
//     id: id
//   }
// });

// //套马登录请求
// export const doLogin = (app, userName, pwd) => app.$axios.post('/gapi/wx/horseGame/doLogin.html', {
//   userName: userName,
//   pwd: pwd,
//   openid: '',
//   deviceType: 'horseGame'
// });

// //套马获得次数请求
// export const getCount = (app) => app.$axios.get('/gapi/wx/member/horseGame/task/report/today.html');

// //套马分享请求
// export const shareFriends = (app) => app.$axios.get('/gapi/wx/member/horseGame/shareCircleOfFriends.html');

// //套马签到请求
// export const signIn = (app) => app.$axios.get('/gapi/wx/member/horseGame/signIn.html');

// //套马初始请求
// export const initGame = (app) => app.$axios.get('/gapi/wx/member/horseGame/init.html');

// //套马触发请求
// export const playGame = (app, uuid, uluToken) => app.$axios.post('/gapi/wx/member/horseGame/play.html', {
//   uuid: uuid,
//   uluToken: uluToken
// });

// //套马获得好友币余额请求
// export const getHybCount = (app) => app.$axios.get('/gapi/wx/member/horseGame/activity/integral/participate.html');

// //套马购买积分赛请求
// export const buyTimes = (app) => app.$axios.post('/gapi/wx/member/horseGame/activity/integral/buy.html', {
//   amount: 10
// });

// //套马积分赛初始请求
// export const initActivityGame = (app) => app.$axios.get('/gapi/wx/member/horseGame/activity/integral/init.html');

// //套马积分赛触发请求
// export const playActivityGame = (app, uuid, uluToken) => app.$axios.post('/gapi/wx/member/horseGame/activity/integral/play.html', {
//   uuid: uuid,
//   uluToken: uluToken
// });

// //套马积分赛结束请求
// export const endActivityGame = (app, uluToken) => app.$axios.post('/gapi/wx/member/horseGame/activity/integral/end.html', {
//   uluToken: uluToken
// });
