```js
//节流
throttle(action, delay, context, iselapsed) {
        let timeout = null;
        let lastRun = 0;
        return function () {
            if (timeout) {
                if (iselapsed) {
                    return;
                } else {
                    clearTimeout(timeout);
                    timeout = null;
                }
            }
            let elapsed = Date.now() - lastRun;
            let args = arguments;
            if (iselapsed && elapsed >= delay) {
                runCallback();
            } else {
                timeout = setTimeout(runCallback, delay);
            }
            function runCallback() {
                lastRun = Date.now();
                timeout = false;
                action.apply(context, args);
            }
        }
    }
```
##### 限定一个函数在一定时间内只能执行一次 <-> 一定时间内 一个动作 执行一次
onresize 窗口大小被调整时，支持的js对象是window，表示窗口
scroll 滚动
mousemove
mousehover 

触发率比较高 如果在这些函数内部执行了其他函数，尤其是执行了操作dom的函数，浏览器操作dom耗费性能

懒加载、滚动加载、加载更多、和监听滚动条的位置
搜索框的联想功能
防止高频率的点击提交，防止表单重复提交

防抖
在事件被触发n秒之后再执行回调，如果在这n秒内又被触发，则重新计时

1、共同维持一个timer
var timer
debounce(fn, delay){
	clearTimeout(timer)
	timer = setTimeout(
	function(){
	fn()
    },delay)
}

debounce(fn, delay){
    var timer
    return function(){
    var _this = this
    var args = arguments
    if(timer){
    clearTimeout (timer)
    }
    timer = setTimeout()
    }
}











