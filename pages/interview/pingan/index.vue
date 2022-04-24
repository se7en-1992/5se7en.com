<template>
  <section class="btteDanceList">
    <ul>
      <li>
        初筛-写一个交易模块的列表、下单、历史订单的需求，打包整个项目发送(2022-04-11)
      </li>
      <li>
        平安集团的测评-IQ测评、个性测评、胜任力测评(2022-04-17)
      </li>
      <li>
        <nuxt-link to="/interview/pingan/one">
          平安银行一面(2022-04-18)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/pingan/one">
          平安银行二面(2022-04-19)
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/pingan/one">
          平安银行三面(2022-04-23)
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
