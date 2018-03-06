<template>
  <section class="catchHouse">
    <p><input type="text"  placeholder="请输入用户名" id="userName" v-model="username" /></p>
    <p><input type="password" placeholder="请输入密码" id="password" v-model="password" /></p>
    <p><button id="start" @click="verification" :disabled="disabled">启动</button></p>
  </section>
</template>

<script>
import { doLogin,getCount,shareFriends,signIn,initGame,playGame } from '../../service/getData'

export default {
  head: {
    meta: [
      { hid: 'viewport', name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no' }
    ],
    script: [
      { src: '/js/rem.js' }
    ]
  },
  data() {
    return {
        username: "",
        password: "",
        fullscreenLoading: false,
        disabled: false,
        uuid: "",
        uluToken: ""
    }
  },
  methods: {
    doLogin(loading) {
      doLogin(this.username,this.password).then(res => {
        if (res.result) {
          this.$message({
            message: res.msg,
            type: 'success',
            duration: 2000,
            onClose: () => {
              this.disabled = false;
            }
          });
          this.getInfo(loading)
        }else{
          this.$message({
            message: res.msg,
            type: 'error',
            duration: 2000,
            onClose: () => {
              this.disabled = false;
              loading.close()
            }
          });
        }
      }).catch(err => {
          this.disabled = false;
          console.log(err)
      })
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.doLogin(loading);
    },
    elAlert(msg, title) {
      this.$alert(msg, title, {
        confirmButtonText: '确定',
        customClass: 'el-alertBox',
        callback: action => {

        }
      });
    },
    verification() {
      this.disabled = true;
      if (this.username == "" || this.password == "") {
        this.elAlert("请输入正确的用户名和密码", "提示");
        this.disabled = false;
        return;
      }else{
        this.openFullScreen2()
      }
    },
    getInfo(loading) {
      getCount().then(res => {
        if (res.result) {
          if (res.isShare ==0) {
            this.wxshare(loading);
            return;
          }
          if (res.isSignIn == 0) {
            this.sign(loading);
            return;
          }
          if (res.isShare ==1 && res.isSignIn ==1 && res.remainingTimes ==0) {
            loading.close()
            this.elAlert("当日次数已用完", "提示");
          }
          if (res.remainingTimes > 0) {
            this.init(loading);
          }
        }else{
          loading.close()
          this.elAlert(res.msg, "提示");
        }
      }).catch(err => {

      })
    },
    wxshare(loading) {
      shareFriends().then(res => {
        if (res.result) {
          this.getInfo(loading);
        }else{
          loading.close()
          this.elAlert(res.msg, "提示");
        }
      }).catch(err => {

      })
    },
    sign(loading) {
      signIn().then(res => {
        if (res.result) {
          this.getInfo(loading);
        }else{
          loading.close()
          this.elAlert(res.msg, "提示");
        }
      }).catch(err => {

      })
    },
    init(loading) {
      initGame().then(res => {
        if (res.result) {
          this.uluToken = res.uluToken;
          if (res.levelType == 1) {
            for (var i = 0; i < res.animals.length; i++) {
              if (res.animals[i].alias == "brownHorse") {
                this.uuid = res.animals[i].uuid;
                break;
              }
            }
          }else{
              for (var i = 0; i < res.animals.length; i++) {
                if (res.animals[i].alias == "redHorse") {
                  this.uuid = res.animals[i].uuid;
                  break;
                }else{
                  this.uuid = '';
                }
              }
              if (this.uuid == '') {
                for (var i = 0; i < res.animals.length; i++) {
                  if (res.animals[i].alias == "blackHorse") {
                    this.uuid = res.animals[i].uuid;
                    break;
                  }else{
                    this.uuid = '';
                  }
                }
              }
          }
          this.play(this.uuid,this.uluToken,loading);
        }else{
          loading.close()
          this.elAlert(res.msg, "提示");
        }
      }).catch(err => {

      })
    },
    play(uuid, uluToken, loading) {
      playGame(uuid,uluToken).then(res => {
        let me = this
        if (res.result) {
          if (res.msg == 'success') {
            me.$message({
              message: "恭喜你，套中马匹！获得了"+res.reward+"枚好友币",
              type: 'success',
              duration: 2000
            });
          }else{
            me.$message({
              message: res.msg,
              type: 'error',
              duration: 2000
            });
          }
          me.uluToken = '';
          me.uuid = '';
          if (res.remainingTimes == 0) {
            me.elAlert("当日次数已用完", "提示");
            loading.close()
          }else{
            setTimeout(function(){
              me.init(loading)
            },5000)
          }
        }else{
          loading.close()
          this.elAlert(res.msg, "提示");
        }
      }).catch(err => {

      })
    }

  }

}
</script>

<style lang="scss" scoped>
// @import url("//unpkg.com/element-ui@2.2.0/lib/theme-chalk/index.css");

.catchHouse{
  color: #fff;
  p{
    margin:0 auto;
    text-align: center;
    margin-bottom: 21px;
    input{
      outline: 0;
      width: 294px;
      height: 40px;
      text-indent: 7px;
      border: 0;
      font-size: 12px;
      box-shadow: #c3c1bf 1px 0 1px, #c3c1bf 0 1px 1px, #c3c1bf -1px 0 1px, #c3c1bf 0 -1px 1px;
    }
    button{
      width: 140px;
      height: 40px;
      outline: 0;
      border: 0;
      font-size: 12px;
      box-shadow: #c3c1bf 1px 0 1px, #c3c1bf 0 1px 1px, #c3c1bf -1px 0 1px, #c3c1bf 0 -1px 1px;
    }
  }
  p:first-child{
    margin-top:75px;
  }
  @media (max-width: 991px) {
    height: 66vh;
    p{
      margin:0 auto;
      text-align: center;
      margin-bottom: 3vh;
      input{
        outline: 0;
        width: 60vw;
        height: 6vh;
        text-indent: 2vw;
        border: 0;
        font-size: .341333rem;
        box-shadow: #c3c1bf 1px 0 1px, #c3c1bf 0 1px 1px, #c3c1bf -1px 0 1px, #c3c1bf 0 -1px 1px;
      }
      button{
        width: 30vw;
        height: 5vh;
        outline: 0;
        border: 0;
        font-size: .341333rem;
        box-shadow: #c3c1bf 1px 0 1px, #c3c1bf 0 1px 1px, #c3c1bf -1px 0 1px, #c3c1bf 0 -1px 1px;
      }
    }
    p:first-child{
      margin-top: 11vh;
    }
  }
}
</style>
