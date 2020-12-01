promise不属于流程控制，但流程控制可以用多个promise组合实现，因此，职责单一，就是对一个决议的承诺。

resolve表明通过的决议，reject表示拒绝的决议

##### promise的三种状态
- 挂起
- 已成功
- 已完成

后两种是异步操作完成后的状态

promise的定义
- 当前事件队列执行完成后，再调用回调函数
- 回调函数是通过then添加的
- 添加多个then，可以添加多个回调函数，依次执行

##### 链式调用
```js
//采用Promise链式调用之后
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

当有错误时，会把错误返回到catch中

```js
//全局的错误处理
window.addEventListener('error', function(e)){
	var error = e.error
	console.log(error)
}
```

js捕获异常的方法：
- try catch
- window.onerror
- window.addEventListner('error',function(){},true)

资源加载失败，样式、图片、脚本文件的请求异常，404等
js脚本异常，例如控制台常见的error信息
检测html劫持，强行注入标签或脚步
页面样式丢失，css展现异常

1、-----
2、throw new Error('---')
3、



主要是有哪些异常会出现
- js语法错误、代码异常
- ajax请求异常
- 静态资源加载异常
- promise异常
- iframe异常
- 跨域script error
- 崩溃和卡顿

```js
1、try catch
只能捕获同步运行时的错误，对异步和语法无能为力
意思就是catch捕获不到try中的错误，所以就不能在catch中处理
这里就和我写的promise中回调一样，写的回调方法中有语法错误时没有报错在控制台的
```

http://jartto.wang/2018/11/20/js-exception-handling/












