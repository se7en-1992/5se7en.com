## 5se7en.com

nuxtjs+express+vue2.0+vuex搭建的服务端渲染个人网站项目.<br>
项目线上地址：https://5se7en.com/

## 注意事项

- node>=v8.0.0+ (nuxt1.0.0以上版本的node版本号必须大于v8.0.0否则启动的时候会报错)<br>
- 若要测试游戏登录请点击前往[套马游戏](https://www.hybjf.com/game/20170925Activity)注册一个账号

## 技术选型

这里先说两句题外话，谈一谈对前端开发产生了深远影响的两个时间点<br>
- ajax的出现，促成了Web 2.0时代的来临
- nodejs的出现，让前端能做的更多，让js不仅仅只是浏览器端的语言。
这里为什么要说这个呢，有些前端开发者会说node不是做后端的吗？我为什么要学nodejs呢？其实随着前端的发展，尤其是node出现，前端发展日新月异，各种自动化工具，框架层出不穷。很多都是依赖node。node不仅仅只是用来拿来写后端，可以这么说，当前时间如果你对node毫无知晓，也不去学的话，那么你已经被前端浪潮所覆盖了。
- 本项目用的是node中使用最多的express前端web框架，官网的demo是这么形容的=> [ExpressJS](http://expressjs.com/) + [Nuxt.js](https://nuxtjs.org) = :zap:  没错可以说是非常极速了，我的个人网站服务器是阿里云1核1g学生版机，网站除了第一次打开稍微慢点，后面可以说得上是光速了。比我以前使用的任何框架都要极速。
- 下面再谈一下为什么要使用服务端渲染和选用nuxtjs？
    - 知乎上有个论题大家可以看一看[为什么现在又流行服务端渲染html？](https://www.zhihu.com/question/59578433/answer/326694511)，回答的人比较多，也比较杂，我这里就简单的总结一下
        - 服务端渲染，主要解决两个痛点 SEO优化(一些新闻资讯类的网站都需要做一些搜索引擎优化)和大型应用的首屏渲染(解决一些大型应用首页加载速度问题)
        - 其实这又要谈到历史了，一开始html就是后端渲染的，前端实际上就是在切图（CSS）和做特效(JS)，所以所有程序员中前端工资最低，职位也最低。所以前后端的鄙视链就出现了。
        - nodejs 和前端 mvc 的兴起让前端变得复杂起来，前端发现翻身的机会，于是全力支持这两种技术，造成本不该做成 spa 的网站也成了 spa。慢慢地前后端分离运动从大公司开始兴起，目的就是前端脱离后端的指指点点，独立发展。（表面上是为了「代码分离」，实际上是为了「人员分离」，也就是「前后端分家」，前端不再附属于后端团队）
        - spa 之后发现 seo 问题很大，而且首屏渲染速度贼慢，但是自己选的路再难走也要走下去，于是用 nodejs 在服务端渲染这一条路被看成是一条出路
        - 简而言之就是前端一开始骚不起来，后来node和MVC/MVVM（Vue,React,Angular）的出现前端开始骚起来了，搞独立，把本应要做成服务端渲染的东西也做成了SPA，现在新技术又出来了，要及时发现错误，进行改正。前后端分离是趋势，既然都分开了，总不能还让后端去渲染，那咱们前端自己想办法做服务端渲染吧，于是服务端渲染框架也就出现了。
    - 为什么选用nuxtjs?
        - 一开始我用的服务端渲染是学习[N-blog](https://github.com/nswbmw/N-blog)利用nodejs的express+ejs模版渲染做的，效果其实也还不错，里面的代码并没有完全的组件化，我做的项目还使用的jQuery,这多low啊，那我怎么能扔，我肯定要换个技术来玩。（这里没有贬低jQuery的意思，我觉得jQuery是个很不错的JavaScript库，曾经也可以说是一统前端了，包括现在，不会用jQuery的前端基本上没几个，但是怎么说呢，jQuery在慢慢沉寂，操作dom在现在对比下来并不是一个最优的选择了。）前端在不断发展，我们要做的就是选择最优。
        - 在vue官网中也对nuxtjs做了强力的推荐，再加上nuxtjs的github上express模版demo介绍[ExpressJS](http://expressjs.com/) + [Nuxt.js](https://nuxtjs.org) = :zap:看到这个我就选了这个框架了。没错就是他了.
        - nuxtjs结合vue2、Webpack、vue-loader、babel-loader、vuex、Vue-Meta
        - 不需要在配置繁琐的webpack配置,vue-loader自动生成路由，只需要在pages目录下创建文件就是自动生成对应的路由文件

## 开发环境

- Node.js: `^8.9.4`
- express: `^4.16.2`
- nuxtjs: `^1.0.0-rc11`
- vue: `^2.5.3`

```bash
npm install
npm run dev
```

使用浏览器打开 `http://localhost:5757`

## 友情提示

- [N-blog](https://github.com/nswbmw/N-blog)(一个不错的Nodejs + Express + MongoDB入门项目)
- [vue2.0官网文档](https://vuejs.org/)
- [nuxtjs官方文档](https://nuxtjs.org/)
- [vue2-elm](https://github.com/bailicangdu/vue2-elm)(一个不错的vue2.0个人项目)
- [nuxtjs.org](https://github.com/nuxt/nuxtjs.org)

## nuxt介绍

- nuxt详细的入门教程这里不做详细的介绍，[官方文档](https://nuxtjs.org/)讲解的已经非常详细了。这里简单介绍一下项目目录作用

### nuxt目录介绍

- assets
    - 如果你的静态资源文件需要 Webpack 做构建编译处理，可以放到 assets 目录，否则可以放到 static 目录中去。
    - Nuxt 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下，像 robots.txt 或 sitemap.xml 这种类型的文件就很适合放到 static 目录中。

- components
    - 组件目录 components 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 [asyncData](https://nuxtjs.org/api/) 方法的特性。
    简而言之此目录就是普通的vue组件目录。

- layouts
    - 该目录名为Nuxt.js保留的，不可更改。
    - 你可以自定义合适自己网站的默认样式和错误样式

- middleware
    - 中间件执行流程顺序：
        - nuxt.config.js
        - 匹配布局
        - 匹配页面

- pages
    - 该目录名为Nuxt.js保留的，不可更改。
    - 页面目录 pages 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。
    - 此页面的.vue文件都具有[asyncData](https://nuxtjs.org/api/)、[fech](https://nuxtjs.org/api/pages-fetch)方法。

- plugins
    - 插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
    - 我们可以将element-ui或者mint-ui以及其他更多的插件都可以放在plugins中使用

- static
    - 该目录名为Nuxt.js保留的，不可更改。
    - 静态文件目录 static 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。

- store
    - 该目录名为Nuxt.js保留的，不可更改。
    - store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。

### nuxt配置介绍

- config
    - 此目录并不是nuxt自身目录而是一些项目经验促使我添加此目录从来更加方便的去管理和使用在项目中所需要的变量。
    - NEWRELIC_KEY:[newrelic](https://newrelic.com/)的密钥，newrelic是服务器端性能监控的一款软件
    - TIMBER_KEY:[timber](https://timber.io/)的密钥，timber是一种云日志记录系统，简单的来说就是纪录线上的一些日志
    - SENTRY_PROJECT_ID/SENTRY_PUBLIC_KEY/SENTRY_PRIVATE_KEY:[Sentry](https://sentry.io)的项目id,公钥,私钥，Sentry是一个开源的实时错误报告工具
    - porductionProxy/developmentProxy: 是nuxt的axios模块代理请求的路径设置
    - 其实我在项目启动的时候还使用了[pm2](http://pm2.keymetrics.io/)有express项目经验的人用过都说好，有日志记录状态监控等，真的很好用。

- [nuxt.config.js](https://nuxtjs.org/guide/configuration)

- [.editorconfig](http://editorconfig.org/)
    - EditorConfig是一套用于统一代码格式的解决方案

- [.eslintrc.js](https://eslint.org/)
    - ESLint是一个应用广泛的 JavaScript 代码检查工具

- [gitignore](https://git-scm.com/docs/gitignore)
    - git提交忽略项配置文件

- [newrelic.js](https://newrelic.com/)
    - newrelic配置文件

- start.js
    - express启动入口文件，开发环境直接使用nuxt启动并没有走start.js，生产环境用[pm2](http://pm2.keymetrics.io/)启动的该文件
