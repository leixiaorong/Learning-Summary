```js
//例子
setTimeout(() => console.log('setTimeout1'), 0);

setTimeout(() => {
    console.log('setTimeout2');

    Promise.resolve().then(() => {

        console.log('promise2');

        Promise.resolve().then(() => {
            console.log('promise3');
        })

        console.log(5)
    })

    setTimeout(() => console.log('setTimeout4'), 0);
}, 0);

setTimeout(() => console.log('setTimeout3'), 0);

Promise.resolve().then(() => {
    console.log('promise1');
})
```
```
同步任务和异步任务
同步立即执行
同步任务会立即进入到主线程，
异步任务会进入到任务队列

//我的答案 
promise1 
setTimeout1
setTimeout2
setTimeout3
promise2
setTimeout4
promise3

//正确答案
promise1
setTimeout1
setTimeout2
promise2
5
promise3
setTimeout3
setTimeout4
```
```
基于browsing contexts
同步任务直接进入到主执行栈执行
等待主执行栈中任务执行完毕，由EL将异步任务推入执行栈中执行
典型的宏任务和微任务
宏任务：
script setTimeout setInterval I/O UI交互 setImmediate(node环境)
微任务：
process中的then,catch
MutationObserver
process>nextTick(nodejs)

一个宏任务，所有微任务（更新渲染 ，一个宏任务，所有微任务（更新渲染

promise,console.log()属于微任务，setTimeout是宏任务，执行的时候有代码块的概念，需要将代码块里面的完成回调之后再去执行队列中的其他任务
```
```
node与浏览器中的轮询机制（一个task，所有microtasks；一个task，所有microtasks…）最大的不同是，node轮询有phase（阶段）的概念，不同的任务在不同阶段执行，进入下一阶段之前执行process.nextTick() 和 microtasks。
```
```
执行栈
主线程有一个栈，每一个函数执行的时候，都会生成新的execution context（执行上下文），执行上下文会包含一些当前函数的参数、局部变量之类的信息，它会被推入栈中， running execution context（正在执行的上下文）始终处于栈的顶部。当函数执行完后，它的执行上下文会从栈弹出。
```
script start




参考文档
https://www.yuque.com/dundun/issue/zm3ft6
