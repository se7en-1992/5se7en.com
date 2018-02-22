<template>
  <section>
    <my-banner/>
    <my-content/>
    <my-projects/>
    <my-openource/>
    <my-recommend/>
    <my-skills/>
  </section>
</template>

<script>
import MyBanner from '~/components/index/MyBanner.vue'
import MyContent from '~/components/index/MyContent.vue'
import MyProjects from '~/components/index/MyProjects.vue'
import MyOpenource from '~/components/index/MyOpenource.vue'
import MyRecommend from '~/components/index/MyRecommend.vue'
import MySkills from '~/components/index/MySkills.vue'

export default {
  components: {
    MyBanner,
    MyContent,
    MyProjects,
    MyOpenource,
    MyRecommend,
    MySkills
  }
}
</script>

<style lang="scss" scoped>

</style>
