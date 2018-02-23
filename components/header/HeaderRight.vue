<template>
  <div class="headerRight">
    <ul class="headerRight__Ul">
      <li class="headerRight__Ul__Li">
        <a class="headerRight__Ul__Li__Btn" href="https://github.com/se7en-1992" target="_blank">{{ $store.state.headerRight.github }}</a>
      </li>
      <li class="headerRight__Ul__Li">
        <a class="headerRight__Ul__Li__Btn" href="//shang.qq.com/wpa/qunwpa?idkey=eda53cb638ce0db6c31bd17953c597573702c92d568a4223d13895767797a25a" target="_blank">{{ $store.state.headerRight.qq }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.headerRight{
  width: 50%;
  height: 130px;
  position: relative;
  float: right;
  @media (max-width: 991px) {
    display: none;
  }
  &__Ul{
    position: absolute;
    right: 200px;
    z-index: 11;
    &__Li{
      float: left;
      height: 130px;
      line-height: 140px;
      margin-right: 40px;
      &__Btn{
          display: inline-block;
          width: 85px;
          height: 30px;
          border-radius: 5px;
          background:#a40000;
          color: #fff;
          font-size: 18px;
          line-height: 30px;
          text-align: center;
          &:hover{
            background: #ccc;
          }
      }
    }
  }
}
</style>
