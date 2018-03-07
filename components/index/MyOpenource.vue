<template>
  <div class="Openource">
    <h3 class="Openource__h3">github开源项目</h3>
    <div class="Openource__service">
      <div class="Openource__service__div">
        <ul>
          <li v-for="(repositorie, index) in $store.state.openource.repositories">
            <a :href=" repositorie.link ">{{ repositorie.description }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.Openource{
  margin: 0 auto;
  margin-top: 60px;
  overflow: hidden;
  background: url(~/static/global.png) no-repeat #f7f7f7;
  width:1365px;
  &__h3{
    color: #a40000;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
  }
  &__service{
    width: 800px;
    margin:25px auto 0;
    overflow: hidden;
    &__div{
      width: 100%;
      float: left;
      background: #a40000;
      height: 287px;
      ul{
        li{
          color: #fff;
          font-size: 20px;
          margin-left: 70px;
          line-height: 36px;
          list-style-type: disc;
          a{
            color: #fff;
          }
        }
        li:first-child{
          margin-top: 80px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    margin: 0 auto;
    margin-top: 0vh;
    overflow: hidden;
    background: none;
    width:100%;
    &__h3{
      color: #a40000;
      font-size: 20px;
      line-height: 12vh;
      text-align: center;
      font-weight: bold;
    }
    &__service{
      width: 100%;
      margin: 0;
      overflow: hidden;
      &__div{
        width: 100%;
        float: left;
        background: #a40000;
        height: 31vh;
        ul{
          padding: 2vh 10vw;
          li{
            color: #fff;
            font-size: 14px;
            margin-left: 0vh;
            line-height: 5.4vh;
            list-style-type: disc;
            a{
              color: #fff;
            }
          }
          li:first-child{
            margin-top: 0vh;
          }
        }
      }
    }
  }
}
</style>
