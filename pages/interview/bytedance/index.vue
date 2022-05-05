<template>
  <section class="btteDanceList">
    <ul>
      <li>
        <nuxt-link to="/interview/bytedance/one">
          字节跳动一面(2022-04-12)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/bytedance/two">
          字节跳动二面(2022-04-18)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/bytedance/three">
          字节跳动三面(2022-04-22)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/bytedance/four">
          字节跳动四面(2022-04-25)
        </nuxt-link>
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
