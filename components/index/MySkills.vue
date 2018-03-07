<template>
  <div class="Skills">
    <h3> My Skills</h3>
    <div class="Skills__rewDetail">
      <dl>
        <dt><a href="https://nodejs.org/en/"><img src="~static/nodejs.svg" style="margin-top: 30px;"></a></dt>
      </dl>
      <dl>
        <dt><a href="https://nuxtjs.org/" target="_blank"><nuxt-logo/></a></dt>
      </dl>
      <dl>
        <dt><a href="https://vuejs.org/" target="_blank"><img src="~static/vue.png"></a></dt>
      </dl>
      <dl>
        <dt><a href="http://www.w3schools.com/html/html5_intro.asp"><img src="~static/HTML5.png" width="265"></a></dt>
      </dl>
    </div>
    <div class="Skills__rewDetailMobile">
      <mt-swipe :auto="4000" :speed="1000">
        <mt-swipe-item>
          <dl>
            <dt><a href="https://nodejs.org/en/"><img src="~static/nodejs.svg"></a></dt>
          </dl>
        </mt-swipe-item>
        <mt-swipe-item>
          <dl>
            <dt><a href="https://nuxtjs.org/"><nuxt-logo/></a></dt>
          </dl>
        </mt-swipe-item>
        <mt-swipe-item>
          <dl>
            <dt><a href="https://vuejs.org/"><img src="~static/vue.png"></a></dt>
          </dl>
        </mt-swipe-item>
        <mt-swipe-item>
          <dl>
            <dt><a href="http://www.w3schools.com/html/html5_intro.asp"><img src="~static/HTML5.png"></a></dt>
          </dl>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import NuxtLogo from '~/components/index/VueToNuxtLogo.vue'

export default {
  components: {
    NuxtLogo
  }
}
</script>

<style lang="scss" scoped>
.Skills{
  margin: 0 auto;
  width:1365px;
  margin-top: 20px;
  height: 457px;
  width: 1365px;
  background: url(~static/glory.png) no-repeat #e7e6e6;
  position: relative;
  h3{
    color: #a40000;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
  }
  &__rewDetail{
    overflow: hidden;
    margin-top: 20px;
    display: block;
    @media (max-width: 991px) {
      display: none;
    }
    dl{
      width: 269px;
      height: 269px;
      float: left;
      margin-left: 60px;
      text-align: center;
      dt{
        width: 265px;
        height: 265px;
        border:2px solid #a40000;
        a{
          img{
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    margin: 0 auto;
    width:100%;
    margin-top: 20px;
    height: 58vh;
    background: url(~static/glory.png) no-repeat #e7e6e6;
    background-size: 100% 100%;
    position: static;
    h3{
      color: #a40000;
      font-size: 20px;
      line-height: 12vh;
      text-align: center;
      font-weight: bold;
    }
    &__rewDetailMobile{
      overflow: hidden;
      margin-top: 0;
      display: block;
      height: 45vh;
      @media (min-width: 992px) {
        display: none;
      }
      dl{
        width: 70vw;
        height: 70vw;
        float: none;
        margin-left: 15vw;
        text-align: center;
        dt{
          width: 70vw;
          height: 70vw;
          border:2px solid #a40000;
          a{
            img{
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
