import React, { Component } from 'react';

// const request = require('request')

class Form extends Component {
	render() {
		return (
			<div className="Form">
				<form onSubmit={(evt) => this.props.handleSubmit(evt)}>
					<input
						placeholder="Type something..."
						onChange={(evt) => this.props.handleChange(evt)}
						value={this.props.inputValue}
					/>
				</form>
			</div>
		)
	}

}

export default Form;
