## assets

资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。

如果你的静态资源文件需要 Webpack 做构建编译处理，可以放到 assets 目录，否则可以放到 static 目录中去。

Nuxt 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下，像 robots.txt 或 sitemap.xml 这种类型的文件就很适合放到 static 目录中。

[关于 assets 目录的更多信息](https://nuxtjs.org/guide/assets)



下一节：[components](https://github.com/se7en-1992/5se7en.com/blob/master/book/components.md)