import React, { Component } from 'react';

const INTERVAL = 1000
const request = require('request')
class Form extends Component {

	state = {
		inputValue: ""
	}

	timeout = null

	callback = (res) => {
		console.log(res)
	}

	triggerChange = () => {
		var options = {
			url: 'http://text-processing.com/api/sentiment/',
			body: 'text=' + this.state.inputValue,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		};
		fetch(options.url, options)
			.then((res) => res.json())
			.then((json) => console.log(json));
		console.log("send me")
	}

	handleChange = (evt) => {
		clearTimeout(this.timeout)
		this.setState({ inputValue: evt.target.value })
		this.timeout = setTimeout(this.triggerChange, INTERVAL)
	}

	render() {
		return (
			<div className="Form">
				<form>
					<input
						placeholder="Type something..."
						onChange={(evt) => this.handleChange(evt)}
						value={this.state.inputValue}
					/>
				</form>
			</div>
		)
	}

}

export default Form;
// 