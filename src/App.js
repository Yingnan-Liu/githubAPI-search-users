import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

import './App.css'

class App extends Component {
    //状态在哪里，操作状态的方法就在哪里
    state={todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'代码',done:false},
    ]}
    //用于添加一个todo,接受的参数是todo对象，(将此方法通过props传递给子组件Header，并通过Header组件中的调用传回来
    AddTodo=(todoObj)=>{       
        //获取原todos
        const {todos}=this.state;
        //追加一个todo
        const newTodos=[todoObj,...todos];
        //更新状态
        this.setState({todos:newTodos})
    }
    //用于更新一个todo对象 ListItem
    updateTodo=(id,done)=>{
        //获取状态中的todos
        const {todos}=this.state;
        const newTodos=todos.map((todoObj)=>{
            //遍历每个元素查找对应的id，更改done关键字的值
            if(todoObj.id===id) return {...todoObj,done:done}
            else return todoObj;
        }) 
        this.setState({todos:newTodos})
    }

    //用于删除一个todo对象 ListItem
    deleteTodo=(id)=>{
        const {todos}=this.state;
        //删除指定id的todo对象
        const newTodos=todos.filter((todoObj)=>{
            return todoObj.id!==id
        })
        //更新状态：
        this.setState({todos:newTodos})    
    }
    //用于全选 Footer //done是Footer中的event.target.checked
    checkAllTodo=(done)=>{    
        const {todos}=this.state;
        const newTodos=todos.map((todoObj)=>{
           return {...todoObj,done:done}
        }) 
        //更新状态：
        this.setState({todos:newTodos})
    }
    //清除所有已完成的--Footer
    clearAllDone=()=>{
        const {todos}=this.state;
        const newTodos=todos.filter((todoObj)=>{
            return todoObj.done===false
        })
        this.setState({todos:newTodos})
    }
    
    render() {
        const {todos}=this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header AddTodo={this.AddTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        );
    }
}

export default App;
