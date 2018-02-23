<template>
  <div class="ContentOne">
    <div class="ContentOne__github ContentOne__div">
      <dl class="ContentOne__github__dl">
        <dt class="ContentOne__github__dl__dt">{{ $store.state.contentOne.github }}</dt>
        <dd><a href="https://github.com/se7en-1992" target="_blank"><img src="~/static/github.jpg" style="width: 90px;"></a></dd>
      </dl>
    </div>
    <div class="ContentOne__like ContentOne__div">
      <a href="javascript:void(0);" id="like" class="ContentOne__like__Abtn">{{ $store.state.contentOne.likes }}</a><span class="ContentOne__like__Spanbtn">+1</span>
    </div>
    <div class="ContentOne__views ContentOne__div">
      <dl>
        <dt class="ContentOne__views__dt">网站总访问量</dt>
        <dd class="ContentOne__views__dd"><span class="totalInvest">{{ $store.state.contentOne.views }}</span></dd>
      </dl>
    </div>
  </div>
</template>

<script>



</script>

<style lang="scss" scoped>
.ContentOne{
  margin: 20px 0px;
  height: 117px;
  overflow: hidden;
  &__div{
    width: 33%;
    float: left;
    height: 117px;
  }
  &__github{
    text-align: center;
    line-height: 41px;
    border-right: 4px solid #a40000;
    &__dl{
      &__dt{
        font-size: 30px;
        font-weight: bold;
        color: #a40000;
      }
    }
  }
  &__like{
    text-align: center;
    border-right: 4px solid #a40000;
    position: relative;
    &__Abtn{
      display: inline-block;
      border: 0;
      background: url(~/static/like.png) no-repeat;
      width: 117px;
      height: 117px;
      color: #fff;
      line-height: 180px;
      outline: 0;
      font-family: cursive;
      cursor: pointer;
    }
    &__Spanbtn{
      position: absolute;
      top: 80px;
      left: 52%;
      color: #fff;
      z-index: -1;
    }
  }
  &__views{
    text-align: center;
    line-height: 55px;
    &__dt,&__dd{
      font-size: 30px;
      font-weight: bold;
      color: #a40000;
    }
  }

}
</style>
