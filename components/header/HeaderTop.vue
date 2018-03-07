<template>
  <header class="HeaderTop">
    <my-header/>
    <header-nav/>
    <nav-sheet/>
  </header>
</template>

<script>
import MyHeader from '~/components/header/Header.vue'
import HeaderNav from '~/components/header/HeaderNav.vue'
import navSheet from '~/components/header/Navsheet.vue'

export default {

  components: {
    MyHeader,
    HeaderNav,
    navSheet
  }
}
</script>

<style lang="scss" scoped>
.HeaderTop {
  height: 130px;
  @media (max-width: 991px) {
    height: 11vh;
  }
}
</style>
