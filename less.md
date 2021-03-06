# 使用公共变量
公共变量存放多次复用的属性，集中维护
```less
@baseColor: blue;

.box{
    color: @baseColor;
}
```

# 抽取公共属性作为公共类
```less
.bordered{
    border: 1px solid black;
}

#box{
    .bordered;//转译成 border: 1px solid black;
}
```

# 选择器变量
使用@{...}来表示选择器
```less
@selector: banner;
.@{selector}{
    color:blue;
    margin:10px;
}

.banner{
    //内容是selector的内容
}
```
# URLs变量
使用@{...}来表示选择器
当一个网页需要通过css引入较多图片，图片和css文件处于两个深度很大的子文件中，采用css的写法，就需要写一大堆'../../'之类的路径
```less
@imagePath: '../image'

.box{
    background: url('@{imagePath}/1.png') no-repeat center;
}
```

# 属性名变量
使用@{...}表示选择器
属性名用变量代替，可以用较短的变量表示较长的属性名
```less
@bb: border-bottom;
@borderColor: blue;

.box{
    @{bb}: 1px solid @borderColor;//border-bottom: 1px solid blue;
}
```

# 嵌套变量
即在一个变量中使用另一个变量??用在什么地方呢
```less
@tt:"my apple is ";
@var:"tt";
content:@@var;//my apple is tt
```

# lazy loading
less也存在变量提升，对于变量的引用不需要考虑顺序
```less

```

# 混入 Mixin
```less
/* LESS mixin error with (optional) argument @borderWidth which defaults to 2px if not specified */
.error(@borderWidth: 2px) {
  border: @borderWidth solid #F00;
  color: #F00;
}
  
.generic-error {
  padding: 20px;
  margin: 4px;
  .error(); /* Applies styles from mixin error */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  .error(5px); /* Applies styles from mixin error with argument @borderWidth equal to 5px */
}
```
# 继承
# 导入
# 函数
# 操作符
# webpack处理
```js
//rules
module:{
    rules:[
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
            //loader会从右向左去解析，用less编译成css,css-loader加载css文件，style-loader负责将样式添加DOM中
        }
    ]
}
```
