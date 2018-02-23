<template>
  <div class="ContentTwo">
    <div class="ContentTwo__div">
      <div class="ContentTwo__div__pic">
        <dl class="ContentTwo__div__pic__dl">
          <dt><img src="~/static/se7en.jpg" alt="se7en"></dt>
          <dd class="ContentTwo__div__pic__dl__dd">{{ $store.state.contentTwo.position }}<br>
            {{ $store.state.contentTwo.name }}
          </dd>
        </dl>
      </div>
      <div class="ContentTwo__div__introduction">
        <h3 class="ContentTwo__div__introduction__h3">{{ $store.state.contentTwo.description.self }}</h3>
        <p style="margin-top: 55px;" class="ContentTwo__div__introduction__p">{{ $store.state.contentTwo.description.pOne }}</p>
        <p class="ContentTwo__div__introduction__p">{{ $store.state.contentTwo.description.pTwo }}</p>
        <p class="ContentTwo__div__introduction__p">{{ $store.state.contentTwo.description.pThree }}</p>
      </div>
    </div>
  </div>
</template>

<script>



</script>

<style lang="scss" scoped>
.ContentTwo{
  height: 406px;
  background: url(~/static/3.png) no-repeat right center #a40000;
  &__div{
    width: 1365px;
    margin: 0 auto;
    &__pic{
      width: 400px;
      text-align: center;
      overflow: hidden;
      float: left;
      height: 406px;
      &__dl{
        margin-top: 65px;
        &__dd{
          font-size: 18px;
          color: #fff;
          line-height: 36px;
        }
      }
    }
    &__introduction{
      float: left;
      height: 406px;
      &__h3{
        color: #fff;
        font-size: 30px;
        margin-top: 110px;
        font-weight: bold;
      }
      &__p{
        color: #fff;
        font-size: 18px;
        line-height: 36px;
      }
    }
  }
}
</style>
