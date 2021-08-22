import React, { Component } from 'react'
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            height:"",
            color:"",
            width:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.value] : evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault()
        this.setState({
            height:"",
            color:"",
            width:""
        })
    }   
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="color">Color</label>
                    <input
                    type="text"
                    name="color"
                    value={this.state.color}
                    id="color"
                    onChange={this.handleChange}
                    />
                    <label htmlFor="height">Height</label>
                    <input
                    type="text"
                    name="height"
                    value={this.state.height}
                    id="height"
                    onChange={this.handleChange}
                    />
                    <label htmlFor="width">Width</label>
                    <input
                    type="text"
                    name="width"
                    value={this.state.width}
                    id="width"
                    onChange={this.handleChange}
                    />
                <button>Change Color</button>
                </form>

            </div>
        )
    }
}

export default Form;