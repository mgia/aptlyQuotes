import React, { Component } from 'react';
import '../Components.css'

import Tags from './Tags'
import Task from './Task'

class List extends Component {
	render() {
		return (
			<div className="List">
				{ this.props.todos.map((todo, index) => {
					return (
						<Task
							key={index}
							todo={todo}
						/>
					)
					})}
				{ this.props.tags ? <Tags tags={this.props.tags}/> : null }
			</div>
		)
	}
}

export default List
