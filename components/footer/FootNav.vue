<template>
  <div class="FootNav">
    <ul>
      <li><a href="/">Homepage</a></li>
      <li><a href="/interview">Interview</a></li>
      <li><a href="/improve">Improve</a></li>
      <li><a href="/algorithm" style="border: 0;">Algorithm</a></li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .FootNav{
    height: 55px;
    background: url(~static/color-earth.png) no-repeat left center #a40000;
    @media (max-width: 991px)
    {
      display:none;
    }
    ul{
      height: 55px;
      width: 628px;
      margin:0 auto;
      li{
        float: left;
        line-height: 55px;
        a{
          color: #fff;
          font-size: 20px;
          padding: 5px 35px;
          border-right: 2px solid #fff;
        }
      }
    }
  }
</style>
