1、display:inline
```
就像行内元素限制的元素的大小）
元素变成行内元素
不能更改元素的height、width的值，大小由内容撑开
padding上下左右都有效
margin只有左右有效
```
2、display:block
```
元素变成块级元素，独占一行，不设置自己宽度的时候会默认填满父级元素
各个位置属性的值都可以改变
```
3、display:inline-block
```
不独占一行的块级元素
既可以让元素处于同一行，又可以设置其位置属性
```

> inline-block和浮动效果类似，
> 那么其中的区别又是什么呢
```
inline-block元素不会脱离文本流，而float会让元素脱离文本流，
并且还有父元素高度坍塌的效果，浮动布局还会出现参差不齐的情况
float更对用于文字环绕的情况
```
```
inline-block的小问题
可能会产生间隙，间隙是因为随手的空格符导致的
    去除间隙的方法
    对父元素添加{font-size:0},将字体设为0，则空白符也变成0px
可能会有浏览器兼容性问题，
    ie6/7
    对于行内元素
        {display:inline-block}
    对于块级元素
        {display:inline;zoom:1}
```