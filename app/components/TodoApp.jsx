import React from 'react';
import * as Redux from "react-redux";
import * as actions from 'Action';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var uuId = require('node-uuid');
var moment = require('moment');
var TodoAPI = require('TodoAPI');



var TodoApp = React.createClass({

	onLogout(e){
	e.preventDefault();
	var {dispatch} = this.props;
	dispatch(actions.startLogout());

	},
	render(){
		return (
		<div>
		<div className="page-actions">
		<a href="#" onClick={this.onLogout}>Logout</a>
		</div>
			<h1 className="page-title">Todo App</h1>
			<div className="row">
				<div className="columns medium-6 large-4 small-centered">
					<div className="container">
					<TodoSearch />
					<TodoList/>
					<AddTodo/>

				</div>
				</div>
			</div>
		</div>
 
		);

	}

});
export  default Redux.connect()(TodoApp);
