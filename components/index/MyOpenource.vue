<template>
  <div class="Openource">
    <h3 class="Openource__h3">github开源项目</h3>
    <div class="Openource__service">
      <div class="Openource__service__div">
        <ul>
          <li style="margin-top:80px;">使用 NodeJS + Express + MongoDB +上线环境部署 搭建H5抽奖活动页面</li>
          <li>前端基础知识分享</li>
          <li>QRcode二维码生成</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.Openource{
  margin: 0 auto;
  margin-top: 60px;
  overflow: hidden;
  background: url(~/static/global.png) no-repeat #f7f7f7;
  width:1365px;
  &__h3{
    color: #a40000;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
  }
  &__service{
    width: 800px;
    margin:25px auto 0;
    overflow: hidden;
    &__div{
      width: 100%;
      float: left;
      background: #a40000;
      height: 287px;
      ul{
        li{
          color: #fff;
          font-size: 20px;
          margin-left: 70px;
          line-height: 36px;
          list-style-type: disc;
        }
        li:first-child{
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
