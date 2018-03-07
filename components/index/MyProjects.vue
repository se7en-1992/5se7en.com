<template>
  <div class="Projects">
    <h3 class="Projects__h3">部分项目介绍</h3>
    <div class="Projects__proLists">
      <template v-for="(project, index) in $store.state.projects.part">
        <a :href=" project.url " class="Projects__proLists__linkId" target="_blank">
          <dl class="Projects__proLists__linkId__dl">
            <dt><img src="~/static/product.jpg" alt="5se7en" title="5se7en"></dt>
            <dd>
              <p class="Projects__proLists__linkId__dl__title">{{ project.name }}</p>
              <p class="Projects__proLists__linkId__dl__detail">版本情况:&nbsp;<span class="Projects__proLists__linkId__dl__detail__date">{{ project.version }}</span>&nbsp; <br>运用技术:&nbsp;<span class="Projects__proLists__linkId__dl__detail__Apr">{{ project.technology }}</span></p>
            </dd>
          </dl>
        </a>
      </template>
    </div>
    <div class="Projects__proListsMobile">
        <mt-swipe :auto="4000" :speed="1000">
          <template v-for="(project, index) in $store.state.projects.part">
            <mt-swipe-item>
              <a :href=" project.url " class="Projects__proListsMobile__linkId">
                <dl class="Projects__proListsMobile__linkId__dl">
                  <dt><img src="~/static/product.jpg" alt="5se7en" title="5se7en"></dt>
                  <dd>
                    <p class="Projects__proListsMobile__linkId__dl__title">{{ project.name }}</p>
                    <p class="Projects__proListsMobile__linkId__dl__detail">版本情况:&nbsp;<span class="Projects__proListsMobile__linkId__dl__detail__date">{{ project.version }}</span>&nbsp; <br>运用技术:&nbsp;<span class="Projects__proListsMobile__linkId__dl__detail__Apr">{{ project.technology }}</span></p>
                  </dd>
                </dl>
              </a>
            </mt-swipe-item>
          </template>
        </mt-swipe>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.Projects{
  width: 1365px;
  margin: 0 auto;
  &__h3{
    color: #a40000;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
  }
  &__proLists{
    height: 375px;
    overflow: hidden;
    width: 1365px;
    margin: 0 auto;
    display: block;
    @media (max-width: 991px) {
      display: none;
    }
    &__linkId{
      &:hover &__dl{
        border: 2px solid #a40000;
      }
      &__dl{
        float: left;
        width: 263px;
        margin-left: 8px;
        &__title{
          text-align: center;
          font-size: 14px;
          color: #a40000;
          line-height: 30px;
        }
        &__detail{
          text-align: center;
          font-size: 14px;
          color: #a40000;
          line-height: 30px;
          &__date,&__Apr{
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    width: 100%;
    margin: 0 auto;
    &__h3{
      color: #a40000;
      font-size: 20px;
      line-height: 12vh;
      text-align: center;
      font-weight: bold;
    }
    &__proListsMobile{
      height: 56.2vh;
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
      display: block;
      @media (min-width: 992px) {
        display: none;
      }
      &__linkId{
        &__dl{
          float: left;
          width: 100%;
          dt{
            text-align: center;
          }
          &__title{
            text-align: center;
            font-size: 14px;
            color: #a40000;
            line-height: 4.5vh;
          }
          &__detail{
            text-align: center;
            font-size: 14px;
            color: #a40000;
            line-height: 4.5vh;
            &__date,&__Apr{
              font-weight: bold;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
