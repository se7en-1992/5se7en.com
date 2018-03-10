## 5se7en.com

nuxtjs+express+vue2.0+vuex搭建的服务端渲染个人网站项目.<br>
项目线上地址：https://5se7en.com/

## 注意事项

- node>=v8.0.0+ (nuxt1.0.0以上版本的node版本号必须大于v8.0.0否则启动的时候会报错)<br>
- 若要测试游戏登录请点击前往[套马游戏](https://www.hybjf.com/game/20170925Activity)注册一个账号

## 技术选型

- [为什么要使用服务端渲染](https://github.com/se7en-1992/5se7en.com/blob/master/book/%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93.md)
- [为什么选用nuxtjs](https://github.com/se7en-1992/5se7en.com/blob/master/book/%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E7%94%A8nuxtjs.md)

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
