import React, { Component } from 'react';
import Dice from './Dice';
import '@fortawesome/fontawesome-free/js/all.js';


class RollDice extends Component {
    static defaultProps = {
        sides : ["one","two","three","four","five","six"]
    };
    constructor(props){
        super(props);
        this.state = { Dice_1: "four", Dice_2: "one" }
        this.rand = this.rand.bind(this);
    }
    rand(){
        const rand_1 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
        const rand_2 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]

        this.setState({Dice_1 :rand_1, Dice_2:rand_2 });
    }
    render(){
        return(
            <div>
                <Dice face={this.state.Dice_1}/>
                <button onClick={ this.rand }> Click Me</button>
            </div>
        )
    }
}

export default RollDice;