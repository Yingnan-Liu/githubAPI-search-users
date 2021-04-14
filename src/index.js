//引入react核心库和ReactDOM
import React from 'react'  //es6中的模块语法
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'

//渲染App到页面
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)