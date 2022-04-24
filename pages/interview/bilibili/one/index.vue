<template>
  <section class="btteDanceList">
    <ul>
      <li>
        个人及项目了解
      </li>
      <li>
        说说你的管理经验
      </li>
      <li>
        谈谈你对BFC布局的理解
      </li>
      <li>
        性能优化做过哪些
      </li>
      <li>
        Flutter和传统页面开发有什么区别
      </li>
      <li>
        怎么设计大数据加载和用户体验的问题
      </li>
      <li>
        有了解过webassembly吗，直接说没有
      </li>
      <li>
        合并重绘问题
      </li>
      <li>
        浏览器层压缩和层爆炸
      </li>
      <li>
        Vue3.0了解多少和2.0有什么区别
      </li>
      <li>
        Object.defineProperty 与 Proxy 实现的数据响应区别
      </li>
      <li>
        CommonJs/AMD/UMD/ES6模块区别
      </li>
      <li>
        其他问题记不清了，聊了1h20min，一面没考笔试
      </li>
    </ul>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.btteDanceList{
  padding: 50px;
  @media (max-width: 991px) {
    padding-left: 0;
    padding-right: 0;
  }
  ul{
    li{
    width: 600px;
    margin: 0 auto;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    @media (max-width: 991px) {
      width: 100%;
      font-size: 14px;
    }
    }
  }
}
</style>
