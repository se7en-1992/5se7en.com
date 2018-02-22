<template>
  <div class="Footer">
    <go-top/>
    <foot-nav/>
    <partner-ships/>
  </div>
</template>

<script>
import GoTop from '~/components/footer/GoTop.vue'
import FootNav from '~/components/footer/FootNav.vue'
import PartnerShips from '~/components/footer/PartnerShips.vue'


export default {
  components: {
    GoTop,
    FootNav,
    PartnerShips
  }
}
</script>

<style lang="scss" scoped>
.Footer{
  margin-top: 20px;
}
</style>
