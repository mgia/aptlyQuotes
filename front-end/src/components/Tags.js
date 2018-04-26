import React, { Component } from 'react';
import '../Components.css'

class Tags extends Component {

	giveTags(tags) {
		tags = tags.split(' ').map(function(tag) {
			return tag.charAt(0).toUpperCase() + tag.slice(1)
		})
		tags = tags.join(", ")
		return tags
	}

	render() {
		const tags = this.props.tags
		return (
			<div className="Tags">
				Tags:  { this.giveTags(tags) }
			</div>
		)
	}
}

export default Tags
