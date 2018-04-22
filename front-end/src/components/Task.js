import React, { Component } from 'react'

class Task extends Component {
	render() {
		return (
			<div className="Task">
				<span style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
					{this.props.todo.value}
				</span>
			</div>
		)
	}
}

export default Task
