import React, { Component } from 'react';
import './list.css'

class Search extends Component {
    
    render() {
        const {users,isFirst,isLoading,err}=this.props;
        return (
        <div className="user-container">
            <div className="user-grid">                
                {   isFirst? <h2 className="tip">欢迎使用，请输入关键字搜索用户</h2>:
                    isLoading? <h2 className="tip">Loading……</h2>:
                    err? <p  style={{color:'red'}}>{err}</p>:
                    users.map((userObj)=>{
                        return(
                            <div key={userObj.id} className="user">
                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                <div className="user_protrait">
                                   <img alt="user_protrait" src={userObj.avatar_url} style={{width:'100%'}}></img> 
                                </div>
                            </a>  
                            <p className="username">{userObj.login}</p>    
                            </div>
                        )
                    })
                }   
            </div>
        </div>    

        );
    }
}

export default Search;