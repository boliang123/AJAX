//1.引入express
const { request, response } = require('express');
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
//reque是对请求报文的封装
//response是对响应报文的封装
app.get('/', (request, response) => {
    response.send('Hello express');
});
//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中");
});