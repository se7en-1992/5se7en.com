<template>
  <section class="projectList">
    <ul>
       <li>
        <a href="https://5se7en.com/" target="_blank">
            个人网站（技术栈nuxt.js+express+vue全家桶）
        </a>
      </li>
      <li style="line-height: 25px;">
        <a href="http://kdgy.sunjianhua.xyz/stagingindex" target="_blank">
            蝌蚪共有项目（技术栈nuxt.js+express+vue全家桶）
        </a>
        <p>账号:admin 密码:admin888由于项目未上线，搭建在私人服务器上一些后台接口返回会有问题，导致页面不是十分美观</p>
      </li>
      <li>
        <a href="https://m.hybjf.com/list/aviation/11/1" target="_blank">
            好友邦金服m站（技术栈Node+express）
        </a>
      </li>
      <li>
        <a href="https://www.hyblife.com/mobile/index.html#/activity" target="_blank">
            好友邦生活微信端（技术栈vue全家桶）
        </a>
      </li>
      <li>
        <a href="https://www.hybjf.com/wx/" target="_blank">
            好友邦金服微信端（技术栈Node+express）
        </a>
      </li>
      <li>
        <a href="https://www.hybjf.com/crowdFunding/definition" target="_blank">
            逼真的翻书页效果（技术栈Canvas+h5）
        </a>
      </li>
      <li>
        <a href="https://www.hybjf.com/game/20170925Activity" target="_blank">
            H5套马游戏（技术栈Phaser+h5）
        </a>
      </li>
      <li>
        <a href="http://calsfund.com/cn#firstPage" target="_blank">
            cals官网中文版（技术栈bootstrap 响应式）
        </a>
      </li>
      <li>
        <a href="http://calsfund.com/en#firstPage" target="_blank">
            cals官网英文版（技术栈bootstrap 响应式）
        </a>
      </li>
      <li>
        <a href="https://www.hybjf.com/" target="_blank">
            好友邦金服官网（技术栈Node+express）
        </a>
      </li>
      <li>
        .....
      </li>
    </ul>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.projectList{
  padding: 50px;
  @media (max-width: 991px) {
    padding-left: 0;
    padding-right: 0;
  }
  ul{
    li{
    width: 800px;
    margin: 0 auto;
    text-align: center;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #ccc;
    @media (max-width: 991px) {
      width: 100%;
      font-size: 14px;
    }
    }
  }
}
</style>
