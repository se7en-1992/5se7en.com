<template>
  <div class="FooterPic">
    <div class="FooterPic__top">
      <div class="FooterPic__top__contact">
        <p style="font-size: 20px;">Contact me</p>
        <p style="font-size:14px;">e-mail:&nbsp;&nbsp;&nbsp;&nbsp;177739007@qq.com</p>
        <p style="font-size:14px;">github:&nbsp;&nbsp;&nbsp;&nbsp;se7en-1992</p>
        <p style="font-size:14px;">website:&nbsp;&nbsp;&nbsp;&nbsp;5se7en.com</p>
      </div>
      <div class="FooterPic__top__qrcode">
        <img src="~static/QRcode.png" style="width: 150px;" />
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.FooterPic{
  background: url(~static/map.png) no-repeat;
  padding-bottom: 45px;
  width: 1365px;
  margin: 0 auto;
  &__top{
    overflow: hidden;
    width: 1365px;
    margin: 0 auto;
    &__contact{
      margin-left: 550px;
      margin-top: 30px;
      float: left;
      p{
        color: #a40000;
        line-height: 30px;
        width: 530px;
      }
    }
    &__qrcode{
        margin-right: 60px;
        margin-top: 30px;
        float: right;
    }
  }
}
</style>
