<template>
  <div class="Content">
    <!-- <content-one/> -->
    <content-two/>
  </div>
</template>

<script>
import ContentOne from '~/components/index/ContentOne.vue'
import ContentTwo from '~/components/index/ContentTwo.vue'

export default {
  components: {
    ContentOne,
    ContentTwo
  }
}
</script>

<style lang="scss" scoped>
.Content {

}
</style>
