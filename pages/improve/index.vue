<template>
  <section class="improveList">
    <ul>
      <li>
        <nuxt-link to="/improve/http">
          http系列
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/improve/browser">
          浏览器系列
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/improve/nodejs">
          nodejs系列
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/improve/other">
          其他
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {

}
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
