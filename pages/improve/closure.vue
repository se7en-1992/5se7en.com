<template>
  <section class="Closure">
    <h3>javascript的作用域链和闭包</h3>
    <article>
      <h4>什么是javascript的作用域链？</h4>
      <p>每个执行环境（execution context）都有一个与之关联的变量对象。执行环境在查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。</p>
      <p>标识符解析是沿着作用域链一级一级地搜索标识符的过程，搜索过程始终从作用域链的前端开始，然后逐级向后回溯，直到找到标识符为止（如果找不到标识符，通常会导致错误发生）</p>
      <p>请看下面的代码示例:</p>
      <pre><code>
        var color = "blue";
        function changeColor(){
           var anotherColor = "red";
           function swapColors(){
              var tempColor = anotherColor;
                  anotherColor = color;
                  color = tempColor;
              //  这里可以访问color、anotherColor和tempColor
           }
           //  这里可以访问color和anotherColor不能访问tempColor
           swapColors()
        }
        //  这里只能访问color
        changeColor()
      </code></pre>
      <p>以上代码涉及3个执行环境：全局环境、changeColor()的局部环境和swapColors()的局部环境</p>
      <p>可以通过try-catach语句的catch块以及with语句延长作用域链</p>
      <p>没有块级作用域，if条件语句中的定义的变量和for循环中的，全局也可以访问</p>
      <pre><code>
       if(true){
          var color="blue";
       }
       console.log(color)  //"blue"

       if(true){
          let color="blue";
       }
       console.log(color) //报错

      for(var i=0; i < 10; i++){

      }
      console.log(i) //10
      </code></pre>
    </article>
    <article>
      <h4>什么是javascript的闭包？</h4>
      <p>有不少开发人员总是搞不清匿名函数和闭包这两个概念，因此经常混用。闭包是指有权访问另一个函数作用域中的变量的函数（闭包是指那些能够访问自由变量的函数）。创建闭包的常见方式，就是在一个函数内部创建另一个函数。</p>
      <h4>什么是自由变量？</h4>
      <p>自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。</p>
      <p>请看下面一个例子,利用原型和闭包做一个简单的自我介绍:</p>
      <pre><code>
       function person (){}
       person.prototype.name = "5se7en";
       var obj = new person();
       function intro (a){
          return function(){
            var myname = obj[a]
            console.log(myname)
          }
       }
       intro("name")()  //"5se7en"
      </code></pre>
      <h4>闭包的用途</h4>
      <p>闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。</p>
      <pre><code>
       function A(n){
          addFun = function(){ n++}
          function B(){
            console.log(n)
          }
          return B
       }
       var result = A(100)
         result()  //100
         addFun()
         result()  //101
      </code></pre>
      <p>在这段代码中，result实际上就是闭包B函数。它一共运行了两次，第一次的值是100，第二次的值是101。这证明了，函数A中的局部变量n一直保存在内存中，并没有在A调用后被自动清除。</p>
      <h4>闭包必刷题</h4>
      <pre><code>
       function creatFuc(){
          var result = new Array();
          for(var i=0; i < 10; i++){
            result[i] = function(){
              return i;
            }
          }
          return result
       }
       console.log(creatFuc()[0]()) //10
       console.log(creatFuc()[1]()) //10
       ...
       console.log(creatFuc()[9]()) //10
      </code></pre>
      <p>上面每个函数都会返回10.因为每个函数的作用域链中都保存着creatFuc()函数的活动对象，所以它们引用的都是同一个变量i。当creatFuc()函数返回后，变量i的值是10，此时每个函数都引用着保存变量i的同一个变量对象，所以每个函数内部i的值都是10。</p>
      <p>我们如果想让数组内每个元素都是0-10的话，可以利用闭包来解决</p>
      <pre><code>
       function creatFuc(){
          var result = new Array();
          for(var i=0; i < 10; i++){
            result[i] = function(num){
              return function(){
                return num
              }
            }(i)
          }
          return result
       }
       console.log(creatFuc()[0]()) //0
       console.log(creatFuc()[1]()) //1
       ...
       console.log(creatFuc()[9]()) //9
      </code></pre>
      <h4>使用闭包的注意点</h4>
      <p>1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。</p>
      <p>2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。</p>
    </article>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.Closure{
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
