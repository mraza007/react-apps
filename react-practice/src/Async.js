import React, { Component } from 'react'
import axios from 'axios';

class Async extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            location:'',
            followers:''
        }
    }
    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`
        let response = await axios.get(url)
        console.log(response.data)
        this.setState({
            name:response.data['name'],
            location:response.data['location'],
            followers:response.data['followers']

        })
    }
    render(){
        return(
            <div>
                <h1>Hello World {this.props.username}</h1>
                <h4>The Details are</h4>
                <ul>
                    <li>{this.state.name}</li>
                    <li>{this.state.location}</li>
                    <li>{this.state.followers}</li>

                </ul>
            </div>
        )
    }
}

export default Async;