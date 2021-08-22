import React, { Component } from 'react'
import axios from 'axios'

class Ajax extends Component {
    constructor(props){
        super(props)
            this.state = {
                quote:'Hey There'
            }
        
    }
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(res => {
            this.setState({
                quote:res.data
            })
        })
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <p>{this.state.quote}</p>
            </div>
        )
    }
}


export default Ajax