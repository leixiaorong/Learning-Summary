- 单行隐藏
```html
<div class="a">
当文字超过范围的时候，当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起
</div>
```
```css
.a{
  width:100px;//设置限制宽度
  overflow:hidden;//超出的部分隐藏起来
  text-overflow:ellipsis;//超出的部分显示省略号
  white-space:nowrap;//只显示一行加上省略号
}
```

- 多行隐藏
##### 方案一（css
```html
<div class="a">
当文字超过范围的时候，当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起当文字超过范围的时候，超出部分会隐藏起
</div>
```
```css
.a{
 width: 200px;
 overflow: hidden;
 display: -webkit-box;//与之结合的属性，弹性伸缩盒子模型
 -webkit-box-orient:vertical;//排列方式
 -webkit-line-clamp:3;//设置在第几行显示省略号，省略号后面的部分不显示出来
}
```
##### 方案二（js
用js来截取文字，多余部分显示省略号
```JavaScript
//字段截取
$(".box").each(function() {
    var str = $(this).html();
    var subStr = str.substring(0, 10);
    $(this).html(subStr + (str.length > 10 ? '...' 
    + "<a href='#' class='active'>全文</a>" : ''));
});
```

##### 参考文档
https://www.cnblogs.com/slongs/p/11436313.html
