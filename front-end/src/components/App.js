import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import Form from './Form'
import List from './List'
import Warning from './Warning'
import Title from './Title'

const INTERVAL = 1000

class App extends Component {

	state = {
		inputValue: "",
		tags: "",
		initialtodos: [
			{ value: 'A mind stretched by strange encounters can never return to its old dimensions.', tag: ['motivational', 'adventure']},
			{ value: 'Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.', tag: ['motivational', 'depressed']},
			{ value: 'Don’t worry, you are just 5 pivots away from monetising!', tag: ['motivational', 'startup']},
			{ value: 'Your birthday reminds me of the old Chinese scholar.. Yung No Mo.', tag: ['birthday', 'funny']},
			{ value: 'The older the fiddler, the sweeter the tune.', tag: ['birthday', 'elegant']},
			{ value: 'If music be the food of love, play on.', tag: ['love', 'music']},
			{ value: 'Women are meant to be loved, not to be understood.', tag: ['love', 'women']},
			{ value: 'Do not seek the because—in love there is no because, no reason, no explanation, no solutions.', tag: ['true', 'love']}
		],
		todos: [],
		warning: false
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
			.then((json) => {
				if (json.label === "neg") {
					this.setState({warning: true})
				}
				console.log(json)
			})
	}

	handleChange = (evt) => {
		clearTimeout(this.timeout)
		this.setState({ inputValue: evt.target.value, warning: false })
		if (this.state.inputValue.length > 1) {
			this.timeout = setTimeout(this.triggerChange, INTERVAL)
		} else {
			clearTimeout(this.timeout)
		}
	}

	handleSubmit = (evt) => {
		var input = this.state.inputValue
		evt.preventDefault()
		if (!input) {
			this.setState( {todos: this.state.initialtodos})
		} else {
			input = input.split(' ')
			if (input.length === 1) {
				var filteredList = this.state.initialtodos.filter(function(item) {
					return	item.tag.indexOf(input[0]) !== -1
				})
			} else {
				var filteredList = this.state.initialtodos.filter(function(item) {
					return	item.tag.indexOf(input[0]) !== -1 &&
							item.tag.indexOf(input[1]) !== -1
				})
			}
			this.setState( {todos: filteredList})
		}
		this.setState({ tags: this.state.inputValue, inputValue: '' })
		clearTimeout(this.timeout)
	}

	render() {
		return (
			<div className="App">
			<Title />
			<Form
			 	handleChange={this.handleChange}
				inputValue={this.state.inputValue}
				handleSubmit={this.handleSubmit}
			/>
			{ this.state.warning ? <Warning /> : null }
			<List
				tags={this.state.tags}
				todos={this.state.todos}
			/>
			</div>
		);
  }
}

export default App;
