import React, {Component} from 'react';
import Todoinput from "../components/Todoinput/Todoinput";
import TodoList from "../components/TodoList/TodoList";
import TodoSearch from "../components/TodoSearch/TodoSearch";

//Style

import "./App.css";


//Library

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "react-uuid";


class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: "",
		editItem: false,

	};


    handleCkeck = i => {
        const modifiedItems = this.state.items.map(item => {
            if (item.id === i.id) {
                return {...item, isDone: !item.isDone}
            }
            return {...item}
        });

        this.setState({
            items: modifiedItems
        });


    };



	handleFavorite = i => {
		const modifiedItems = this.state.items.map(item => {
			if (item.id === i.id) {
				return {...item, isFavorite: !item.isFavorite}
			}
			return {...item}
		});

		this.setState({
			items: modifiedItems.sort((x, y) =>
				(x.isFavorite === y.isFavorite) ? 0 : x.isFavorite ? -1 : 1
	)
	});


	};


	handleChange = e => {
		this.setState({
			item: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		if (!this.state.item) {
			return
		};



		const newItem = {
			id: this.state.id,
			title: this.state.item,
			isFavorite: false,
            isDone: false
		};


		const updatedItems = [...this.state.items, newItem];

		this.setState({
			items: updatedItems,
			item: "",
			id: uuid(),
			editItem: false
		});

	};
	clearList = () => {
		this.setState({
			items: []
		});
	};

	handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id);
		this.setState({
			items: filteredItems
		});
	};
	handleEdit = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id);

		const selectedItem = this.state.items.find(item => item.id === id);


		this.setState({
			items: filteredItems,
			item: selectedItem.title,
			editItem: true,
			id: id
		});
	};

	render() {


		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<div className="">
							<div className="text-capitalize text-center todoSearch"><span className="todolist">To Do List</span>
								<TodoSearch/></div>

						</div>
						<Todoinput item={this.state.item}
								   handleChange={this.handleChange}
								   handleSubmit={this.handleSubmit}
								   editItem={this.state.editItem}
						/>

						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
							handleFavorite={this.handleFavorite}
                            handleCkeck ={this.handleCkeck}
						/>

					</div>
				</div>
			</div>

		);
	}
}

export default App;
