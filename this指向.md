this 
更优雅的方法来隐式的传递一个对象的引用，因此可以将API设计的更加简洁并且易于复用

绑定规则

默认绑定
在非严格模式下，默认绑定的this指向全局对象，严格模式下this指向undefined
```js
function foo() {
  console.log(this.a); // this指向全局对象
}
var a = 2;
foo(); // 2
function foo2() {
  "use strict"; // 严格模式this绑定到undefined
  console.log(this.a); 
}
foo2(); // TypeError:a undefined
```

另外一种情况是在严格模式下调用其他函数，是不影响默认的绑定的
```js

function foo() {
  console.log(this.a); // foo函数不是严格模式 默认绑定全局对象
}
var a = 2;
function foo2(){
  "use strict";
  foo(); // 严格模式下调用其他函数，不影响默认绑定
}
foo2(); // 2

```
因此，对于默认绑定来说，决定this绑定对象的是函数体是否处于严格模式，严格指向undefined


隐式绑定
函数在调用的位置，是否有上下文对象，如果有，this就会隐式的绑定到这个对象上去
例如:
```js
function foo() {
    console.log(this.a);
}
var a = "Oops, global";
let obj2 = {
    a: 2,
    foo: foo
}
let obj1 = {
    a: 22,
    obj2: obj2
};
obj2.foo(); // 2 this指向调用函数的对象
obj1.obj2.foo(); // 2 this指向最后一层调用函数的对象    
// 隐式绑定丢失
let bar = obj2.foo; // bar只是一个函数别名 是obj2.foo的一个引用
bar(); // "Oops, global" - 指向全局

test(obj2.foo)//传入函数的引用，调用时也没有上下文环境
```
隐式绑定丢失，实际上就是函数调用时，并没有上下文对象，只是对函数的引用，所以会导致隐式绑定丢失

显式绑定
可以通过apply、call、bind 将函数的this绑定在指定对象上去
```
function foo() {
    console.log(this.a);
}
let obj = {
    a: 2
};
foo.call(obj); // 2
```




























