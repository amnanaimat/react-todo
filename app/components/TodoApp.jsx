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
				text: 'Cooking Food'
			},
			{
				id: uuId(),
				text: 'Cleaning House'
			},
			{
				id: uuId(),
				text: "Fruits cutting"
				
			},
			{
				id: uuId(),
				text:'watxhing drama'
			}
			
			]
			
		}
		
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
			{id: uuId(), text: item}
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
		<TodoList todos = {todos}/>
		<AddTodo onAddTodo={this.addNewTodo}/>
		
		</div>
		</div>
		</div>
		
		);
		
	}
	
});
module.exports = TodoApp;