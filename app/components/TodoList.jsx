var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function(){
		var {todos,handleToggle} = this.props;
		var renderTodo = ()=>{
			if(todos.length ===0){
				return (
				<p className="container_message">Nothing to Do</p>
				)
			}
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