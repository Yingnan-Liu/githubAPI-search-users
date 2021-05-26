import axios from 'axios';
import React, { Component } from 'react';
import './search.css'

class List extends Component {
    search=()=>{
        //获取用户输入内容
        const{inputElement:{value:keyword}}=this;
        console.log(keyword);
        //发送请求前通知App更新状态  调用状态更新函数
        this.props.updateAppState({isFirst:false,isLoading:true})
        //发送网络请求
        axios.get( `https://api.github.com/search/users?q=${keyword}`)
        .then(response=>{   
         //请求成功后通知App更新状态
          this.props.updateAppState({isLoading:false,users:response.data.items})
          
        },error=>{
            //请求失败后通知App更新状态
            //注意这里
            this.props.updateAppState({isLoading:false,err:error})
        })
    }
    render() {
        return ( 
            <div className="search-container">
                <h3 className="title">Search for Users</h3>
                <div className="searchArea">
                    <input  ref={(c)=>{this.inputElement=c}} className="searchInput"></input>
                    <button onClick={this.search} className="button">search</button>
                </div>
            </div>        
        );
    }
}

export default List;