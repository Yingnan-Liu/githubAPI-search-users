import React, { Component } from 'react';
import './index.css'


class Footer extends Component {
    //全选checkbox的回调
    handleCheckAll=(event)=>{
        this.props.checkAllTodo(event.target.checked)//将全选/全不选 传给App
    }
    //清除所有已完成的任务
    handleClearAllDone=()=>{
        this.props.clearAllDone()
    }

    render() {
        const{todos}=this.props;
        //已完成的个数  统计数组中的信息
        const doneCount=todos.reduce((pre,current)=>{
            return pre+(current.done?1:0)  //current.done为真pre+1,为假pre+0
        },0)
        //全部任务的个数
        const total=todos.length
        return (
            <div>
                 <div className="todo-footer">
                    <label>
                        <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total&&total!==0?true:false}/>
                    </label>
                    <span>
                        <span>已完成{doneCount} / 全部{total}</span>
                    </span>
                    <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        );
    }
}

export default Footer;