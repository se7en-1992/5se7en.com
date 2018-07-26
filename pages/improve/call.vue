<template>
  <section class="Call">
    <h3>javascript的call,apply和bind</h3>
    <article>
      <h4>call、apply、bind的异同</h4>
      <h5>相同点</h5>
      <p>1.都是用来改变函数的this对象的指向的。</p>
      <p>2.第一个参数都是this要指向的对象。</p>
      <p>3.都可以利用后续参数传参。</p>
      <h5>不同点</h5>
      <p>下面我们用具体的代码来对比下三者之间具体的区别</p>
      <pre><code>
       var obj = {
          name: '5se7en',
          age: '26',
          say: function(){
              console.log(this.name + this.age)
          }
       }
       var obj2 = {
          name: 'wang',
          age: '25'
       }
       obj.say.call(obj2)  //这是call的用法
       obj.say.apply(obj2)  //这是apply的用法
       obj.say.bind(obj2)() //这是bind的用法
      </code></pre>
      <p>由上面的例子，我们可以得到bind和call、apply的区别：call和apply都是对函数的直接调用，而bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。那么call和apply有什么区别呢？</p>
      <pre><code>
       var obj = {
          name: '5se7en',
          age: '26',
          say: function(place, job){
              console.log(this.name + this.age + place + job)
          }
       }
       var obj2 = {
          name: 'wang',
          age: '25'
       }
       obj.say.call(obj2,"shanghai","web")  //这是call的用法
       obj.say.apply(obj2,["shanghai","web"])  //这是apply的用法
       obj.say.bind(obj2,"shanghai","web")() //这是bind的用法
       obj.say.bind(obj2)("shanghai","web") //这是bind的另一种用法
      </code></pre>
    </article>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.Call{
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
