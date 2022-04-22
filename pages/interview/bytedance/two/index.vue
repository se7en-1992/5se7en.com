<template>
  <section class="btteDanceList">
    <ul>
      <li>
          Webpack的构建流程以及loaders和plugins在哪些流程的使用
      </li>
       <li>
          Webpack的生命周期及自定义plugins
      </li>
      <li>
          浏览器层合成
      </li>
      <li>
          如何形成合成层
      </li>
      <li>
          层压缩及层爆炸的理解以及怎么预防层爆炸
      </li>
      <li>
          web攻击有哪些以及怎么做web安全
      </li>
      <li>
          同构SSR的原理
      </li>
      <li>
          事件循环
      </li>
      <li>
          柯里化函数sum(1)(2)(3)(4)(笔试)
      </li>
      <li>
          手写实现JSON.stringfy(笔试)
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
