<template>
  <div>
    <header-top/>
    <div :class="{'App--hidden': visible}">
      <nuxt/>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import HeaderTop from '~/components/header/HeaderTop.vue'
import MyFooter from '~/components/footer/Footer.vue'

export default {
  computed: {
    visible() { return this.$store.state.visibleHeader }
  },
  components: {
    HeaderTop,
    MyFooter
  }
}
</script>

<style>
.App {
  &--hidden {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
}
</style>
