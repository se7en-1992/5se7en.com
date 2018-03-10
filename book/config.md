## config

此目录并不是nuxt自身目录而是一些项目经验促使我添加此目录从来更加方便的去管理和使用在项目中所需要的变量。

NEWRELIC_KEY:[newrelic](https://newrelic.com/)的密钥，newrelic是服务器端性能监控的一款软件

TIMBER_KEY:[timber](https://timber.io/)的密钥，timber是一种云日志记录系统，简单的来说就是纪录线上的一些日志

SENTRY_PROJECT_ID/SENTRY_PUBLIC_KEY/SENTRY_PRIVATE_KEY:[Sentry](https://sentry.io)的项目id,公钥,私钥，Sentry是一个开源的实时错误报告工具

porductionProxy/developmentProxy: 是nuxt的axios模块代理请求的路径设置

其实我在项目启动的时候还使用了[pm2](http://pm2.keymetrics.io/)有express项目经验的人用过都说好，有日志记录状态监控等，真的很好用。