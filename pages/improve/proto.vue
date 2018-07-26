<template>
  <section class="Proto">
    <h3>javascript的继承及原型链</h3>
    <article>
      <h4>什么是javascript继承？</h4>
      <p>继承是OO语言中的一个最为津津乐道的概念。许多OO语言都支持两种继承方式：接口继承和实现继承。接口继承只继承方法签名，而实现继承则继承实际的方法。如前所述，由于函数没有签名，在ECMAScript中无法实现接口继承。ECMAScript只支持实现继承，而且其实现继承主要是依靠原型链来实现的。</p>
      <p><img src="https://wx4.sinaimg.cn/large/7ed42f5cly1fqguw4y1zej20ge0e8wes.jpg"></p>
      <p>下面来说一个简单的继承的例子</p>
        <pre><code>
        function A() {
          this.name = "5se7en"
        }
        A.prototype.getName = function(){
          return this.name
        }
        function B() {
          this.sex = "Sir"
        }
        B.prototype = new A()
        B.prototype.getSex = function(){
          return this.sex
        }
        C = new B()
        console.log(C.getSex()) //Sir
      </code></pre>
      <p><img src="~static/img/proto.jpeg"></p>
      <h5>问题1:C._proto_指向谁？</h5>
      <p style="padding-left: 40px;">首先B是一个构造函数，C是通过B实例化得到的，所以C是B的实例对象，那么根据上图的指向关系C._proto_肯定是指向B的原型对象（B.prototype），在看代码我们B.prototype = new A()通过这个我们又知道了B.prototype其实又是A的实例对象，所以C._proto_其实最终指向的是A的实例对象</p>
      <h5>问题2:C._proto_._proto_指向谁？</h5>
      <p style="padding-left: 40px;">C._proto_._proto_指向的是A的原型对象（A.prototype），这个问题其实就是A的实例对象的_proto_指向谁，由上图可以轻易就能得到结论A的实例对象指向的是A的原型对象（A.prototype），所以C._proto_._proto_指向的是A的原型对象（A.prototype）</p>
      <h5>问题3:C._proto_._proto_._proto_指向谁？并且最终指向谁？</h5>
      <p style="padding-left: 40px;">由问题2可以得知，这个问题转化得到的问题其实就是A的原型对象的_proto_指向谁？其实这个就要说到一个结论了。</p><p style="padding-left: 40px;color: red;">在js中万物皆对象,几乎所有 JavaScript 中的对象都是位于原型链顶端的Object的实例,原型对象也有一个自己的原型对象 ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。</p>

      <h4>未完，待续.....</h4>
    </article>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.Proto{
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
