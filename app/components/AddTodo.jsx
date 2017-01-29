var React = require('react');


var AddTodo = React.createClass({
	onSubmit:function(e){
		e.preventDefault();
		
		var str = this.refs.item.value;
		if(str.length > 0){
		
			this.props.onAddTodo(str);
			this.refs.item.value = "";
			
		
		} else {
			this.refs.item.focus();
		}
		
	},
	render: function(){
		return (
		<div>
			<form onSubmit={this.onSubmit}>
			<input type="text" ref="item" placeholder="What do you need To Do" />
			<button className="button expanded">Add Item</button>
			</form>
		</div>
		);
	}
	
});
module.exports = AddTodo;