import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'


class Header extends Component {
    handleKeyUp=(event)=>{
        const {keyCode,target}=event;
        //判断是否是回车按键
        if(keyCode!==13) return 
        //判断：添加的todo不能为空
        if(target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        // console.log('Header: ',event.target.value)
        //准备一个todo对象
        const todoObj={id:nanoid(),name:target.value,done:false}
        //将todoObj传递给App
        this.props.AddTodo(todoObj)


        //清空input框
        target.value=''
    }
    render() {
        return (
                 <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
        );
    }
}

export default Header;