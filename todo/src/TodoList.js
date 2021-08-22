import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this)
    }
    create(NewTodo){
        this.setState({
            todos:[...this.state.todos, NewTodo]
        })
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        }
        )
    }
    update(id,newTask){
        const UpdateTodos = this.state.todos.map(todo => {
            if (todo.id === id){
                return { ...todo , task:newTask}
            }
            return todo;
        })
        this.setState({ todos:UpdateTodos })
    }
    render(){
        const todo = this.state.todos.map(todo =>{
            return <Todo 
            key={todo.id} 
            id={todo.id}
            task={todo.task} 
            removeTodo={this.remove}
            updateTodo ={this.update}
            />
        })
        return(
            <div>
                <TodoForm createTodo={this.create}/>
                <h1>Todo List</h1>
                <ul>
                {todo}
                </ul>
            </div>
        )
    }
}

export default TodoList;