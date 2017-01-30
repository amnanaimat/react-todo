var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function(){
		var {todos,handleToggle} = this.props;
		var renderTodo = ()=>{
			return todos.map((todo)=>{
				return <Todo key={todo.id} {...todo} onToggle={handleToggle}/>
				
			});
			
		};
		return(
			<div>
			{renderTodo()}
			</div>
		
		);
		
	}
	
});
module.exports = TodoList;