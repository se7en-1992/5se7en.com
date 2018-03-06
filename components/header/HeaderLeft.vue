<template>
  <div class="HeaderLeft">
    <nuxt-link class="HeaderLeft__Logo" to="/">
      <img class="HeaderLeft__Logo__Img" src="~static/logo.png" alt="5se7en" />
      <h1 class="HeaderLeft__Logo__Text">{{ $store.state.websites }}</h1>
    </nuxt-link>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.HeaderLeft{
  height: 130px;
  line-height: 43px;
  float: left;
  @media (max-width: 991px) {
    height: 11vh;
  }
  &__Logo {
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      height: 11vh;
    }
    &__Img{
      @media (max-width: 991px) {
        width:200px;
      }
    }
    &__Text {
      margin: 0;
      width: 0;
      overflow: hidden;
    }
  }
}
</style>
