<template>
  <section class="btteDanceList">
    <ul>
      <li>
        个人及项目了解
      </li>
      <li>
        印象最深刻（自豪）的一个项目
      </li>
      <li>
        印象最差的一个项目
      </li>
      <li>
        wepack的complier和compalation的区别
      </li>
      <li>
        给你一个动画特别多的一个C端页面，你会怎么去实现
      </li>
      <li>
        层合成相关的问题（如何提升合成层、如何预防层爆炸）
      </li>
      <li>
        CSS硬件加速
      </li>
      <li>
        现代浏览器的线程架构
      </li>
      <li>
        settimeout 和 requestanimationframe的区别
      </li>
      <li>
        canvas的性能优化
      </li>
      <li>
        团队管理方面的问题
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
