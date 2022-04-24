<template>
  <section class="projectList">
    <ul>
      <li>
        <nuxt-link to="/interview/bytedance">
          字节跳动面经
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/ali">
          蚂蚁金服面经
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/bilibili">
          哔哩哔哩面经
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interview/pingan">
          平安银行面经
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.projectList{
  padding: 50px;
  @media (max-width: 991px) {
    padding-left: 0;
    padding-right: 0;
  }
  ul{
    li{
    width: 800px;
    margin: 0 auto;
    text-align: center;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #ccc;
    @media (max-width: 991px) {
      width: 100%;
      font-size: 14px;
    }
    }
  }
}
</style>
