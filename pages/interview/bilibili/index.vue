<template>
  <section class="btteDanceList">
    <ul>
      <li>
        <nuxt-link to="/interview/bilibili/one">
          哔哩哔哩一面(2022-04-20)
        </nuxt-link>
      </li>
      <li>
        哔哩哔哩二面(2022-04-24)
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
