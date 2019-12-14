//这里的node代码会使用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App'

//启动服务器
const app = express()
//在express中支持静态资源
app.use(express.static('public'))
//监听根路由
app.get('/',(req,res)=>{
    // const Page = <App title="开课吧"></App>
    //把react组件，解析成html
    const content = renderToString(App)
    res.send(`
    <html>
        <head>
            <meta charset="utf-8" />
            <title>react ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/bundle.js"></script>
        </body>
    </html>
    `)
})
app.listen(9093,()=>{
    console.log('监听完毕')
})