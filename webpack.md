//webpack配置参数的解释
https://webpack.docschina.org/configuration/

webpack中的env.production的默认值是true 是布尔值

四个核心概念
- 入口 input
- 输出 output
- loader
- 插件（plugins

从哪个入口文件entry point进入,构建内部依赖图，会找到哪些模块和库是起点

输出：在哪输出bundle.js文件 可配置输出bundle文件的名字 emit emitted

loader:处理非JavaScript文件
规则的内容
test：用于标示被对应的loader转换的某个或者某些文件
use：用哪个loader
```js
module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
```
```
plugins:用于打包优化、压缩、重新定义环境中的变量
想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。
plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
]
//HtmlWebpackPlugin简化了HTML文件的创建，以便为你的webpack包提供服务。
```
plugins主要用来解决loader无法实现的事情

webpack是标准的nodejs commonjs模块
通过require()导入其他文件

依赖图
一个文件依赖于另一个文件
webpack就将次视为文件之间有依赖关系

模块热替换	
```
webpack
- 利用babel来完成代码转换，生成单个文件的依赖
- 生成文件的依赖图谱
- 生成最后打包代码
```














