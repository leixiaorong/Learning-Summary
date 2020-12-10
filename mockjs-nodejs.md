mockjs->生成随机数据，模拟数据

创建mockserver.js
写入一些请求的部分
包括监听的端口等


mock文档
使用mock
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
```
```
