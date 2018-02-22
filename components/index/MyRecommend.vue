<template>
  <div class="Recommend">
    <div class="Recommend__advan">
      <div class="Recommend__left">
        <h3>推荐项目</h3>
        <ul>
          <li style="margin-left: 150px;">nuxt/nuxt.js</li>
          <li style="margin-left: 150px;">《Node.js 包教不包会》 by alsotang</li>
          <li style="margin-left: 150px;">bailicangdu/vue2-elm</li>
          <li style="margin-left: 150px;">全栈增长工程师指南</li>
        </ul>
      </div>
    </div>
    <div class="Recommend__disadvan">
      <div class="Recommend__left">
        <h3>个人文章</h3>
        <ul>
          <li style="margin-left: 150px;">--</li>
          <li style="margin-left: 150px;">--</li>
          <li style="margin-left: 150px;">--</li>
          <li style="margin-left: 150px;">--</li>
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
      }
    }
  }
  &__disadvan{
    float: right;
    width: 664px;
    height: 417px;
    background: url(~/static/tiaowen-right.jpg) no-repeat;
  }
}
</style>
