###### 简介
eslint是一个插件化的JavaScript代码检测工具，用于检查常见的JavaScript代码错误，也可进行代码风格的检查，可根据自己的喜好来指定一套ESlint配置。
###### 当前项目安装
```js
npm install eslint --save-dev
./node_modules/.bin/eslint --init 
//生成配置文件
./node_modules/.bin/eslint index.js
//这里index.js就是需要检查的js文件
```

###### 全局安装
将eslint应用到所有的项目，全局安装eslint
```
npm install -g eslint
//生成配置文件
eslint --init
//然后可在任何目录或者文件运行eslint
eslint index.js
```

#### ==小case==
注意：项目中需要有package.json文件，没有的话需要用eslint init -y生成一下
###### 首先创建一个用于test的项目，项目名：eslint-react
- mkdir eslint-react

![image](http://note.youdao.com/yws/res/4757/678BCB0E3ED04F52B368397F18489925)
###### 利用git进行版本控制，可不执行此步骤
- git init

![image](http://note.youdao.com/yws/res/4759/0263F6C9B7924FD59BD14670A6B1ED5F)
###### 当前项目中生成package.json文件
- npm init -y

![image](http://note.youdao.com/yws/res/4754/28AA2D8D751243D0B09F1C4A01018E77)
###### 本地安装eslint
- npm install eslint --save-dev

![image](http://note.youdao.com/yws/res/4763/246C4937A35F4609A4B894572AE6FB66)
###### 初始化生成配置文件，根据需要进行选择
-  ./node_modules/.bin/eslint --init

![image](http://note.youdao.com/yws/res/4770/08ECC48DD89B472A9A07A5F753C1851C)
###### 创建被检查文件index.js
![image](http://note.youdao.com/yws/res/4774/6A811085FC9645279709CD46D409F187)
###### 执行检查，根据执行结果修正代码
- ./node_modules/.bin/eslint index.js

![image](http://note.youdao.com/yws/res/4777/8AEB5C816145458D84FC2061E5B05A99)