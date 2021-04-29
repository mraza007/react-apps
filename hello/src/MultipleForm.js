import React, { Component } from 'react'
class MultipleForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            email: "",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handSubmit = this.handSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({ [evt.target.name]:evt.target.value })
    }
    handSubmit(evt){
        evt.preventDefault();
        alert(`You have typed ${this.state.username} and ${this.state.email}`)
    }
    render(){
        return (
            <div>
                <h1>A Form with Multiple Input</h1>
                <form onSubmit={this.handSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input
                    name='username'
                    id="username"
                    type='text'
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    <input
                    name='email'
                    type='email'
                    placeholder='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <input
                    name='password'
                    type='password'
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default MultipleForm;