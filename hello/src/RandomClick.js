import React, { Component } from 'react'

class RandomClick extends Component {
    constructor(props){
        super(props);
        this.state = { num: 1 };
        this.rand = this.rand.bind(this);
    }
    rand(e){
        let randNum = Math.floor(Math.random() * 10);
        this.setState({num:randNum});
    }
    render(){
        return (
            <div>
                <h1>{this.state.num === 7 ? "You WINN" : "Your Number is: "+  this.state.num} </h1>
                { this.state.num != 7 && <button onClick={this.rand}>Click Me</button> }
            </div>
        )
    }
}

export default RandomClick;