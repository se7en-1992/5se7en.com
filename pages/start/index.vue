<template>
  <section class="startList">
    <ul>
      <li>
        <nuxt-link to="/start/css">
          css系列
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/start/js">
          javascript系列
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/start/es6">
          ES6系列
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.startList{
  padding: 50px;
  @media (max-width: 991px) {
    padding-left: 0;
    padding-right: 0;
  }
  ul{
    li{
    width: 600px;
    margin: 0 auto;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    @media (max-width: 991px) {
      width: 100%;
      font-size: 14px;
    }
    }
  }
}
</style>
