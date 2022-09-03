//1.引入express
const { request, response, json } = require('express');
const express = require('express');
// const cors=require('cors');app.use(cors());
//2.创建应用对象
const app = express();
//3.创建路由规则
//reque是对请求报文的封装
//response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('Hello AJAX');
});

//可以接受任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send('Hello AJAX POST');
});

//针对ie缓存
app.get('/ie', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('Hello IE -2');
});


//延时响应
app.get('/delay', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(()=>{
            //设置响应体
             response.send('延时响应');
    },3000)

});

//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data={name:'嘉兴学院'};
    response.send(JSON.stringify(data));

});

//fetch服务
app.all('/fetch-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data={name:'嘉兴学院'};
    response.send(JSON.stringify(data));

});

//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    // response.send('console.log("你好，嘉院")');
    const data={
        name:'嘉兴学院zjxu'
    };
    let str=JSON.stringify(data);
    response.end(`handle(${str})`);

});

//用户名是否存在
app.all('/check-username',(request,response)=>{
    // response.send('console.log("你好，嘉院")');
    const data={
        exist: 1,
        msg: '用户名已经存在'
    };
    let str=JSON.stringify(data);
    response.end(`handle(${str})`);

});

//
app.all('/jquery-jsonp-server',(request,response)=>{
    // response.send('console.log("你好，嘉院")');
    const data={
        name: '嘉兴学院',
        city:['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);
});


//jQuery服务
app.all('/jquery-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data={name:'atguigu'};
    response.send(JSON.stringify(data));

});

//JSON响应
app.all('/json-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data={
        name:'atguigu'

    };
    //对对象进行字符串转换
    let str=JSON.stringify(data);
    //设置响应体
    response.send(str);
});

app.all('/cors-server', (request, response) => {
    response.send('hello CORS');
    
})

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中");
});