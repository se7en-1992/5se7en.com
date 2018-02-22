<template>
  <div class="ContentTwo">
    <div class="ContentTwo__div">
      <div class="ContentTwo__div__pic">
        <dl class="ContentTwo__div__pic__dl">
          <dt><img src="~/static/se7en.jpg" alt="se7en"></dt>
          <dd class="ContentTwo__div__pic__dl__dd">Front end developer, <br>
            Mr Se7en Wang
          </dd>
        </dl>
      </div>
      <div class="ContentTwo__div__introduction">
        <h3 class="ContentTwo__div__introduction__h3">自我描述</h3>
        <p style="margin-top: 55px;" class="ContentTwo__div__introduction__p">我是一名前端开发的求知者，渴求学习更多的前端技能充实自己，不断完善提高自己，学习能力较强，逻辑能力较好。</p>
        <p class="ContentTwo__div__introduction__p">团队合作能力较好，有梦想有追求的前端工程师，对新鲜事物有很强的好奇心，学习能力较强，性格乐观、内敛，平时</p>
        <p class="ContentTwo__div__introduction__p">喜欢锻炼、看电影、打一些团队配合竞技游戏，注重效率，对技术有热情。</p>
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
