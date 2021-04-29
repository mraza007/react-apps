import React, { Component } from 'react'

class Increment extends Component {
    constructor(props){
        super(props);
        this.state = { num: 0 }
        this.double = this.double.bind(this)
    }
    increment(currState){
        return { num:currState.num + 2}
    }
    double(){
        this.setState(this.increment)
    }
    render(){
        return(
            <div>
                <h1>This is a Number: {this.state.num} </h1>
                <button onClick={this.double}>Click me to increment</button>
            </div>
        )
    }
}

export default Increment;