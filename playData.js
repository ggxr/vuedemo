
var express = require('express');
var app = express();

// 解决跨域问题，网上成熟的解决方案，我是直接拷贝的
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

console.log(app);

app.get('/',function(req,res){
	res.send('this is a tip');
	res.end();
});

app.get( '/mp3-list', function(req, res){

	var _musicList = {
		"music":[
			{
			      "id": "1",
			      "name": "Apologize",
			      "singer": "Timbaland Remix",
			      "img": "http://www.egtch.com/t_works/Vuedata/apologize.jpg",
			      "url": "http://www.egtch.com/t_works/Vuedata/Apologize (Timbaland Remix).mp3"
			    },
			    {
			      "id": "2",
			      "name": "Hero",
			      "singer": "Enrique Iglesias",
			      "img": "http://www.egtch.com/t_works/Vuedata/hero.jpg",
			      "url": "http://www.egtch.com/t_works/Vuedata/Hero.mp3"
			    },
			    {
			      "id": "3",
			      "name": "I AM YOU",
			      "singer": "Kim Taylor",
			      "img": "http://www.egtch.com/t_works/Vuedata/iamyou.jpg",
			      "url": "http://www.egtch.com/t_works/Vuedata/I Am You.mp3"
			    }
		]
	}

	res.send(  _musicList  );
	res.end();
});


app.listen( 3698,function(){
	console.log( '3698，播放器的nodejs中间件，已经执行。' )
});
