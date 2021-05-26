import React,{ Component } from 'react'
// import axios from 'axios'
import Search from './components/Search'
import List from './components/List'
import './App.css'


class App extends Component {
    state={
        users:[],//初始化状态 users为数组类型
        isFirst:true,
        isLoading:false,
        err:''
    } 
    //更新APP的state
    updateAppState=(stateObj)=>{
        this.setState(stateObj) //是对象就直接写 不是对象要加{}
    }
    
    render() {
        return (
            <div className="app">                
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state} />
            </div>
        );
    }
}

export default App;