import React, { Component } from 'react'
import './Box.css';
import { choice } from './helper';


class Box extends Component {
    static defaultProps = {
        allColors : ['purple','yellow','mangenta','black','blue','orange','gray','cyan']
    }
    constructor(props){
        super(props);
        this.state = { color:choice(this.props.allColors) }
        this.handleClick = this.handleClick.bind(this);
    }
    randColor(){
        let newColor;
        do {
            newColor = choice(this.props.allColors)
        }
        while (newColor === this.state.color)
    this.setState({color:newColor})

    }
    handleClick(){
        this.randColor();
    }
    render(){
        return (
            <div className="Box" style={{ backgroundColor:this.state.color }} onClick={this.handleClick}>
            </div>
        )
    }
}

export default Box;