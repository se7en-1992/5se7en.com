<template>
  <div class="GoTop">
    <p class="GoTop__topArrow"><img src="~static/go_top.png" @click="backTop(400,callBack)"></p>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  props: {
    durations: {
      type: Number,
      default: 400
    },
    callBack: {
      type: Function,
      default: () => {
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', throttle(() => {}, 100))
    })
  },
  methods: {
    backTop(durations,  callback = undefined) {
      const doc = document.documentElement
      const scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      for (var i = 60; i >= 0; i--) {
        setTimeout((i => {
          return () => {
            doc.scrollTop = scrollTop * i / 60
            if (i === 0 && typeof callback === 'function') {
              callback()
            }
          }
        })(i), durations * (1 - i / 60))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .GoTop{
    margin-bottom: 20px;
    @media (max-width: 991px)
    {
      display:none;
    }
    &__topArrow{
      text-align: center;
      margin-bottom: 20px;
      img{
        cursor: pointer;
      }
    }
  }
</style>
