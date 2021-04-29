import React, { Component } from 'react';

export class Icons extends Component {
	static defaultProps = {
		options : ["angry","dice","at","button","cloud"]
	}
	constructor(props){
		super(props);
		this.state = {icons:[]}
		this.addIcon = this.addIcon.bind(this);
	}
	addIcon(){
		let icns = this.props.options[Math.floor(Math.random()* this.props.options.length)];
		this.setState({icons:[...this.state.icons,icns]})

	}
	render() {
		const ic = this.state.icons.map(i => <i className={`fas fa-${i}`}/>);
		console.log(ic);
		return (
			<div>
				<h1>Here Are Your Icons: {ic}</h1>
				<button onClick={this.addIcon}>Click Here </button>
				
			</div>
		);
	}
}

export default Icons;