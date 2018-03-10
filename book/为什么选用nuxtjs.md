## 为什么选用nuxtjs

一开始我用的服务端渲染是学习[N-blog](https://github.com/nswbmw/N-blog)利用nodejs的express+ejs模版渲染做的，效果其实也还不错，但是我的项目里面的代码并没有完全的组件化，还使用的jQuery,这多low啊，那我怎么能忍，我肯定要换个技术来玩。（这里没有贬低jQuery的意思，我觉得jQuery是个很不错的JavaScript库，曾经也可以说是一统前端了，包括现在，不会用jQuery的前端基本上没几个，但是怎么说呢，jQuery在慢慢沉寂，操作dom在现在对比下来并不是一个最优的选择了。）前端在不断发展，我们要做的就是选择最优。

在vue官网中也对nuxtjs做了强力的推荐，再加上nuxtjs的github上express模版demo介绍[ExpressJS](http://expressjs.com/) + [Nuxt.js](https://nuxtjs.org) = :zap:看到这个我就选了这个框架了。没错就是他了.
- nuxtjs结合vue2、Webpack、vue-loader、babel-loader、vuex、Vue-Meta
- 不需要在配置繁琐的webpack配置,vue-loader自动生成路由，只需要在pages目录下创建文件就是自动生成对应的路由文件
- 我的个人网站服务器是阿里云1核1g学生版机，网站除了第一次打开稍微慢点，后面可以说得上是光速了。比我以前使用的任何框架都要极速。


下一节：[assets](https://github.com/se7en-1992/5se7en.com/blob/master/book/assets.md)
