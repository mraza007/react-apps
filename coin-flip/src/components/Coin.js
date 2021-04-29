import React, { Component } from 'react'
import { rand } from './helper';
import Newcoin from './Newcoin';


class Coin extends Component {
    static defaultProps = {
        coin : [
            {side:"heads",imgSrc:"https://tinyurl.com/react-coin-heads-jpg"},
            {side:"tails",imgSrc:"https://www.pcgscoinfacts.com/UserImages/71009269r.jpg"}
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0
        }
        this.handclick = this.handclick.bind(this);
    }
    flip(){
        const newCoin = rand(this.props.coin);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads : st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails : st.nTails + (newCoin.side === "tails" ?  1 : 0)
            }
        })
    }

    handclick(){
        this.flip();
    }
    render(){
        return (
            <div className="CoinFlip">
                <h2>Coin Flip</h2>
                {this.state.currCoin && <Newcoin info={this.state.currCoin} />}
                <p>Out of {this.state.nFlips }, There have been {this.state.nHeads} Heads and {this.state.nTails} Tails</p>
                <button onClick={this.handclick}>Flip A Coin</button>
            </div>
        )
    }
}


export default Coin;