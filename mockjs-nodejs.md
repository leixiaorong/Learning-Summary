mockjs->生成随机数据，模拟数据

创建mockserver.js
写入一些请求的部分
包括监听的端口等


mock文档
使用mock去随机模拟数据，这里是放在模拟层
```js
var Mock = require('mockjs')
var data = Mock.mock( {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})

module.exports =  data
```
使用express来实现node服务器
```

```
开发阶段webpack-dev-server有一个proxy字段，可以将某些接口代理到后台服务器上去，也可以用来解决开发环境中的跨域问题

一个典型的proxy配置：
```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.238:8076',
        changeOrigin: true,
        // 是否重写路径
        pathRewrite: { '^/api': '' },
        ws: true, // enable websocket proxy
        // 不检查安全问题，可以接受运行在 HTTPS 上，使用无效证书的后端服务器
        secure: false,
        // 定义请求头
        header: {
          Cookie: 'JSESSIONID=9848e0b7-efdd-4cdf-a310-40ad20368a31'
          // Authorization: 'JSESSIONID=9848e0b7-efdd-4cdf-a310-40ad20368a31',
        }
      }
    }
  }
}
```
在mock server中实现下几点：
1、渲染模版
2、实现请求路由映射
3、数据接口代理到生产或者测试环境

请求路由映射：实现原理是让本地的mockserver有一个router，能接受所有的http请求，然后子啊router中根据线上的路由约定，实现一套一样的规则

数据接口代理
1、渲染页面的请求
2、静态资源的请求
3、获取数据的请求

不仅需要模拟正常情况下的ui,还需要模拟数据出错，数据为空时的ui

动态注册接口来做本地接口模拟功能

编写一系列的路由=>响应映射，把定义好的接口注册到工具实例中



js 中listen 8000 端口号，打印数据，这样可以观察node服务器是否启用成功


设计思想：
1、首先在写入到文件，所有接口的表格数据，写入到文件
2、单个的接口需要的json文件也是写入到文件中去，这样可以读取和写入，数据写入之后怎么上传
3、怎么进行模拟呢

代码实例
```js
//mockServer.js
var express = require("express")
var app = express()
var config = require('./mock.config')
var routes = require('./mockRoutes')

console.log(config)
console.log(routes)

app.all('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With")
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.setHeader("X-Powered-By", ' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    next();
})

Object.keys(routes).forEach(key => {
    app.get(key, function (req, res) {
        let data = config[routes[key]]
        console.log("data:",data);
        let result = {
            code: 0,
            msg: "SUCCESS",
            data: data,
        }
        console.log("result",result);
        res.send(result)
    })
})

app.listen(8080, function () {
    console.log('mockServer listening on port 8080')
})
```

```js
//mockRoutes.js
//模拟路由
module.exports = {
    "/app/get": "getApp",
    "/app/related": "getRelatedApp",
    "/user/video/related": "getRelatedVideo",
}
```
```js
//mock.config.js
var Mock = require('mockjs')
//模拟数据
module.exports = {
    getApp: Mock.mock({
        "app|1-10": [{
            "appname|1": ['王者', '香肠', 'pubg'],
            "time": "@datetime",
            "appId|0-200000": 0,
        }]
    }),
    getRelatedApp: Mock.mock({
        //data
    }),
    getRelatedVideo: Mock.mock({
        //data
    })
}
```
