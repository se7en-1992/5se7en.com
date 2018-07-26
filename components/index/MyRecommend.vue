<template>
  <div class="Recommend">
    <div class="Recommend__advan">
      <div class="Recommend__left">
        <h3>推荐项目</h3>
        <ul>
          <li>
            <a class="Recommend__left__link" href="https://github.com/nswbmw/N-blog" target="_blank">
              N-blog
            </a>
          </li>
          <li>
            <a class="Recommend__left__link" href="https://github.com/nuxt/nuxt.js" target="_blank">
              nuxt/nuxt.js
            </a>
          </li>
          <li>
            <a class="Recommend__left__link" href="https://github.com/bailicangdu/vue2-elm" target="_blank">
              vue2-elm
            </a>
          </li>
          <li>
            <a class="Recommend__left__link" href="https://github.com/ruanyf/jstraining" target="_blank">
              全栈工程师培训材料
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="Recommend__disadvan">
      <div class="Recommend__left">
        <h3>个人文章</h3>
        <ul>
          <li>
            <nuxt-link class="Recommend__left__link" to="/improve/proto">
              javascript的继承及原型链
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="Recommend__left__link" to="/improve/closure">
              javascript的作用域链和闭包
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="Recommend__left__link" to="/share/https">
              网站如何免费开通https协议？
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="Recommend__left__link" to="/share/cache">
              前端缓存机制
            </nuxt-link>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.Recommend{
  margin: 0 auto;
  overflow: hidden;
  margin-top: 50px;
  width:1365px;
  &__advan{
    float: left;
    width: 664px;
    height: 417px;
    background: url(~/static/tiaowen-left.jpg) no-repeat;
  }
  &__left{
    float: left;
    margin-top: 50px;
    margin-left: 60px;
    h3{
      color: #a40000;
      font-size: 30px;
      line-height: 80px;
      font-weight: bold;
    }
    ul{
      li{
        color: #a40000;
        font-size: 18px;
        line-height: 50px;
        margin-left: 150px;
      }
    }
    &__link {
      color: #a40000;
    }
  }
  &__disadvan{
    float: right;
    width: 664px;
    height: 417px;
    background: url(~/static/tiaowen-right.jpg) no-repeat;
    ul{
      li{
        margin-left: 150px;
      }
    }
  }
  @media (max-width: 991px) {
    margin: 0 auto;
    overflow: hidden;
    margin-top: 7.5vh;
    width:100%;
    &__advan{
      float: none;
      width: 100%;
      height: 46.5vh;
      background: url(~/static/tiaowen-left.jpg) no-repeat;
      background-size: 100% 100%;
      padding: 2vh 10vw;
    }
    &__left{
      float: none;
      margin-top: 0;
      margin-left: 0;
      h3{
        color: #a40000;
        font-size: 20px;
        line-height: 12vh;
        font-weight: bold;
      }
      ul{
        li{
          color: #a40000;
          font-size: 14px;
          line-height: 7.5vh;
          margin-left: 0px;
        }
      }
    }
    &__disadvan{
      padding: 2vh 10vw;
      margin-top: 7.5vh;
      float: none;
      width: 100%;
      height: 46.5vh;
      background: url(~/static/tiaowen-right.jpg) no-repeat;
      background-size: 100% 100%;
      ul{
        li{
          margin-left: 0px;
        }
      }
    }
  }
}
</style>
