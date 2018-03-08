<template>
  <nav class="Navsheet" :class="{'Navsheet--hidden': visible}" @touchmove.prevent>
    <div class="Navsheet__Box">
      <ul class="Navsheet__Box__Menu">
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.house.to">
            {{ $store.state.navList.house.text }}
          </nuxt-link>
        </li>
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.project.to">
            {{ $store.state.navList.project.text }}
          </nuxt-link>
        </li>
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.share.to">
            {{ $store.state.navList.share.text }}
          </nuxt-link>
        </li>
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.start.to">
            {{ $store.state.navList.start.text }}
          </nuxt-link>
        </li>
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.improve.to">
            {{ $store.state.navList.improve.text }}
          </nuxt-link>
        </li>
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.tools.to">
            {{ $store.state.navList.tools.text }}
          </nuxt-link>
        </li>
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.frame.to">
            {{ $store.state.navList.frame.text }}
          </nuxt-link>
        </li>
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.html5.to">
            {{ $store.state.navList.html5.text }}
          </nuxt-link>
        </li>
        <li class="Navsheet__Box__Menu__Item" @click="toggle">
          <nuxt-link class="Navsheet__Box__Menu__Item__Link" :to="$store.state.navList.contact.to">
            {{ $store.state.navList.contact.text }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
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
.Navsheet {
  position: fixed;
  left: 0;
  top: 11vh;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index:7777;
  display:none;
  @media (min-width: 992px)
  {
    display:none;
  }
  &--hidden {
    display: block;
    @media (min-width: 992px) {
      display: none;
    }
  }
  &__Box{
    position: fixed;
    z-index:7778;
    background: #e0e0e0;
    width: 100%;
    text-align: center;
    top: 11vh;
    left: 50%;
    -webkit-transform: translate3d(-50%,0,0);
    transform: translate3d(-50%,0,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: -webkit-transform .3s ease-out;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    &__Menu{
      &__Item{
        display: block;
        width: 100%;
        height: 6.75vh;
        line-height: 6.75vh;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        &__Link{
          color: #333;
          font-size: 18px;
          display: block;
          width: 100%;
          height: 6.75vh;
          text-align: center;
        }
      }
    }
  }
}
</style>
