##### 块级作用域
```
作用于匿名立即执行函数表达式
{
	let tmp = 
}
括号里的是立即执行的
原来有个写法是：
(function ()
    {

	}()
)
尽量不要在块级作用域中声明函数和变量
如果实在需要的话，优先使用函数表达式

块级作用域必须要要有大括号

```

##### const
```
声明一个常量，一旦声明不可更改
一旦声明必须初始化
const 只在声明所在的块级作用域内有效
无变量提升 
存在暂存性死区
声明的变量不可重复声明，和let一样

注意：
const实际上不是变量不可改动，而是变量指向的内存地址所保存的数据不可改动。对于简单类型的数据，值就保存在变量指向的内存地址
，而对于复杂类型，保证的只是指针不可改，而不是指针指向的数据不可改动

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

###### 声明变量的方法
es5只有两个，var和function
es6只有添加let和const
还有两种 import和class类


###### 顶层对象的属性
```
浏览器中window 
node中global

es5中顶层变量和全局是等价的
window.a = 1 > === a = 1
这样设计有很大的问题，比如说不知不觉中创建了全局变量

es6改变这点
var 和 function 全局变量依然有顶层的属性
而let const class 不具有顶层属性

顶层就是指window和global,通用的写法this

var a = 1
window.a // 1

let b = 1
window.b //undefined

不同的顶层对象self window global
中间一堆没看懂，然后结论是很难在所有情况下取到顶层对象

es2020引入了globalThis作为顶层对象，任何情况下，globalThis都是存在的，拿到
顶层对象，且指向全局环境下的this

````





































