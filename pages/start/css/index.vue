<template>
  <section class="cssList">
    <ul>
      <li>
        <nuxt-link to="/start/css/boxmodel">
          CSS盒模型
        </nuxt-link>
      </li>
      <li>
        <a href="https://segmentfault.com/a/1190000006108996" target="_blank">
          CSS实现垂重水平居中的方法
        </a>
      </li>
    </ul>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.cssList{
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
