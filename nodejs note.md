##### nodejs的读取参数

```
//参数的使用
process.argv.forEach((val, index) =>{
	console.log(`${index}: ${val}`)
	})

//创建一个数组来排除前两个参数
const argv = process.argv.slice(2)
后续需要用再详细了解
```
##### nodejs的输出方式

