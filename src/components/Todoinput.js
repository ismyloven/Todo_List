import React, {Component} from 'react';

export default class Todoinput extends Component {
	render() {
		const {item, handleChange, handleSubmit,editItem} = this.props;

		return (

				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend"></div>
						<input type="text" placeholder="Name..." className="form-control text-capitalize" value={item} onChange={handleChange}/>
						<button type="submit"
								className={editItem ? "btn btn-outline-success":
									"btn btn-outline-primary"}>
							{editItem ? " Edit item" : "Add item"}
						</button>
					</div>

				</form>

		);
	}
}
