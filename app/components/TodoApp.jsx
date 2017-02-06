var React = require('react');
//var TodoList = require('TodoList');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
var TodoSearch = require('TodoSearch');
var uuId = require('node-uuid');
var moment = require('moment');
var TodoAPI = require('TodoAPI');



var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			showText: "",
			todos:TodoAPI.getTodos()

		}

	},

	onSearchHandler:function(showCompleted,showText){
		this.setState({
			showCompleted: showCompleted,
			showText: showText.toLowerCase()
		})
		console.log(showCompleted,showText);

	},
	componentDidUpdate:function(){

		TodoAPI.setTodos(this.state.todos);
	},


	render : function(){
		var {todos,showCompleted,showText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,showText);
		return (
		<div>
			<h1 className="page-title">Todo App</h1>
			<div className="row">
				<div className="columns medium-6 large-4 small-centered">
					<div className="container">
					<TodoSearch onSearch={this.onSearchHandler}/>
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
