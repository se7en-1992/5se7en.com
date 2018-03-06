<template>
  <div class="Header">
    <header-left/>
    <header-toggler/>
    <header-right/>
  </div>
</template>

<script>
import HeaderLeft from '~/components/header/HeaderLeft.vue'
import HeaderToggler from '~/components/header/HeaderToggler.vue'
import HeaderRight from '~/components/header/HeaderRight.vue'

export default {
  components: {
    HeaderLeft,
    HeaderToggler,
    HeaderRight
  }
}
</script>

<style lang="scss" scoped>
.Header {
  height: 130px;
  @media (max-width: 991px) {
    height: 11vh;
  }
}
</style>
