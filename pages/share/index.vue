<template>
  <section class="shareList">
    <my-Development/>
    <!-- <ul>
      <li>
        <nuxt-link class="" to="/share/https">
            网站如何免费开通https协议？
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="" to="/share/cache">
            前端缓存机制
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="" to="/share/vueTree">
           vue的递归组件
        </nuxt-link>
      </li>
    </ul> -->
  </section>
</template>

<script>
import MyDevelopment from '~/components/development/MyDevelopment.vue'

export default {
  components: {
    MyDevelopment
  }
}
</script>

<style lang="scss" scoped>
// .shareList{
//   padding: 50px;
//   @media (max-width: 991px) {
//     padding-left: 0;
//     padding-right: 0;
//   }
//   ul{
//     li{
//     width: 600px;
//     margin: 0 auto;
//     text-align: center;
//     height: 50px;
//     line-height: 50px;
//     border-bottom: 1px solid #ccc;
//     @media (max-width: 991px) {
//       width: 100%;
//       font-size: 14px;
//     }
//     }
//   }
// }
</style>
