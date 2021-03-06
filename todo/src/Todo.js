import React, { Component } from 'react'
class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing : false,
            task : this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    handleEdit(){
        this.setState({isEditing:!this.state.isEditing})
    }
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id,this.state.task)
        this.setState({ isEditing:false })

    }
    render(){
        let result;
        if(this.state.isEditing){
           result = (
           <div>
                <form onSubmit={this.handleUpdate}>
                    <input 
                    type="text" 
                    value={this.state.task}
                    onChange={this.handleChange}
                    name="task"
                    />
                    <button>Save</button>
                </form>
            </div>
           )
        }
        else {
            result = (
                    <div>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li>{this.props.task}</li>
                </div>
            )
        }
        return result
    }
}

export default Todo;