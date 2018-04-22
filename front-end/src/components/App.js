import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import Form from './Form'
import List from './List'

// const INTERVAL = 1000

class App extends Component {

	state = {
		inputValue: "",
		tags: "",
		initialtodos: [
			{ value: 'A mind stretched by strange encounters can never return to its old dimensions.', tag: 'motivational'},
			{ value: 'Don’t worry, you are just 5 pivots away from monetising!', tag: 'motivational'},
			{ value: 'Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.', tag: 'depressed'}
		],
		todos: [
			{ value: 'A mind stretched by strange encounters can never return to its old dimensions.', tag: 'motivational'},
			{ value: 'Don’t worry, you are just 5 pivots away from monetising!', tag: 'motivational'},
			{ value: 'Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.', tag: 'depressed'}
		]
	}

	timeout = null

	triggerChange = () => {
		var options = {
			url: 'http://text-processing.com/api/sentiment/',
			method: 'POST',
			'text': this.props.inputValue,
			mode: 'no-cors'
		}
		fetch(options)
			.then(function (res) {
				return res;
			})
			.then(function (data) {
				console.log(data)
			})
			// .catch(function () {
			// 	console.log("Error")
			// })
	}

	handleChange = (evt) => {
		// clearTimeout(this.timeout)
		this.setState({inputValue: evt.target.value })
		// this.timeout = setTimeout(this.triggerChange, INTERVAL)
	}

	handleSubmit = (evt) => {
		evt.preventDefault()
		console.log(this.state.inputValue)
		if (!this.state.inputValue) {
			this.setState( {todos: this.state.initialtodos})
		} else {
			var filteredList
			this.setState( {todos: filteredList})
		}
		this.setState({ tags: this.state.inputValue, inputValue: '' })
	}

	render() {
		return (
			<div className="App">
			<Form
			 	handleChange={this.handleChange}
				inputValue={this.state.inputValue}
				handleSubmit={this.handleSubmit}
			/>
			<List
				tags={this.state.tags}
				todos={this.state.todos}
			/>
			</div>
		);
  }
}

export default App;
