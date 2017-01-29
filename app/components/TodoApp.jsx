var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');



var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos:[
			{
				id: 1,
				text: 'Cooking Food'
			},
			{
				id: 2,
				text: 'Cleaning House'
			},
			{
				id: 3,
				text: "Fruits cutting"
				
			},
			{
				id: 4,
				text:'watxhing drama'
			}
			
			]
			
		}
		
	},
	addNewTodo: function(item){
		console.log(item);
		//var newListObj = {id: this.state.todos.length, text: item};
		//var newTodos = this.state.todos.push(newListObj);
		
		//this.setState({todos: newTodos});
	},
	
	
	render : function(){
		var {todos} = this.state;
		return (
		<div>
		<div className="row">
			<div className="columns medium-6 large-4 small-centered">
		<h1>Todo App</h1>
		<TodoList todos = {todos}/>
		<AddTodo onAddTodo={this.addNewTodo}/>
		</div>
		</div>
		</div>
		
		);
		
	}
	
});
module.exports = TodoApp;