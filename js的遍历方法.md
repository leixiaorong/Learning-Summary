```js
//这是数据的例子
"abc": {
    "_id": "2020-11-11",
    "sug": {
        "follow": 9251.0,
        "pageView": 226465.0,
        "appDownloadNew": 80485.0,
        "appReserve": 13678.0
        },
    "query": {
        "follow": 16397.0,
        "pageView": 1364724.0,
        "appReserve": 18774.0,
        "appDownloadNew": 68317.0
        },
    "qv": 917032.0
    },
```
```js
//一层遍历，不会遍历到下一层
//循环遍历自身的（不含继承的）可枚举的属性（不含symbol
//Object.keys()返回的是一个数组
Object.keys(obj).map(key=>{
	console.log(key)//这里是对象的key值
	console.log(obj[key])//这里是key对应的value
})

Object.keys(obj).forEach(function(key){
	console.log(key)//这里是对象的key值
	console.log(obj[key])//这里是key对应的value
})

//结果
"_id"
"2020-11-11"
"sug"
 Object {}//对象
"query"
 Object {}//对象
"qv"
917032



//循环遍历自身的和继承的可枚举的属性（不含symbol
for (var i in abc){
console.log(i, abc[i])
}
结果
"_id""2020-11-11"
"sug" Object {}
"query" Object {}
"qv"917032
```

##### object.keys和object.values的区别
```js
Object.keys(abc)
//返回 ["_id", "sug", "query", "qv"]

Object.values(abc)
//返回 ["2020-11-11", {…}, {…}, 917032]
```

```js
//自身所有属性，但是不包括symbol和不可枚举
Object.getOwnPropertyNames(aa)
//返回 ["_id", "sug", "query", "qv"]


//返回自身所有属性，包括Symbol或者字符串，也不管是否可枚举
Reflect.ownKeys(aa)
//返回 ["_id", "sug", "query", "qv"]
```
### 遍历数组

- forEach

- for in 

- for of 






