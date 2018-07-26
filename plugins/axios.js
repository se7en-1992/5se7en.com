export default function ({ $axios, redirect }) {
  /*   */
  $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

  $axios.onRequest(config => {
    if (config.method === 'post') {
      if (!config.data) return
      // node 不支持URLSearchParams
      // var params = new URLSearchParams()
      var params = ''
      Object.keys(config.data).forEach(key => {
        // params.append(key, config.data[key])
        params += key + '=' + config.data[key] + '&'
      })
      Object.defineProperty(config, 'data', {
        value: params
      })
    }
    console.log('Making request to ' + config.url)
  })

  $axios.onResponse(res => {
    // console.log(res)
    // if (res.status === 200) {
    //   if (!res) {
    //     redirect('/error')
    //   }
    // }
  })

  $axios.onError(error => {
    // const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   redirect('/400')
    // }
    // if (error.code === 500) {
    //   redirect('/error')
    // }
  })
}
