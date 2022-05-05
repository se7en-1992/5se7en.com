<template>
  <section class="Call">
    <h3>用户输入一个url到页面呈现的过程</h3>
    <p class="indent-32">
      这个问题属于<b>高频前端面试题</b>，
      也是本人作为面试官的时候最喜欢问的一道问题，
      虽然这道题目被问烂的，但是很多候选人回答的其实并不太好，
      这道题是一道比较考察候选人综合能力的一道题目。
      这道题设计到的综合知识很多，而且每一层都能延伸往下问很多问题。
    </p>
    <p class="indent-32">
      很多候选人在回答问题的时候没有什么<b>条理性</b>和<b>逻辑性</b>，
      尤其是在这种考察大的综合题的时候，这里我的建议是<b>由面及点，逐点击破</b>。
      下面就一起看看怎么样把这道题回答的更漂亮吧。
    </p>
    <article>
      <h4>1. DNS解析</h4>
      <p class="indent-64">
        很多候选人其实在回答这道问题的时候第一步会回答先域名解析，
        然后回答了一下DNS的解析过程，其实第一点这只能算是答对了一半，
        这道题目其实要分为两种情况。第一种情况是没有CDN，第二种是有CDN
      </p>
      <h5>1.1 没有使用CDN</h5>
      <p class="indent-64">1.1.1 从浏览器缓存中寻找是否存在输入域名和ip的映射关系。如果有直接使用缓存。</p>
      <p class="indent-64">1.1.2 若没有缓存，会从操作系统的host文件中查找映射关系，如果有直接使用host文件中映射的ip。</p>
      <p class="indent-64">1.1.3 若浏览器和host文件都没有映射关系，则依次向根服务器、顶级域名服务器、二级域名服务器、三级域名服务器发出请求，得到网站服务器的 IP 地址并缓存。</p>
      <h5>1.2 使用CDN</h5>
      <p class="indent-64">1.2.1 第一步还是进行DNS解析，但是这里解析返回的并不是一个IP而是一个<b>CNAME</b>(加速域名)，这个<b>CNAME</b>指向的是CDN的全局负载均衡。</p>
      <p class="indent-64">1.2.2 进入到CDN的全局负载均衡系统进行智能调度，根据用户的ip地址、运营商网络、以及边缘节点的负载情况，给出就近的负载较轻的边缘节点服务器的IP返回给浏览器并缓存。</p>
      <h4>2. 浏览器缓存</h4>
      <p class="indent-64">
        很多候选人在说完第一步后，就会立马说到向服务器发送请求或者是TCP的三次握手四次挥手，
        其实这里还有一个浏览器缓存的问题需要考虑。
      </p>
      <h5>2.1 强缓存</h5>
      <p class="indent-64">根据<b>Expries</b>和<b>Cache-Control</b>判断是否命中强缓存，如果命中的是强缓存，则直接使用浏览器缓存，不会向服务器发送请求。</p>
      <h5>2.2 协商缓存</h5>
      <p class="indent-64">2.2.1 如果没有命中强缓存，浏览器会开启TCP链接通道（三次握手）并携带Etag、Last-Modified、If-Modified-Since等请求头向。</p>
      <p class="indent-64">2.2.2 服务器接收到携带上述请求头的请求后，进行Etag、Last-Modified、If-Modified-Since等逐一比对（优先Etag），一致从缓存取返回304,不一致返回200。</p>
      <p class="indent-64">引申问题：</p>
      <p class="indent-96">- TCP为什么需要三次握手和四次挥手？</p>
      <p class="indent-96">- Http1.0/1.1/2.0的区别（涉及到的是http1.1版本<b>keep-alive</b>多请求下的通道复用以及http2.0的<b>多路复用</b>、<b>首部压缩</b>、<b>二进制传输</b>、<b>服务端推送</b>问题）？</p>
      <p class="indent-96">- 对OSI七层模型及TCP/IP协议的理解？</p>
      <p class="indent-96">- 网站运用https的话，怎么确保安全的？</p>
      <p class="indent-96">- 可能还会让你说说websocket和http的区别？</p>
      <p class="indent-64">以上问题大家可以先自行查找，后续也会补充并链接跳转。</p>
      <h4>3. 页面渲染</h4>
      <p class="indent-64">无论命中强缓存还是协商缓存，当浏览器接收到资源后，就到了页面渲染的流程了。</p>
      <p class="indent-64">3.1 解析HTML，构建 DOM 树</p>
      <p class="indent-64">3.2 解析 CSS ，生成 CSS 规则树</p>
      <p class="indent-64">3.3 合并 DOM 树和 CSS 规则，生成 render 树</p>
      <p class="indent-64">3.4 布局 render 树（ Layout / reflow ），负责各元素尺寸、位置的计算</p>
      <p class="indent-64">3.5 绘制 render 树（ paint ），绘制页面像素信息</p>
      <p class="indent-64">3.6 浏览器会将各层的信息发送给 GPU，GPU 会将各层合成（ composite ），显示在屏幕上</p>
      <p class="indent-32" style="margin-top: 20px">
        可能大部分的人回答到这一步就觉得差不多了，
        但是在当下这个互联网大环境下（战争、疫情、裁员....），
        越来越卷，怎么样把让自己在众多候选人当中突出出来呢？
      </p>
      <h4>4. 合成层（以chorme为例）</h4>
      <p class="indent-32">
        我们都知道浏览器在进行回流，重绘的时候，尤其是回流的时候会特别影响性能的，
        减少回流重绘，合理形成合成层能够提升性能。性能问题是中高级前端必备技能。
        浏览器自身会有一定的层压缩机制，但是也有浏览器处理不了的情况，泛滥使用的话也会造成层爆炸，
        所以我们得了解浏览器的层类型，层合成等概念，以下都是基于chorme浏览器分析。
      </p>
      <h5>4.1 层类型</h5>
      <p class="indent-64">- RenderLayers: 渲染层，这是负责对应 DOM 子树</p>
      <p class="indent-64">- GraphicsLayers: 图形层，这是负责对应 RenderLayers子树。</p>
      <h5>4.2 层合成</h5>
      <p class="indent-64">
        我们在页面渲染的时候也提到过，升到DOM树后，
        每个节点都会对应一个 LayoutObject，当他们的 LayoutObject 处于相同的坐标空间时，
        就会形成一个 RenderLayers ，也就是渲染层。RenderLayers 来保证页面元素以正确的顺序合成，
        这时候就会出现层合成（composite），从而正确处理透明元素和重叠元素的显示。
      </p>
      <p class="indent-64">
        某些带有特殊属性或者特殊的元素标签的渲染层会被提升成合成层（Compositing Layers），
        合成层拥有单独的 GraphicsLayer，而其他不是合成层的渲染层，
        则和其第一个拥有 GraphicsLayer 父层公用一个。
        我们可以想象一下，如果你的页面就只有一个GraphicsLayer，
        那么只要发生了回流，就需要将整个GraphicsLayer都会进行回流重绘，这是非常消耗性能的。
      </p>
      <p class="indent-64">
        每个GraphicsLayer（合成层单独拥有的图层） 都有一个 GraphicsContext，
        GraphicsContext 会负责输出该层的位图，位图是存储在共享内存中，
        作为纹理上传到 GPU 中，最后由 GPU 将多个位图进行合成，然后显示到屏幕上。
      </p>
      <p class="indent-64">
         通俗的解析一下其实就是GraphicsLayer是由GPU渲染的，而且和其他层是<b>相互独立的，互不影响。</b>
         这样单独的图形层进行回流重绘时，并不会影响其他图层。
      </p>
      <h5>4.3 如何形成和合成</h5>
      <p class="indent-64">
        刚刚也提到了某些带有特殊属性或者特殊的元素标签的渲染层会被提升成合成层,
        我们来一起看下哪些能形成合成层吧：
      </p>
      <p class="indent-64">- 3D transforms：translate3d、translateZ 等。</p>
      <p class="indent-64">- video、canvas、iframe 等元素。</p>
      <p class="indent-64">- 通过 Element.animate() 实现的 opacity 动画转换。</p>
      <p class="indent-64">- 通过 СSS 动画实现的 opacity 动画转换。</p>
      <p class="indent-64">- 在 DPI 较高的屏幕上，fix 定位的元素会自动地被提升到合成层中。但在 DPI 较低的设备上却并非如此，因为这个渲染层的提升会使得字体渲染方式由子像素变为灰阶。</p>
      <p class="indent-64">- will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）。</p>
      <p class="indent-64">- 对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition。</p>
      <p class="indent-64">我们可以打开chorme浏览器的开发者模式，对图层进行分析。</p>
      <p><img src="~static/img/tuceng.png"></p>
      <p class="indent-64">引申问题：</p>
      <p class="indent-96">- 浏览器怎么进行隐式合成？</p>
      <p class="indent-96">- 浏览器如何进行层压缩？</p>
      <p class="indent-96">- 怎么样预防层爆炸？</p>
      <p class="indent-64">
        以上问题大家可以查看淘系团队的
        <a href="https://fed.taobao.org/blog/taofed/do71ct/performance-composite/">
          无线性能优化：Composite
        </a>，
        这边文章说的十分详细还有对应的demo，更有助大家理解，
        后续也会补充至浏览器专栏。
      </p>
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
  .indent-32{
    line-height: 32px;
    text-indent: 32px;
  }
  article{
    font-size: 16px;
    h4{
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .indent-64{
      line-height: 32px;
      text-indent: 32px;
    }
    img {
        width: 400px;
        @media (max-width: 991px) {
          width: 100%;
        }
      }
    .indent-96{
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
