<template>
  <section class="btteDanceList">
    <ul>
      <li>
        <nuxt-link to="/interview/ali/one">
          蚂蚁金服一面(2022-04-20)
        </nuxt-link>
      </li>
      <li>
        一面面试官说过了暂未接到二面通知
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
