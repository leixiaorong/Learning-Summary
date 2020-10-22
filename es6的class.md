#### 1、简介
生成实例对象的传统方法是构造函数
```JavaScript
function point (x,y){
    this.x = y;
    this.y = x;
}

point.prototype.toString = function (){
    return '(' + this.x + ',' + this.y +')';
}

var p = new Point(1,2)
```
上面的方法和面向对象语言差别大

因此es6 提供传统的写法，引入了class类的概念，可通过关键字class定义类

class可看作成语法糖,写成下面的样式
```javascript
class Point{
    constructor(x,y){//构造方法
        this.x = y;//实例对象
        this.y = x;
    }
    
    toString(){
        return '(' + this.x + ',' + this.y +')';
    }
    //函数定义不用加function
}

typeof Point => "function"
Point === Point.prototype.constructor
//类本身是就是指向构造函数的
使用的时候new 一个实例
类的所有方法都是定义在类的prototype上的
调用类上的方法就是调用原型的方法

可枚举和不可枚举的意思是什么呢
```
constructor方法
```
该默认返回this实例对象
类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行
new Foo（）instanceof Foo =>false
所有的实例共享一个原型
原型上定义了方法
还有用this定义的方法
```
取值函数getter和存值函数setter
```JavaScript
与es5一样，在类的内部可以使用get和set关键字，对某个属性进行取值和存值
get prop() {
    return 'getter';
  }
set prop(value) {
    console.log('setter: '+value);
  }
```
类的属性名可以采用表达式

类可以使用表达式的方式定义
```
const myclass = class me {}
这里的me时内部定义的只能在内部使用
class表达式可以写成立即执行
let person = new class {
    cons...{
        
    }
    sayname..{
        
    }
}('zhangsan')
//上面立即执行并实例了
person.sayname() => zhangsan 
```
注意点
```
1、严格模式
2、不存在变量提升
3、name属性 返回类的名字
4、generator方法？？？？
5、this指向
方法中可能会找不到this
两种方法绑定this
一种在构造方法中去bind绑定this
一种是用箭头函数，因为箭头函数总是指向定义时所在的对象
还有一种时proxy
```
静态方法
```javascript
所有在类中定义的方法都会被实例继承 ，但是如果在一个方法前加上static关键字，就表示方法不会实例继承，而是只能通过类来调用，这就是静态方法
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}

Foo.bar() //
//在bar中调用this.baz,这里的this指向的是foo的类，而不是实例，所以可以指向使用baz方法
同时，这里可以看出来，静态方法和非静态方法可以重名
```
实例属性可以写在类的最顶层，不需要加this，也可以写在constructor中

目前来说类只有静态方法，没有静态属性，但是可以定义，class.proname = 1


