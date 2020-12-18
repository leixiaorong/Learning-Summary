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

//我的答案 ❌
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













```

