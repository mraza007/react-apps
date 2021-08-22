import React, { Component } from 'react'
class Rand extends Component {
    constructor(props){
        super(props);
        this.state = {
            num:0,
            color:['purple','yellow','blue']
        
        }
        this.makeTime();
    }
    makeTime(){
        setInterval(() =>{
            let rand = Math.floor(Math.random()*this.props.maxNum)
            this.setState({num:rand})
        },1000)
    }
    render(){
        return (
            <div>
                <h1>You number is {this.state.color[this.state.num]} </h1>
            </div>
        )
    }
}

export default Rand;