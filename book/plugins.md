## plugins

插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。

需要注意的是，在任何 Vue 组件的生命周期内， 只有 beforeCreate 和 created 这两个钩子方法会在 客户端和服务端均被调用。其他钩子方法仅在客户端被调用。

有些插件可能只是在浏览器里使用，所以你可以用 ssr: false 变量来配置插件只从客户端还是服务端运行。

我们可以将element-ui或者mint-ui以及其他更多的插件都可以放在plugins中使用

[关于 plugins 目录的更多信息](https://nuxtjs.org/guide/plugins)

[plugins配置信息](https://nuxtjs.org/api/configuration-plugins)
