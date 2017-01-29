var React = require('react');
var TodoList = require('TodoList');


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
	
	render : function(){
		var {todos} = this.state;
		return (
		<div>
		<h1>Todo App</h1>
		<TodoList todos = {todos}/>
		</div>
		
		);
		
	}
	
});
module.exports = TodoApp;