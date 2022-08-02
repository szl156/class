// 引入express
const express = require("express")
const {request, response} = require("express");
// 创建应用对象
const app = express()


// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置请求头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader("Access-Control-Allow-Headers", '*')
    response.send("Hello Ajax")
})
app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader("Access-Control-Allow-Headers", '*')
    response.send("Hello Ajax Post")
})
//数据响应
app.get('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader("Access-Control-Allow-Headers", '*')
    const data = {name: 'liudarun'}
    response.send(JSON.stringify(data))
})
// 延时响应
app.all("/delay", (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader("Access-Control-Allow-Headers", '*')
    setTimeout(() => {
        response.send("延时响应")
    }, 3000)
})
// jQuery
app.all('/jquery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader("Access-Control-Allow-Headers", '*')
    const data = {name: '盛镇梁'}
    response.send(JSON.stringify(data))
})
// axios
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader("Access-Control-Allow-Headers", '*')
    const data = {name: '盛镇梁'}
    response.send(JSON.stringify(data))
})

app.listen(8000, () => {
    console.log("8000端口监听中")
})
