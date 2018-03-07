<template>
  <div class="Recommend">
    <div class="Recommend__advan">
      <div class="Recommend__left">
        <h3>推荐项目</h3>
        <ul>
          <li>nuxt/nuxt.js</li>
          <li>《Node.js 包教不包会》 by alsotang</li>
          <li>bailicangdu/vue2-elm</li>
          <li>全栈增长工程师指南</li>
        </ul>
      </div>
    </div>
    <div class="Recommend__disadvan">
      <div class="Recommend__left">
        <h3>个人文章</h3>
        <ul>
          <li>--</li>
          <li>--</li>
          <li>--</li>
          <li>--</li>
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
