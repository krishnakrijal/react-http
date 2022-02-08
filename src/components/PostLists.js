import React, { Component } from 'react';
import Axios from 'axios';

class PostLists extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[],
            errorMsg:''
        }
    }
    componentDidMount(){
   Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        })
        .catch(error =>{
            console.log(error)
            this.setState({
                errorMsg:'Something error in there'
            })

        })
    }
    
    render() {
        const { posts,errorMsg } = this.state
        return (
            <div>
              Postal List  
              {
                  posts.length ?
                  posts.map(post => <div key={post.id}> {post.title} </div>):null
              }
              {
                  errorMsg ? <div>{ errorMsg}</div>:null
              }
            </div>
        );
    }
}

export default PostLists;