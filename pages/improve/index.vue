<template>
  <section class="improveList">
    <ul>
      <li>
        <nuxt-link to="/improve/proto">
          javascript的原型及原型链
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/improve/closure">
          javascript的作用域链和闭包
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/improve/call">
          javascript的call,apply和bind
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.improveList{
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
