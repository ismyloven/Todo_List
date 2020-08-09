import React, {Component} from 'react';
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";


import "bootstrap/dist/css/bootstrap-grid.min.css";


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            id:0,
            item:" ",
            editItem:false
        }
    }
    handleChange = (event) => {
        this.setState({
            item: event.target.value
        })
    }
    handleSubmit = (event) => {
event.preventDefault();
    }

render() {


    return (
    <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
                <div className="">
                <h2 className="text-capitalize text-center">To Do List </h2>

                </div>
                <Todoinput item={this.state.item}
                           handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit} />
                <TodoList/>
            </div>
        </div>
    </div>

  );
}
}
export default App;
