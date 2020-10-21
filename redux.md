### action
###### actions
store.dispatch(actions)即可执行

###### action 创建函数
生成action的方法
为action包装一个函数

```JavaScript
//或者创建一个 被绑定的 action 创建函数 来自动 dispatch：
const boundAddTodo = text => dispatch(addTodo(text))
const boundCompleteTodo = index => dispatch(completeTodo(index))

//然后直接调用它们：
boundAddTodo(text);
boundCompleteTodo(index);
```
action 仅仅描述有事情发生，type定义发生的事件

### reducer
reducer 要设计如何响应这个动作，然后发送到store

state是一个对象，存放需要共享的数据，可以是一层一层嵌套的，也可以是平铺的

永远不要在 reducer 里做这些操作：
修改传入参数；
执行有副作用的操作，如 API 请求和路由跳转；
调用非纯函数，如 Date.now() 或 Math.random()。

### store

