var React = require('react');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var uuId = require('node-uuid');
var moment = require('moment');
var TodoAPI = require('TodoAPI');



var TodoApp = React.createClass({


	render : function(){
		return (
		<div>
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
module.exports = TodoApp;
