<template>
  <div class="ContentTwo">
    <div class="ContentTwo__div">
      <!-- <div class="ContentTwo__div__pic">
        <dl class="ContentTwo__div__pic__dl">
          <dd class="ContentTwo__div__pic__dl__dd">{{ $store.state.contentTwo.position }}<br>
            {{ $store.state.contentTwo.name }}
          </dd>
        </dl>
      </div> -->
      <div class="ContentTwo__div__introduction">
        <h3 class="ContentTwo__div__introduction__h3">{{ $store.state.contentTwo.description.self }}</h3>
        <p class="ContentTwo__div__introduction__p">{{ $store.state.contentTwo.description.pOne }}</p>
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
      display: flex;
      height: 406px;
      align-items: center;
      justify-content: center;
      padding: 0 50px;
      flex-direction: column;
      &__h3{
        color: #fff;
        width: 100%;
        text-align: left;
        font-size: 30px;
        font-weight: bold;
      }
      &__p{
        width: 100%;
        text-align: left;
        color: #fff;
        font-size: 18px;
        line-height: 36px;
        text-indent: 36px;
      }
      p:nth-of-type(1){
        margin-top: 50px;
      }
    }
  }
  @media (max-width: 991px) {
    // height: 113.6vh;
    background: none;
    &__div{
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      &__pic{
        background: url(~/static/3.png) no-repeat right center #a40000;
        background-size: 100% 100%;
        width: 100%;
        text-align: center;
        overflow: hidden;
        float: none;
        height: 60.8vh;
        &__dl{
          margin-top: 9.7vh;
          &__dd{
            font-size: 18px;
            color: #fff;
            line-height: 5.4vh;
          }
        }
      }
      &__introduction{
        background: url(~/static/3.png) no-repeat right center #a40000;
        background-size: 100% 100%;
        float: none;
        height: 52.8vh;
        padding: 2vh 5vw;
        &__h3{
          color: #fff;
          font-size: 20px;
          margin-top: 0px;
          font-weight: bold;
        }
        &__p{
          color: #fff;
          font-size: 14px;
          line-height: 5.4vh;
        }
        p:nth-of-type(1){
          margin-top: 3vh;
        }
      }
    }
  }
}
</style>
