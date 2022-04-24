<template>
  <section class="btteDanceList">
    <ul>
      <li>
        个人及项目了解
      </li>
      <li>
        谈谈印象最深刻的一个项目
      </li>
      <li>
        用户输入url至页面呈现的过程
      </li>
      <li>
        transform对回流重绘的影响
      </li>
      <li>
        Vue和React Dom Diff的过程
      </li>
      <li>
        前面内容大概聊了1h
      </li>
      <li>
        算法：二分查找+计数相关，实现 `calc` 方法(笔试)
      </li>
      <li>
        工具库：实现一个url参数获取`parseQueryString`方法(笔试)
      </li>
      <li>
        算法：硬币足够情况下的硬币面额组合问题(笔试)
      </li>
      <li>
        笔试题30min
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
