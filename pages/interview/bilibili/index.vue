<template>
  <section class="btteDanceList">
    <ul>
      <li>
        <nuxt-link to="/interview/bilibili/one">
          哔哩哔哩一面(2022-04-20)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/bilibili/two">
          哔哩哔哩二面(2022-04-24)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/bilibili/three">
          哔哩哔哩三面(2022-04-28)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/bilibili/four">
          哔哩哔哩四面(2022-04-30)
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
