```JavaScript
import mock from '../mock/mock.js'
getMockData(){
    axios.get('/mock', { dataType: 'json' }) //路径的地址保持一致
        .then(res => {
            let data = res.data.objectinfo;
            if (data !== undefined) {
                this.setState({
                    comment_info: data
            });
        }
    })
}

```

```JavaScript
//npm install mockjs //命令执行
var Mock = require('mockjs')
var data = Mock.mock("/mock",{  
  //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
	"objectinfo|10":[{   			//生成四个如下格式的数据
		"id|+1":1, 						//数字从1开始，后续依次加1
    // "name":"@cname",			//用户名字为随机中文名    
    "name":"营养师：妖怪屋"+"@cname",			//用户名字为随机中文名
    "userimage":'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', //用户头像
    "transnum|0-1000":500,  //转发数
    "commentnum｜0-100":50, //评论数
    "like":50,  //点赞数
    "content":"详细内容", //主要内容
    "time":'一天前',  //时间
    "commentimage":'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',   
    //接口
    "content_id":1590680,//内容的id
    "content_type":"video",//内容类型
    "content_text":"给大家表演一个从天而降一刀秒。",//内容中的文字
    "content_image":"https://img.tapimg.com/video-preview/anim-FhbZb1GgF4rog0jRTo6aa6gFWbry.webp",//内容中的图片
    "app_id":168332,//app的id
    "app_text":"原神",//app的文字（？是app的名字嘛
    "app_image":"https://img.tapimg.com/market/lcs/6af3b5eba06fd3256d9b19475f40880e_360.png?imageMogr2/auto-orient/strip",//app的图片
    "user_id":32480609,//用户的id
    "user_text":"工藤新二",//用户的名字
    "user_image":"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",//用户的头像
    "ups":22,//转发数
    "comments":2, //评论数
    "time":1600340082,//时间
    "via":"UserMomentSequence"//（？

	}]
})
// 输出结果
export default data
```