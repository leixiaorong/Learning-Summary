###### 逻辑运算判定规则
- true
> - 对象、非0number、非空string
- false
> - 0、""、null、false、undefined、NaN
--------------
###### && and ||
- a && b 
> - 若a为==假==，返回a，否则，返回b
- a || b 
> - 若a为==真==，返回a，否则，返回b
--------------
###### 举例
```js
//左边为undefined时，返回右边"~"
//左边不为undefined时，直接返回
via = via.split("@")[1] || "~" 
```