import React, { Component } from 'react';
import './index.css'


class Item extends Component {
    state={mouse:false}//标识鼠标移入移出
    //鼠标移入移出的回调
    handleMouse=(flag)=>{
        return ()=>{
            //console.log(flag)
            this.setState({mouse:flag})
        }
    }
    //勾选的回调
    handelCheck=(id)=>{
        return(event)=>{
           this.props.updateTodo(id,event.target.checked)
        }
    }

    //删除一个item的回调   拿到id然后让App删掉这个元素
    handleDelete=(id)=>{
        //console.log('删除',id)
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }
    }


    render() {
        const {id,name,done}=this.props
        const {mouse}=this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
                <label>
                    <input type="checkbox" checked={done} onChange={this.handelCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;