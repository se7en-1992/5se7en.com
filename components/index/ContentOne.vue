<template>
  <div class="ContentOne">
    <div class="ContentOne__github ContentOne__div">
      <dl class="ContentOne__github__dl">
        <dt class="ContentOne__github__dl__dt">{{ $store.state.contentOne.github }}</dt>
        <dd><a href="https://github.com/se7en-1992" target="_blank"><img src="~/static/github.jpg" style="width: 90px;"></a></dd>
      </dl>
    </div>
    <div class="ContentOne__like ContentOne__div">
      <a @click="toggle" href="javascript:void(0);" id="like" class="ContentOne__like__Abtn" :class="{'ContentOne__like__AbtnBefore': !visible, 'ContentOne__like__AbtnAfter': visible}">{{ $store.state.contentOne.likes }}</a><span class="ContentOne__like__Spanbtn" :class="{'ContentOne__like__SpanbtnShow': visible}">+1</span>
    </div>
    <div class="ContentOne__views ContentOne__div">
      <dl>
        <dt class="ContentOne__views__dt">网站总访问量</dt>
        <dd class="ContentOne__views__dd"><span class="totalInvest">{{ $store.state.contentOne.views }}</span></dd>
      </dl>
    </div>
    <div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>谢谢您的支持，您今天已经点过赞啦～</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {
    visible() { return this.$store.state.visibleLike }
  },
  methods: {
    toggle() {
      if (this.$store.state.visibleLike) {
        this.dialogVisible = true;
      }else{
        this.$store.commit('toggle', 'visibleLike')
        const contentOne = {}
        console.log(this.$store.state.contentOne.id);
        axios.get('/hybjf/api/fortuneChur/detail.html?id=' + this.$store.state.contentOne.id)
        .then((res) => {
          contentOne.likes = res.data.detail.clicks + 1
          contentOne.id = this.$store.state.contentOne.id
          contentOne.clicks = this.$store.state.contentOne.clicks
          this.$store.commit('setContentOne', contentOne)
        })
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
}
</script>

<style lang="scss" scoped>
@import url("//unpkg.com/element-ui@2.2.0/lib/theme-chalk/index.css");

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
      width: 117px;
      height: 117px;
      color: #fff;
      line-height: 180px;
      outline: 0;
      font-family: cursive;
      cursor: pointer;
    }
    &__AbtnBefore{
      background: url(~/static/like.png) no-repeat;
    }
    &__AbtnAfter{
      background: url(~/static/like.png) no-repeat;
      animation: bgChange .5s;
    }
    &__Spanbtn{
      position: absolute;
      top: 80px;
      left: 52%;
      color: #fff;
      z-index: -1;
    }
    &__SpanbtnShow{
      z-index: -1;
      animation: spanShow .5s forwards;
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
@keyframes bgChange {
  100% {
    background: url(~/static/zan.png) no-repeat;
  }
}
@keyframes spanShow {
  0% {
    top: 80px;
    z-index: 0;
  }
  90% {
    top: 10px;
    z-index: 0;
  }
  100% {
    top: 0;
    z-index: -1;
  }
}
</style>
