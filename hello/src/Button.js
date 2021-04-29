import React, { Component } from 'react'
class Button extends Component {
    render(){
        return (
            <div>
            <h1>Button</h1>
            <button onClick={function(){
                alert('You Just Clicked me');
            }}>Click me to see</button>
            </div>
            )
    }
}

export default Button;