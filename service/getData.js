import axios from './../modules/axios'

//首页点赞请求
export const likeAdd = (id) => axios.get('/api/fortuneChur/detail.html', {
  id: id
});

//套马登录请求
export const doLogin = (userName, pwd) => axios.post('/api/wx/horseGame/doLogin.html', {
  userName: userName,
  pwd: pwd,
  openid: '',
  deviceType: 'horseGame'
});


//套马获得次数请求
export const getCount = () => axios.get('/api/wx/member/horseGame/task/report/today.html');

//套马分享请求
export const shareFriends = () => axios.get('/api/wx/member/horseGame/shareCircleOfFriends.html');

//套马签到请求
export const signIn = () => axios.get('/api/wx/member/horseGame/signIn.html');

//套马初始请求
export const initGame = () => axios.get('/api/wx/member/horseGame/init.html');

//套马触发请求
export const playGame = (uuid, uluToken) => axios.post('/api/wx/member/horseGame/play.html', {
  uuid: uuid,
  uluToken: uluToken
});
