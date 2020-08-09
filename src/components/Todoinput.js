import React, {Component} from 'react';

export default class Todoinput extends Component {
	render() {
		const {item, handleChange, handleSubmit} = this.props;

		return (

				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend"></div>
						<input type="text" placeholder="Name..." className="form-control text-capitalize" value={item} onChange={handleChange}/>
						<button type="button" className="btn btn-outline-success"> Add Item</button>
					</div>

				</form>

		);
	}
}
