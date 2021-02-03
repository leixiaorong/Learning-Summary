```js
//组件的render方法
react中一切皆组件

一个类需要要有一个render方法，render方法要返回一个jsx元素

在jsx中可以用{}放JavaScript代码

为什么在jsx中用的是className，而不是class？ 因为class是JavaScript的关键字

for 也是JavaScript的关键字，因此用htmlFor代替

```

```js
//组件的组合、嵌套和组件树
自定义的组件必须用大写字母开头，普通的html标签都用小写字母开头
```

```js
//事件监听
在react.js中监听事件只需要加上onClick、onKeyDown这样的属性
而不需要调用浏览器原生的addEventListner进行事件监听
但是没有经过特殊处理的话，这些on*事件只能用在普通的html标签上，而不是组件标签上。

//event对象
和普通浏览器一样，事件监听函数会被自动传入一个event对象，这个对象是react.js内部自己构建的，

//this
一般来说this指的是实例本身
但是在事件监听函数中this是null或者undefined
因此需要手动的将实例方法bind到当前实例上，在传入给react.js,这样该方法才会绑定到实例上

除了传this,还可以传参数
```


```js
//配置组件的props
怎么将props的参数传入？
在使用一个组件时，可以把参数放在标签的属性当中，所有的属性都会作为props对象的键值

props传入的属性值不可改变
```
```js
//props和state的对比

//state
state的作用时保存和控制、修改自己的可变状态
在组件内部被初始化，可以被组件自身修改，而外部也不能访问，不能修改。
setState会导致组件重新渲染

//props
主要作用是让使用该组件的父组件可以传入参数来配置该组件，他是外部传进来的配置参数，
组件内部无法控制，也无法修改。

有个简单的规则：少用state，多用props

尽量多使用函数式组件
const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
```

```js
遍历列表主要是将jsx塞进数组中，之后把数组return
///key 
react.js属于高效的，依赖于virtual-DOM策略，能复用的情况会尽量选择复用，没有必要的时候不会去碰dom,
但是处理列表元素会出现元素可能会在一个列表中改变位置

当列表改变位置后，react.js只要交换一个dom位置就行，但是他并不知道我只是改变了位置，所有会重新渲染着两个
元素，会增加dom的操作，但是如果给每个元素加上唯一的标识，就会知道这两个元素只是交换了位置

这个标识就是key,知道只是交换了位置，那么渲染的时候就会尽可能的复用元素内部的结构

这里有个简单的规则：对于用表达式套数组罗列到页面上的元素，都要为每个元素加上key,并且key是唯一标识

一般来说key值取得是后台数据返回的id,如果后台没有返回id,则可以用其他方式来取数据作为key
```

# 实战分析

```js
//评论功能
命名规则：如果一个文件导出的是一个类，那么这个文件名大写开头

最外卖一层的📦类名可以用wrapper

中间的区块的命名 field

开始设计组件
commentApp 总的
commentInput 输入
commentList 列表
comment 单个评论

为什么<input/>或者<textrea/>等标签设置value属性等于this.state.xxxx的时候，在浏览器中输入值时会
什么也输不了，这是为什么呢？
这是因为react.js认为所有的状态都要由state来控制，那么输入控件的值被设置了value，值不变，所有vlaue
也不变，因此，必须要setState才能更新状态的值，此时要监听输入框的onChange事件，然后获取输入的内容，再
用setState来更新，所有输入框内容才会变。同时，在监听事件中，可通过event.target.value获取输入的内容

//向父组件传递数据
当用户在评论框发表评论时，点击发布，内容需要显示在下方的评论列表中的，但是这两个组件时独立的组件，
该怎么传递数据呢？
此时父组件是两个组件的桥梁，当用户点击发布评论时，将input的state传递给父组件，
然后组件把数据传递给commentList
那问题又来了，input怎么将数据传到父组件呢?
父组件通过props向子组件传递一个回调，子组件调用回调即可

  handleSubmit () {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({ content: '' })
  }

方法会判断props是否传入了onSubmit属性，有的话就调用该函数，并且把要传入的数据构建成对象，
并且传入该函数

父组件通过这个回调函数来拿到这个对象


当父组件给子组件传递数据时，子组件用map遍历，若是props中没有某个属性时，会报错

此时有个方法可以解决？
用
static defaultPros = {
	comments:[]
}

有时候为了代码的健壮性，需要添加数据检查
```