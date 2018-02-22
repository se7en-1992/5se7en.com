<template>
  <nav class="Nav" :class="{'Nav--hidden': !visible}">
    <div class="Nav__Box">
      <span class="Nav__Box__span"></span>
      <ul class="Nav__Box__Menu">
        <li class="Nav__Box__Menu__Item">
          <nuxt-link class="Nav__Box__Menu__Item__Link" :to="$store.state.navList.project.to">
            {{ $store.state.navList.project.text }}
          </nuxt-link>
        </li>
        <li class="Nav__Box__Menu__Item">
          <nuxt-link class="Nav__Box__Menu__Item__Link" :to="$store.state.navList.share.to">
            {{ $store.state.navList.share.text }}
          </nuxt-link>
        </li>
        <li class="Nav__Box__Menu__Item">
          <nuxt-link class="Nav__Box__Menu__Item__Link" :to="$store.state.navList.start.to">
            {{ $store.state.navList.start.text }}
          </nuxt-link>
        </li>
        <li class="Nav__Box__Menu__Item">
          <nuxt-link class="Nav__Box__Menu__Item__Link" :to="$store.state.navList.improve.to">
            {{ $store.state.navList.improve.text }}
          </nuxt-link>
        </li>
        <li class="Nav__Box__Menu__Item">
          <nuxt-link class="Nav__Box__Menu__Item__Link" :to="$store.state.navList.tools.to">
            {{ $store.state.navList.tools.text }}
          </nuxt-link>
        </li>
        <li class="Nav__Box__Menu__Item">
          <nuxt-link class="Nav__Box__Menu__Item__Link" :to="$store.state.navList.frame.to">
            {{ $store.state.navList.frame.text }}
          </nuxt-link>
        </li>
        <li class="Nav__Box__Menu__Item">
          <nuxt-link class="Nav__Box__Menu__Item__Link" :to="$store.state.navList.html5.to">
            {{ $store.state.navList.html5.text }}
          </nuxt-link>
        </li>
        <li class="Nav__Box__Menu__Item">
          <nuxt-link class="Nav__Box__Menu__Item__Link" :to="$store.state.navList.contact.to">
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
  }
}
</script>

<style lang="scss" scoped>
  .Nav{
    position: relative;
    @media (max-width: 991px)
    {
      display:none;
    }
    &--hidden {
      display: none;
      @media (min-width: 991px) {
        display: flex;
      }
    }
    &__Box{
      height: 45px;
      position: absolute;
      right: 0;
      top: -23px;
      z-index: 1;
      &__span{
        float: left;
        width: 0;
        height: 0;
        border-top: 23px solid transparent;
        border-right: 33px solid #a40000;
        border-bottom: 23px solid transparent;
      }
      &__Menu{
        height: 45px;
        background:#a40000;
        margin-left: 33px;
        box-shadow: -1px 4px 2px #666;
        &__Item{
          float: left;
          height: 45px;
          line-height: 45px;
          &:last-child{
            margin-right: 170px;
          }
          &__Link{
            color: #fff;
            font-size: 14px;
            display: inline-block;
            width: 100px;
            height: 45px;
            text-align: center;
            &:hover{
              font-weight: bold;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
