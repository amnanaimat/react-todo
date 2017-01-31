var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
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
	handleToggle: function(id){
		var updatedTodos = this.state.todos.map((todo)=>{
			if(todo.id === id){
				todo.done = !todo.done;
				todo.completedAt = todo.done? moment().unix():undefined;
			}
			return todo;
		});
		this.setState({todos: updatedTodos});
	},
	
	onSearchHandler:function(showCompleted,showText){
		this.setState({
			showCompleted: showCompleted,
			showText: showText.toLowerCase()
		})
		console.log(showCompleted,showText);
		
	},
	addNewTodo: function(item){
	
		this.setState({
			todos: [...this.state.todos,
			{id: uuId(),
			text: item,
			done: false,
			createdAt: moment().unix(),
			completedAt: undefined
			}
			]});
	},
	componentDidUpdate:function(){
		
		TodoAPI.setTodos(this.state.todos);
	},
	
	
	render : function(){
		var {todos,showCompleted,showText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,showText);
		return (
		<div>
		<div className="row">
			<div className="columns medium-6 large-4 small-centered">
		<h1>Todo App</h1>
		<TodoSearch onSearch={this.onSearchHandler}/>
		<TodoList todos = {filteredTodos} handleToggle={this.handleToggle}/>
		<AddTodo onAddTodo={this.addNewTodo}/>
		
		</div>
		</div>
		</div>
		
		);
		
	}
	
});
module.exports = TodoApp;