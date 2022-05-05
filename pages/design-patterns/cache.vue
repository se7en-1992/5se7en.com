<template>
  <section class="Cache">
    <h3>前端缓存机制</h3>
    <h5>目录</h5>
    <ul>
      <li><a href="#browser">浏览器缓存</a></li>
      <li><a href="#outline">HTML5之离线缓存</a></li>
      <li><a href="#local">HTML5之本地存储</a></li>
    </ul>
    <article>
      <h4>什么是缓存？</h4>
      <p>缓存就是用来避免频繁的到主存储器（一般来说可能是数据库，结构化的磁盘文件，远程网络接口，程序接口等等提供数据返回的）获取数据而建立的一个存 取更快的临时存储器（缓存）。一般来说，缓存比主存储器更小（不一定，也可能是存储的数据结构不一样，但是存取速度非常快），但是存储的容量也比较小，但是存取速度非常快。</p>
    </article>
    <article>
      <h4>为什么要使用缓存？</h4>
      <h5>缓存的作用：</h5>
      <ol>
        <li>1.存储频繁访问的数据。</li>
        <li>2.临时存储耗时的计算结果。</li>
        <li>3.内存缓存减少磁盘IO。</li>
      </ol>
      <h5>缓存的种类：</h5>
      <ol>
        <li>1.数据库端缓存</li>
        <li>2.应用层缓存</li>
        <li>3.cdn缓存</li>
        <li>4.浏览器缓存</li>
        <li>n.其它缓存</li>
      </ol>
    </article>
    <article id="browser">
      <h4>浏览器缓存</h4>
      <p>一个页面的缓存状态可以通过这两种方法去设置，<strong>meta</strong>标签和<strong>http response header</strong>。</p>
      <h5>一、meta标签</h5>
      <p>主要是通过meta标签中的<strong>http-equiv</strong>属性和<strong>content</strong>属性设定缓存，比如：</p>
      <pre><code><i>&lt;</i>meta http-equiv="pragma" content="no-cache"></code></pre>
      <p>是用于设定禁止浏览器从本地机的缓存中调阅页面内容,设定后一旦离开网页就无法从Cache中再调出;</p>
      <pre><code><i>&lt;</i>meta http-equiv="cache-control" content="no-cache"></code></pre>
      <p>常见的取值有private、no-cache、max-age、public等，默认为private</p>
      <pre><code><i>&lt;</i>meta http-equiv="expires" content="0"></code></pre>
    <p>可以用于设定网页的到期时间,一旦过期则必须到服务器上重新调用。需要注意的是必须使用GMT时间格式;</p>
    </article>
    <article>
      <h4>二、http response header</h4>
      <ol>
        <li>1.Cache-Control</li>
        <li>2.Expires</li>
        <li>3.Last-modified </li>
        <li>4.ETag</li>
      </ol>
      <p>这里的response header主要还是后端设置的，但是作为http的一个请求过程一部分，我们还是需要了解一下这个过程的</p>
      <p style="margin-top: 20px;">1.Cache-Control</p>
      <ul>
        <li>public：指定响应会被缓存，并且在多用户间共享。也就是下图的意思。如果没有指定public还是private，则默认为public。</li>
        <li>private：响应只作为私有的缓存，不能在用户间共享。如果要求HTTP认证，响应会自动设置为private。</li>
        <li>no-cache：指定不缓存响应，表明资源不进行缓存。</li>
        <li>no-store：绝对禁止缓存，每次请求资源都要从服务器重新获取。暗示请求或响应中包含机密信息，是真正的禁用缓存</li>
        <li>max-age：（单位为s）指定设置缓存最大的有效时间，定义的是时间长短。当浏览器向服务器发送请求后，在max-age这段时间里浏览器就不会再向服务器发送请求了。</li>
        <li>must-revalidate：指定如果页面是过期的，则去服务器进行获取。这个指令并不常用，就不做过多的讨论了。</li>
        <li>s-maxage：（单位为s）同max-age，只用于共享缓存（比如CDN缓存）。</li>
      </ul>
    <p style="margin-top: 20px;">2.Expires</p>
    <p style="padding-left: 40px;">缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。如果客户端的时间与服务器的时间相差很大，那么误差就很大</p>
    <p>如果Cache-Control的max-age和Expires同时存在，Cache-Control的max-age优先</p>
    <p style="margin-top: 20px;">3.Last-modified</p>
    <p style="padding-left: 40px;">服务器端文件的最后修改时间，需要和cache-control共同使用，是检查服务器端资源是否更新的一种方式。当浏览器再次进行请求时，会向服务器传送If-Modified-Since报头，询问Last-Modified时间点之后资源是否被修改过。如果没有修改，则返回码为304，使用缓存；如果修改过，则再次去服务器请求资源，返回码和首次请求相同为200，资源为服务器最新资源。</p>
    <p style="margin-top: 20px;">4.ETag</p>
    <p style="padding-left: 40px;">根据实体内容生成一段hash字符串，标识资源的状态，由服务端产生，资源改变这个值就会改变个人感觉类似于资源的一种抽象映射。请求过程类似于last-modified，不过它作为if-none-match（服务端响应的ETag）发送给服务端判断这个值是否与服务端的ETag一致看资源是否改变。</p>
    <h5 style="margin-top: 20px;">为什么有了last-modified还要有ETag?</h5>
    <p style="padding-left: 40px;">i、某些服务器不能精确得到资源的最后修改时间，这样就无法通过最后修改时间判断资源是否更新</p>
    <p style="padding-left: 40px;">ii、如果资源修改非常频繁，在秒以下的时间内进行修改，而Last-modified只能精确到秒 </p>
    <p style="padding-left: 40px;">iii、一些资源的最后修改时间改变了，但是内容没改变，使用ETag就认为资源还是没有修改的。</p>
    </article>
    <article id="outline">
      <h4 style="margin-top: 50px;">HTML5之离线缓存</h4>
      <p>离线缓存是Html5新特性之一，简单理解就是第一次加载后将数据缓存，在没有清除缓存前提下，下一次没有网络也可以加载，用在静态数据的网页或游戏比较好用。当然，Html5新的特性都不是所有浏览器都能支持的，离线缓存也一样。反正IE9（包括）及IE9以下的浏览器目前是不支持的。如果用在移动端，应该都能支持。检测是否支持离线缓存也是比较简单的。</p>
      <pre>
        <code>
          <i>&lt;</i>script>
              if(window.applicationCache){
                  alert("支持离线缓存");
              }
              else{
                  alert("不支持离线缓存");
              }
          <i>&lt;</i>/script>
        </code>
      </pre>
      <p>实现HTML5应用程序缓存非常简单，只需三步，并且不需要任何API。只需要告诉浏览器需要离线缓存的文件，并对服务器和网页做一些简单的设置即可实现。</p>
      <ul>
        <li>创建一个 cache.manifest 文件，并确保文件具有正确的内容。</li>
        <li>在服务器上设置内容类型。</li>
        <li>将网站所有的HTML文件都指向 cache.manifest。</li>
      </ul>
      <p style="margin-top: 20px;">1.cache.manifest 文件</p>
      <pre>
        <code>
          CACHE MANIFEST
          # 第一行必须是”CACHE DMANIFEST”
          # version 1.0.0
          CACHE:
          # 需要缓存的内容
          index.html
          404.html
          favicon.ico
          robots.txt
          humans.txt
          apple-touch-icon.png
          css/normalize.min.css
          css/main.css
          css/bootmetro-icons.min.css
          img/pho-cat.jpg
          img/pho-huangshan.jpg

          FALLBACK:
          #第一个资源文件为能够在线访问时使用的资源文件，第二个资源文件为不能在线访问时使用的备用资源文件。
          online.js local.js

          NETWORK:
          #指定在线白名单，即列出我们不希望离线存储的文件，因为通常它们的内容需要互联网访问才有意义。
          *
        </code>
      </pre>
      <p style="margin-top: 20px;">2.在服务器上设置内容类型</p>
      <p style="padding-left: 40px;">真正运行或测试离线web应用程序的时候，需要对服务器进行配置，让服务器支持text/cache-manifest这个MIME类型（在h5中规定manifest文件的MIME类型是text/cache-manifest）。例如对Apache服务器进行配置的时候，需要找到
      ｛apache_home｝/conf/mime.type这个文件(.htaccess)，并在文件最后添加如下所示代码：
      text/cache-manifest .manifest 。</p>
      <p style="margin-top: 20px;">3.设置HTML文件的指向</p>
      <pre>
        <code>
          <i>&lt;</i>html manifest=”/cache.manifest” >
            ...
          <i>&lt;</i>/html>
        </code>
      </pre>
      <h5 style="margin-top: 20px;">离线缓存对象详细的API，请自行查阅相关文档</h5>
    </article>
    <article id="local">
      <h4 style="margin-top: 50px;">HTML5之本地存储</h4>
      <ul>
        <li>LocalStorage</li>
        <li>SessionStorage</li>
      </ul>
      <p>cookie、Session和LocalStorage以及SessionStorage之间的区别这里就不再赘述了，不了解的同学可以自行搜索了解,这里主要简单说说和缓存相关的知识。</p>
      <p>其实就是把请求拿到的数据，存储中本地存储当中，下次在进入这个页面当中直接从本地存储获取相应的数据。</p>
      <h5 style="margin-top: 20px;">注意事项</h5>
      <p style="padding-left: 40px;text-indent: 0px;">1.存储数据时注意字符串化，web storage拥有像getItem，setItem，clear等方法</p>
      <p style="padding-left: 40px;text-indent: 0px;">2.LocalStorage在PC上的兼容性不太好，而且当网络速度快、协商缓存响应快时使用localStorage的速度比不上304。并且不能缓存css文件。而移动端由于网速慢，使用localStorage要快于304。</p>
      <p style="padding-left: 40px;text-indent: 0px;">3.无痕模式下LocalStorage以及SessionStorage是不可使用的。</p>
    </article>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.Cache{
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
  ul{
    padding-left: 64px;
    li{
      line-height: 32px;
      list-style: disc;
    }
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
    ul{
      padding-left: 64px;
      li{
        line-height: 32px;
        list-style: disc;
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
