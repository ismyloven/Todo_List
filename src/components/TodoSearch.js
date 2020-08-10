import React, {Component} from 'react';

export default class  TodoSearch extends Component {
	render() {
		return (
			<div>
				<input type="text" placeholder="Search"
					   aria-label="Search"/>
			</div>
		);
	}
}
