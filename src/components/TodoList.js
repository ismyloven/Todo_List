import React, {Component} from 'react';
import TodoItem from "./TodoItem";

//css style

import "./TodoList/Todolist.css";


export default class TodoList extends Component {
	render() {
		const {items, clearList, handleDelete, handleEdit, handleFavorite, handleCkeck} =this.props;
		return (
			<ul className="list-group my-5">
				{items.map(item =>{
						return <TodoItem
							key={item.id}
							item={item}
							handleDelete={()=> handleDelete(item.id)}
							handleEdit={()=> handleEdit(item.id)}
							handleFavorite={()=> handleFavorite(item)}
							handleCkeck={()=> handleCkeck(item)}
						/>;

					})}


<div className="buttonposition">
				<button type="button" className="btn btn-outline-success clearitem" onClick={clearList}> Clear items</button>
</div>
</ul>
		);
	}
}

