import React, { Component } from 'react'
class ShoppingListForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            quantity:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item">Item Name</label>
                    <input
                    name="name"
                    id="item"
                    type="text"
                    placeholder="Enter the Name of the Item"
                    value= {this.state.value}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="quant">Item Quantity</label>
                    <input
                    name="quantity"
                    id="quant"
                    type="text"
                    placeholder="Enter the Name of the Item"
                    value= {this.state.value}
                    onChange={this.handleChange}
                    />
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default ShoppingListForm;