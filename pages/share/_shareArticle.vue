<template>
  <section class="Nginx">
    <h3>网站如何免费开通https协议？</h3>
    <article>
      <h4>什么是https？</h4>
      <p>https, 全称Hyper Text Transfer Protocol Secure，相比http，多了一个secure，这一个secure是怎么来的呢？这是由TLS（SSL）提供的，这个又是什么呢？估计你也不想知道。大概就是一个叫openSSL的library提供的。https和http都属于application layer，基于TCP（以及UDP）协议，但是又完全不一样。TCP用的port是80， https用的是443（值得一提的是，google发明了一个新的协议，叫QUIC，并不基于TCP，用的port也是443， 同样是用来给https的。）总体来说，https和http类似，但是比http安全。</p>
    </article>
    <article>
      <h4>为什么要开通https？</h4>
      <h5>HTTP 三大风险：</h5>
      <ol>
        <li>窃听风险（eavesdropping）：第三方可以获知通信内容。</li>
        <li>篡改风险（tampering）：第三方可以修改通信内容。</li>
        <li>冒充风险（pretending）：第三方可以冒充他人身份参与通信。</li>
      </ol>
      <h5>HTTPS 解决方案</h5>
      <ol>
        <li>所有信息都是加密传播，第三方无法窃听。</li>
        <li>具有校验机制，一旦被篡改，通信双方会立刻发现。</li>
        <li>配备身份证书，防止身份被冒充。</li>
      </ol>
    </article>
    <article>
      <h4>如何开通https？</h4>
      <h5>申请证书</h5>
      <p><a href="https://freessl.org" target="_blank">FreeSSL.org - 一个申请免费证书的网站</a></p>
      <p><a href="https://yq.aliyun.com/articles/225669?spm=5176.11065265.1996646101.searchclickresult.1b9a9ebeJL3YCE" target="_blank">FreeSSL教程</a></p>
      <h5>上传证书</h5>
      <p>将申请得到的证书以及私钥文件放到你的服务器/ssl/目录下</p>
      <p>打开你的nginx配置文件nginx.conf,一般在/etc/nginx/nginx.conf</p>
      <pre><code>server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # .pem证书的位置
        ssl_certificate "/ssl/full_chain.pem";
        # 私钥文件的位置
        ssl_certificate_key "/ssl/private.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        # 配置的是你本地web端口号
        location / {
           proxy_pass   http://localhost:7777/;
        }
        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }</code></pre>
    <p>重启你的nginx</p>
    <pre><code>nginx -s reload</code></pre>
    <p>此时你的网站https就算是开通好了。你可以尝试开用https的形式去打开您的网站</p>
    </article>
    <article>
      <h4>http强制https形式访问</h4>
      <p>这里我们借鉴的百度baidu.com自动跳转www.baidu.com的技术来实现的:</p>
      <p>1.首先将nginx的80端口配置到一个默认的html页面</p>
      <pre><code>server {
        listen       80;
        server_name  www.5se7en.com;

        location / {
            root /www/;
        }
    }</code></pre>
    <p>2.在服务器新建一个文件夹</p>
    <pre><code>mkdir /www</code></pre>
    <p>3.进入www目录</p>
    <pre><code>cd /www</code></pre>
    <p>4.创建一个index.html文件</p>
    <pre><code>vi index.html</code></pre>
    <p>5.将下面代码复制到index.html中</p>
    <pre>
      <code>
        <span class="line"># index.html</span><br><span class="line"><span class="tag">&lt;<span class="name">html</span>&gt;</span>  </span><br><span class="line">    <span class="tag">&lt;<span class="name">meta</span> <span class="attr">http-equiv</span>=<span class="string">"refresh"</span> <span class="attr">content</span>=<span class="string">"0;url=https://www.5se7en.com/"</span>&gt;</span></span><br><span class="line"><span class="tag">&lt;/<span class="name">html</span>&gt;</span></span><br>
      </code>
    </pre>
    <p>6.重启你的nginx</p>
    <pre><code>nginx -s reload</code></pre>
    <p>7.去检验您的网站吧</p>
    </article>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.Nginx{
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
