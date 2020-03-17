var app = require('koa')();
var router = require('koa-router')();
var axios = require('axios')
var querystring = require('querystring');
var http = require('http');
var server = http.createServer();


// 这是KOA 1.0中的写法，2.0中已经淘汰
// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });


// 婚纱界面
var WeddingdressData = require('./page/weddingdress.js')
router.get('/api/weddingdress', function *(next) {
	console.log('婚纱')
	const params = this.params
	const paramsHotList = params.hotList
	const paramsPackageList = params.packageList
	const paramsTopQualityMerchant = params.topQualityMerchant
	console.log(params)
    this.body = WeddingdressData;
});

// 婚纱信息
var WeddingdressInfoList = require('./page/weddingdress/weddingdressInfoList.js')
router.get('/api/weddingdress/weddingdressInfoList', function *(next) {
    console.log('婚纱信息')
	const params = this.params
    this.body = WeddingdressInfoList;
});
//精品照片
var Photograph = require('./page/photograph.js')
router.get('/api/photograph', function *(next) {
    console.log('精品照片')
	const params = this.params
    this.body = Photograph;
});
//照片信息
var PhotographInfoList = require('./page/photograph/photographInfoList.js')
router.get('/api/photograph/photographInfoList', function *(next) {
    console.log('精品照片详情')
	const params = this.params
    this.body = PhotographInfoList;
});
//南京婚礼套系
var nanjing = require('./page/nanjing.js')
router.get('/api/nanjing', function *(next) {
    console.log('南京婚礼套系')
	const params = this.params
    this.body = nanjing;
});
//南京婚礼套系详情
var nanjingInfoList = require('./page/nanjing/nanjingInfoList.js')
router.get('/api/nanjing/nanjingInfoList', function *(next) {
    console.log('南京婚礼套系详情')
	const params = this.params
    this.body = nanjingInfoList;
});
//宜昌婚礼套系
var yichang = require('./page/yichang.js')
router.get('/api/yichang', function *(next) {
    console.log('宜昌婚礼套系')
	const params = this.params
    this.body = yichang;
});
//宜昌婚礼套系详情
var yichangInfoList = require('./page/yichang/yichangInfoList.js')
router.get('/api/yichang/yichangInfoList', function *(next) {
    console.log('宜昌婚礼套系详情')
	const params = this.params
    this.body = yichangInfoList;
});
//婚礼策划
var cehua = require('./page/cehua.js')
router.get('/api/cehua', function *(next) {
    console.log('婚礼策划')
	const params = this.params
    this.body = cehua;
});
//婚礼策划详情
var cehuaInfoList = require('./page/cehua/cehuaInfoList.js')
router.get('/api/cehua/cehuaInfoList', function *(next) {
    console.log('婚礼策划详情')
	const params = this.params
    this.body = cehuaInfoList;
});
//婚礼司仪
var siyi = require('./page/siyi.js')
router.get('/api/siyi', function *(next) {
    console.log('婚礼司仪')
	const params = this.params
    this.body = siyi;
});
//获取评论
var comment = require('./page/comment.js')
router.get('/api/comment', function *(next) {
    console.log('婚礼司仪')
	const params = this.params
    this.body = comment;
});
//获取用户信息
var user = require('./page/users.js')
router.get('/api/users', function *(next) {
    console.log('获取用户信息')
	const params = this.params
    this.body = user;
});
//注册用户
router.post('/api/users',function *(next){
	close.log("注册用户")
	//获取数据
	this.body = {
		uid: 0,
		userName: "",
		parssword: "",
		avatarUrl: ""
	}
})
//提交评论
router.post('/api/comment', function *(next) {
    console.log('提交评论')
    // 获取参数
    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

server.on('request', function(req, res) {
    var params = qs.parse(req.url.split('?')[1]);
    var fn = params.callback;

    // jsonp返回设置
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(fn + '(' + JSON.stringify(params) + ')');

    res.end();
});
// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3001,function(){
	console.log("Running...")
});
