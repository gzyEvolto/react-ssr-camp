import React from 'react'
import ReactDom from 'react-dom'

import App from '../src/App'

//注水 render既做dom初始化又做事件监听 浏览器端html已经渲染好
//客户端入口 
ReactDom.hydrate(App,document.getElementById('root'))