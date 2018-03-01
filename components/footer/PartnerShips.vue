<template>
  <div class="PartnerShips">
    <h3>特别鸣谢</h3>
    <partner-pic/>
    <footer-pic/>
    <footer-bottom/>
  </div>
</template>

<script>
import PartnerPic from '~/components/footer/PartnerPic.vue'
import FooterPic from '~/components/footer/FooterPic.vue'
import FooterBottom from '~/components/footer/FooterBottom.vue'

export default {
  components: {
    PartnerPic,
    FooterPic,
    FooterBottom
  }
}
</script>

<style lang="scss" scoped>
.PartnerShips{
  margin-top: 40px;
  h3{
    color: #a40000;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    @media (max-width: 991px)
    {
      display:none;
    }
  }
}
</style>
