import React, { Component } from 'react';
import '../Components.css'
// const request = require('request')

class Form extends Component {
	render() {
		return (
			<div className="Form">
				<form className="Div" onSubmit={(evt) => this.props.handleSubmit(evt)}>
					<input className="Textbox"
						placeholder="Send a message.."
						onChange={(evt) => this.props.handleChange(evt)}
						value={this.props.inputValue}
					/>
				</form>
			</div>
		)
	}

}

export default Form;
