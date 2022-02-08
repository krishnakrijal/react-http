import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    handle = ()=>{
        this.setState(prevState =>{
          return{ count: prevState.count+1}
        }
        )
    }
    render() {
        return (
            <div>
               <button onClick={this.handle}>Click {this.state.count}</button> 
            </div>
        );
    }
}

export default ClassCounter;