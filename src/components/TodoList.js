import React, {Component} from 'react';
import TodoItem from "./TodoItem";
//css style

import "./TodoList/Todolist.css";


class TodoList extends Component {
	render() {
		return (
			<ul className="list-group my-5">
				<TodoItem/>
<div className="buttonposition">
				<button type="button" className="btn btn-outline-success clearitem"> Clear items</button>
</div>
</ul>
		);
	}
}

export default TodoList;