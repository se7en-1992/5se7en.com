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
    <ul class="FooterPic__links">
      <li>
        友情链接：
      </li>
      <li>
        <a href="https://github.com/se7en-1992/5se7en.com" target="_blank">网站源码</a>
      </li>
      <li>
        <a href="https://www.sunjianhua.cn" target="_blank">Sun Jianhua 's Blog</a>
      </li>
    </ul>
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
  @media (max-width: 991px)
  {
    display:none;
  }
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
  &__links {
    overflow: hidden;
    margin-top: 20px;
    li {
      float: left;
      color: #a40000;
      font-size: 12px;
      margin-right: 20px;
      a {
        color: #a40000;
        font-size: 12px;
        text-decoration: underline;
      }
    }
  }
}
</style>
