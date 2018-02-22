<template>
  <div class="Projects">
    <h3 class="Projects__h3">部分项目介绍</h3>
    <div class="Projects__proLists">
      <a href="https://www.hybjf.com/" class="Projects__proLists__linkId" target="_blank">
        <dl class="Projects__proLists__linkId__dl">
          <dt><img src="~/static/product.jpg" alt="5se7en" title="5se7en"></dt>
          <dd>
            <p class="Projects__proLists__linkId__dl__title">好友邦金服官网</p>
            <p class="Projects__proLists__linkId__dl__detail">版本情况:&nbsp;<span class="Projects__proLists__linkId__dl__detail__date">已上线</span>&nbsp; <br>运用技术:&nbsp;<span class="Projects__proLists__linkId__dl__detail__Apr">Node+express</span></p>
          </dd>
        </dl>
      </a>
      <a href="https://www.hybjf.com/wx/" class="Projects__proLists__linkId" target="_blank">
        <dl class="Projects__proLists__linkId__dl">
          <dt><img src="~/static/product.jpg" alt="5se7en" title="5se7en"></dt>
          <dd>
            <p class="Projects__proLists__linkId__dl__title">好友邦金服微信端</p>
            <p class="Projects__proLists__linkId__dl__detail">版本情况:&nbsp;<span class="Projects__proLists__linkId__dl__detail__date">已上线</span>&nbsp; <br>运用技术:&nbsp;<span class="Projects__proLists__linkId__dl__detail__Apr">Node+express+h5</span></p>
          </dd>
        </dl>
      </a>
      <a href="http://www.5se7en.com/" class="Projects__proLists__linkId" target="_blank">
        <dl class="Projects__proLists__linkId__dl">
          <dt><img src="~/static/product.jpg" alt="5se7en" title="5se7en"></dt>
          <dd>
            <p class="Projects__proLists__linkId__dl__title">个人网站</p>
            <p class="Projects__proLists__linkId__dl__detail">版本情况:&nbsp;<span class="Projects__proLists__linkId__dl__detail__date">已上线</span>&nbsp; <br>运用技术:&nbsp;<span class="Projects__proLists__linkId__dl__detail__Apr">Node+express+nuxtjs</span></p>
          </dd>
        </dl>
      </a>
      <a href="https://www.hybjf.com/api/help/Chinese.html#page/1" class="Projects__proLists__linkId" target="_blank">
        <dl class="Projects__proLists__linkId__dl">
          <dt><img src="~/static/product.jpg" alt="5se7en" title="5se7en"></dt>
          <dd>
            <p class="Projects__proLists__linkId__dl__title">逼真的翻书页效果</p>
            <p class="Projects__proLists__linkId__dl__detail">版本情况:&nbsp;<span class="Projects__proLists__linkId__dl__detail__date">已上线</span>&nbsp; <br>运用技术:&nbsp;<span class="Projects__proLists__linkId__dl__detail__Apr">Canvas+h5</span></p>
          </dd>
        </dl>
      </a>
      <a href="https://www.hybjf.com/game/20170925Activity" class="Projects__proLists__linkId" target="_blank">
        <dl class="Projects__proLists__linkId__dl">
          <dt><img src="~/static/product.jpg" alt="5se7en" title="5se7en"></dt>
          <dd>
            <p class="Projects__proLists__linkId__dl__title">H5套马游戏</p>
            <p class="Projects__proLists__linkId__dl__detail">版本情况:&nbsp;<span class="Projects__proLists__linkId__dl__detail__date">已上线</span>&nbsp; <br>运用技术:&nbsp;<span class="Projects__proLists__linkId__dl__detail__Apr">Phaser+h5</span></p>
          </dd>
        </dl>
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.Projects{
  width: 1365px;
  margin: 0 auto;
  &__h3{
    color: #a40000;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
  }
  &__proLists{
    height: 375px;
    overflow: hidden;
    width: 1365px;
    margin: 0 auto;
    &__linkId{
      &:hover &__dl{
        border: 2px solid #a40000;
      }
      &__dl{
        float: left;
        width: 263px;
        margin-left: 8px;
        &__title{
          text-align: center;
          font-size: 14px;
          color: #a40000;
          line-height: 30px;
        }
        &__detail{
          text-align: center;
          font-size: 14px;
          color: #a40000;
          line-height: 30px;
          &__date,&__Apr{
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
