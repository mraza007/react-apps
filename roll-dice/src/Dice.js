import React, { Component } from 'react'
import './Dice.css';
import '@fortawesome/fontawesome-free/js/all.js';


class Dice extends Component {
    render(){
        // let dice = `fas fa-dice-${this.props.face} fa-9x`
        return <i className={`Dice fas fa-dice-${this.props.face}`}></i>;
    }
}

export default Dice;