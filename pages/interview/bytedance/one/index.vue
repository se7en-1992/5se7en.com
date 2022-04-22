<template>
  <section class="btteDanceList">
    <ul>
      <li>
        用户输入一个url到页面呈现的过程
      </li>
      <li>
        http1.0/http1.1/http2.0的区别
      </li>
      <li>
        https如何保证安全
      </li>
      <li>
        性能优化做过哪些
      </li>
      <li>
        浏览器的渲染流程
      </li>
      <li>
        Vue的实例化过程
      </li>
      <li>
        Vue的Diff算法和React Diff算法的区别
      </li>
      <li>
        事件循环
      </li>
      <li>
        手写promise.all(笔试)
      </li>
      <li>
        数组扁平化实现(笔试)
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
