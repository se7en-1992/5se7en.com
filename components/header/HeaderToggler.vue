<template>
  <div class="HeaderToggler">
    <div class="HeaderToggler__Button" @click="toggle">
      <div :class="{'icon menu': !visible, 'icon close': visible}"></div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    visible() { return this.$store.state.visibleHeader }
  },
  methods: {
    toggle() { this.$store.commit('toggle', 'visibleHeader') }
  }
}
</script>

<style lang="scss" scoped>
.HeaderToggler {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 991px) {
    display: none;
  }
  &__Button {
    display: flex;
    width: 40px;
    height: 20px;
    cursor: pointer;
    margin-top: 20px;
  }
}
</style>
