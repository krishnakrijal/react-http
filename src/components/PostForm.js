import React, { Component } from 'react';
import Axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }
    handler = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
   
    }
    onHandler = e =>{
        e.preventDefault();
        console.log(this.state)
        Axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const {userId,title,body} = this.state
        return (
            <div>
               <form onSubmit={this.onHandler}>
                   <div>
                       <input type='text' name='userId' value={userId} onChange={this.handler}/>
                   </div>
                   <div>
                       <input type='text' name='title' value={title} onChange={this.handler}/>
                   </div>
                   <div>
                       <input type='text' name='body' value={body} onChange={this.handler}/>
                   </div>
                   <button type='submit'>Submit</button>
                </form> 
            </div>
        );
    }
}

export default PostForm;