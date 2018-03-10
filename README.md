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
git clone https://github.com/se7en-1992/5se7en.com.git

cd 5se7en.com

npm install

npm run dev
```

使用浏览器打开 `http://localhost:5757`


## nuxt介绍

- nuxt详细的入门教程这里不做详细的介绍，[官方文档](https://nuxtjs.org/)讲解的已经非常详细了。这里简单介绍一下项目目录作用

### nuxt目录介绍

- [assets](https://github.com/se7en-1992/5se7en.com/blob/master/book/assets.md)
- [components](https://github.com/se7en-1992/5se7en.com/blob/master/book/components.md)
- [layouts](https://github.com/se7en-1992/5se7en.com/blob/master/book/layouts.md)
- [middleware](https://github.com/se7en-1992/5se7en.com/blob/master/book/middleware.md)
- [pages](https://github.com/se7en-1992/5se7en.com/blob/master/book/pages.md)
- [plugins](https://github.com/se7en-1992/5se7en.com/blob/master/book/plugins.md)
- [static](https://github.com/se7en-1992/5se7en.com/blob/master/book/static.md)
- [store](https://github.com/se7en-1992/5se7en.com/blob/master/book/store.md)


### nuxt配置介绍

- [config](https://github.com/se7en-1992/5se7en.com/blob/master/book/config.md)
- [nuxt.config.js](https://nuxtjs.org/guide/configuration)
- [editorconfig](http://editorconfig.org/)
EditorConfig是一套用于统一代码格式的解决方案
- [eslintrc.js](https://eslint.org/)
ESLint是一个应用广泛的 JavaScript 代码检查工具
- [gitignore](https://git-scm.com/docs/gitignore)
git提交忽略项配置文件
- [newrelic.js](https://newrelic.com/)
newrelic配置文件
- start.js
express启动入口文件，开发环境直接使用nuxt启动并没有走start.js，生产环境用[pm2](http://pm2.keymetrics.io/)启动的该文件


## 友情提示

- [N-blog](https://github.com/nswbmw/N-blog)(一个不错的Nodejs + Express + MongoDB入门项目)
- [vue2.0官网文档](https://vuejs.org/)
- [nuxtjs官方文档](https://nuxtjs.org/)
- [vue2-elm](https://github.com/bailicangdu/vue2-elm)(一个不错的vue2.0个人项目)
- [nuxt.js](https://github.com/nuxt/nuxt.js)
