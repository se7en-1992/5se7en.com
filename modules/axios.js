import axios from 'axios';

let api;
axios.defaults.timeout = 10000;

axios.interceptors.response.use((res) => {

  if (res.status >= 200 && res.status < 300) {

    return res;

  }

  return Promise.reject(res);
}, (error) => {
 // 网络异常
  return Promise.reject({message: '网络异常，请刷新重试', err: error, type: 1});

});

if (process.__API__) {

  api = process.__API__;

} else {

  api = {

    get: function(target, options = {}) {

      return new Promise((resolve, reject) => {

        axios.request({

          url: target,

          method: 'get',

          params: options

        })

        .then(res => {

          resolve(res.data);

        })

        .catch((error) => {

          reject(error);

        });

      });

    },
    post: function(target, options = {}) {
      return new Promise((resolve, reject) => {
        axios.request({

          url: target,

          method: 'post',

          params: options

        })

        .then(res => {

          resolve(res.data);

        })

        .catch((error) => {

          reject(error);
        });
      });
    }
  };
}


export default api
