<template>
  <section class="typeof">
    <h3>javascript的操作符typeof</h3>
    <article>
      <h4>typeof返回的种类</h4>
      <h5>鉴于ECMAScript是松散类型的，因此需要有一种手段来检测给定变量的数据类型——typeof就是负责提供这方面信息的操作符。对于一个值使用typeof操作符可能返回下列某个字符串：</h5>
      <p>"undefined" —— 如果这个值未定义或者未声明</p>
      <p>"boolean" —— 如果这个值是布尔值</p>
      <p>"string" —— 如果这个值是字符串</p>
      <p>"number" —— 如果这个值是数值</p>
      <p>"object" —— 如果这个值是对象或者null</p>
      <p>"function" —— 如果这个值是函数</p>
      <pre><code>
       var a1,a2=null,a3=undefined,a4=NaN,a5=true,a6={},a7=+'123a',a8= function(){}
       typeof a  //"undefined"
       typeof a1  //"undefined"
       typeof a2  //"object"
       typeof a3  //"undefined"
       typeof a4  //"number"
       typeof a5  //"boolean"
       typeof a6  //"object"
       typeof a7  //"number"
       typeof a8  //"function"
      </code></pre>
    </article>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.typeof{
  width: 1365px;
  padding: 100px 50px;
  margin: 0 auto;
  @media (max-width: 991px) {
    width: 100%;
    padding: 2vh 2vw;
  }
  h3{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  article{
    font-size: 16px;
    h4{
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    p{
      line-height: 32px;
      text-indent: 32px;
    }
    h5{
      font-size: 16px;
      font-weight: bold;
      margin: 10px 0px;
      line-height: 32px;
      text-indent: 32px;
    }
    ol{
      li{
        line-height: 32px;
        text-indent: 64px;
      }
    }
    pre{
      overflow-x: auto;
      margin: 1.5em 0 3em;
      padding: 20px;
      max-width: 100%;
      border: 1px solid #000;
      color: #e5eff5;
      font-size: 1.4rem;
      line-height: 1.5em;
      background: #0e0f11;
      border-radius: 5px;
      code{
        padding: 0;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
      }
    }
  }
}
</style>
