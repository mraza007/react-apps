import React, { Component } from 'react'
import Form from './Form'

class FormBox extends Component {
    static defaultProps = {
        height:"10px",
        width:"20px",
        backgroundColor:'black'
    }
    render(){
        return(
            <div>
                <h1>Color Box Form</h1>
                <div style={{backgroundColor:this.props.backgroundColor , height:this.props.height , width:this.props.width}}>
                </div> 
                <button>X</button>
                <Form/>
            </div>
        )
    }
}

export default FormBox;