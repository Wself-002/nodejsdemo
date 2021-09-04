var http = require('http')
var server = http.createServer()
server.on('request',function(request,response){
	console.log('接收到客户端请求')
	response.setHeader('Content-Type','text/plain;charset=utf-8')
	if(request.url == '/login'){
		response.write('登录界面')
		response.end()
	}else{
		response.write('其他界面')
		response.end()
	}
})

server.listen(5000,function(){
	console.log('服务器开启成功')
})
// 123