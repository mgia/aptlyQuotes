import React, { Component } from 'react'
import Icon from 'react-icons/lib/fa/exclamation-circle'
import '../Components.css'

class Warning extends Component {
	render() {
		return (
			<div className="Warning">
				<Icon size="25"/>   Are you sure you want to type that?
			</div>
		)
	}
}

export default Warning
