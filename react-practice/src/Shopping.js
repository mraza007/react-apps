import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm'
import { v4 as uuidv4 } from 'uuid';


class Shopping extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[
                {name:"Milk",quantity:"2",id:uuidv4()},
                {name:"Eggs",quantity:"3",id:uuidv4()}
            ]
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(item){
        let newItem = {...item, id:uuidv4()}
        this.setState(st =>({
            items:[...st.items,newItem]
        }))
    }
    renderItems(){
        return (
                <ol>
                    {this.state.items.map(item =>(
                        <li key={item.key}>
                            {item.name} : {item.quantity} 
                        </li>
                    ))}
                </ol>
        )
    }
    render(){
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
            <ShoppingListForm addItem={this.addItem}/>
            </div>
        )
    }
}


export default Shopping;