import React, { Component } from 'react'

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            score:20,
            gameOver: false
        }
    }
    
    render(){
        const {name} = this.props;
        const {score,gameOver} = this.state;
        return(
            <div>
                <h1>Hello {name} and Your Score is {score}</h1>
            </div>
        );
    }
}

export default Game;