var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuId = require('node-uuid');



var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			showText: "",
			todos:[
			{
				id: uuId(),
				text: 'Cooking Food',
				done: true
			},
			{
				id: uuId(),
				text: 'Cleaning House',
				done: false
			},
			{
				id: uuId(),
				text: "Fruits cutting",
				done: false
				
			},
			{
				id: uuId(),
				text:'watxhing drama',
				done: false
			}
			
			]
			
		}
		
	},
	handleToggle: function(id){
		var updatedTodos = this.state.todos.map((todo)=>{
			if(todo.id === id){
				todo.done = !todo.done;
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
			{id: uuId(), text: item, done: false}
			]});
	},
	
	
	render : function(){
		var {todos} = this.state;
		return (
		<div>
		<div className="row">
			<div className="columns medium-6 large-4 small-centered">
		<h1>Todo App</h1>
		<TodoSearch onSearch={this.onSearchHandler}/>
		<TodoList todos = {todos} handleToggle={this.handleToggle}/>
		<AddTodo onAddTodo={this.addNewTodo}/>
		
		</div>
		</div>
		</div>
		
		);
		
	}
	
});
module.exports = TodoApp;