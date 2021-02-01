```jsx
jsx原理
一个dom元素信息：标签名、属性、子元素
每个dom元素都可以用合法的JavaScript对象来表示

{
	tag:'div',
	attr:{className: '', id: ''},
	children:[
	{
		tag:'div',
		sttr:{
			...
			},
		children:[...]
	}
	]
}
可见，可以用JavaScript对象来描述所用的html表示的ui信息，
但是JavaScript写起来太长了，因此react.js就把JavaScript的语法扩展了一下，
让JavaScript语言能够支持这种直接在JavaScript代码里编写html标签结构的语法。
编译时会把jsx结构转换成JavaScript的对象结构(用react-dom)
举个例子
 render () {
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
  //=》
  render () {
    return (
     React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { className: 'title' },
          "React 小书"
        )
      )
    )
  }
编译之后就可以用这个对象去构造真正的dom元素，然后把塞在页面上，这就是reactDom.render的作用
本质上就是把组件渲染并构造DOM树
此处应有一个图

？？？为什么不直接将jsx渲染成Dom结构，而是要经过中间层
1、当拿到一个表示ui的结构和信息的对象以后，不一定会把元素渲染到浏览器的普通页面上，可能是canvas,
或者手机app上，在中间做转化的是react-canvas，和reactNative
2、构造出这样一个对象后，当数据发生变化时，比较快的操作这个对象，而不是直接操作页面上的dom
1、可能不仅是普通页面，而是app或者canvas
2、数据变化时，很快去重新渲染，减少浏览器重排

```