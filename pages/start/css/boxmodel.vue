<template>
  <section class="boxmodel">
    <h3>CSS盒模型</h3>
    <article>
      <h4>什么是盒模型</h4>
      <p>当对一个文档进行布局(laying out)的时候，浏览器渲染引擎会根据CSS-Box模型（CSS Basic Box model）将所有元素表示为一个矩形盒子（box)。CSS决定这些盒子的大小，位置以及属性（颜色，背景，边框尺寸...)。</p>
      <h4>盒模型包括哪些</h4>
      <p>内容（content）、内边距(padding)、边框(border) 和 外边距(margin)。</p>
      <p><img src="https://developer.mozilla.org/files/72/boxmodel%20(1).png" alt=""></p>
      <h4>盒模型的种类</h4>
      <p>1. W3C 标准盒模型 ： 属性width,height只包含内容content，不包含border和padding。</p>
      <p>2. IE 盒模型： ： 属性width,height包含border和padding，指的是content+padding+border。</p>
      <h4>box-sizing不同属性下盒模型宽高的计算方式</h4>
      <pre><code>
          /* 关键字 值 */
          box-sizing: content-box;
          box-sizing: border-box;
      </code></pre>
      <p>1.content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。</p>
      <p>2.border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值。大多数情况下这使得我们更容易的去设定一个元素的宽高。</p>
      <p>下面我门来举个例子：</p>
      <pre><code>
        .box1 {
          width: 100px;
          height: 100px;
          padding: 50px;
          border: 5px solid #000;
          box-sizing: content-box;
          background: red;
        }
      </code></pre>
      <div class="box1"></div>
      <p>width = 2*border + 2*padding + width = 2*5+2*50+100 = 210</p>
      <p>height = 2*border + 2*padding + height = 2*5+2*50+100 = 210</p>
      <pre><code>
        .box2 {
          width: 100px;
          height: 100px;
          padding: 50px;
          border: 5px solid #000;
          box-sizing: border-box;
          background: blue;
        }
      </code></pre>
      <div class="box2"></div>
      <p>width = 2*border + width = 2*5+100 = 110</p>
      <p>height = 2*border + height = 2*5+100 = 110</p>
      <p style="margin-top: 50px;color: red;"><b>通过以上例子，为了在浏览器中得到我们想要的准确的渲染效果。我们这里建议将元素的box-sizing都设为border-box</b></p>
    </article>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.boxmodel{
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
    .box1 {
      width: 100px;
      height: 100px;
      padding: 50px;
      border: 5px solid #000;
      box-sizing: content-box;
      background: red;
    }
    .box2 {
      width: 100px;
      height: 100px;
      padding: 50px;
      border: 5px solid #000;
      box-sizing: border-box;
      background: blue;
    }
  }
}
</style>
