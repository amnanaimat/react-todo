var React = require('react');
var {connect} = require('react-redux');
var action = require('Action')


export var AddTodo = React.createClass({
	onSubmit:function(e){
		e.preventDefault();
		var {dispatch} = this.props
		var str = this.refs.item.value;
		if(str.length > 0){

			dispatch(action.startAddTodo(str))
			this.refs.item.value = "";


		} else {
			this.refs.item.focus();
		}

	},
	render: function(){
		return (
		<div className="container__footer">
			<form onSubmit={this.onSubmit}>
			<input type="text" ref="item" placeholder="What do you need To Do" />
			<button className="button expanded">Add Item</button>
			</form>
		</div>
		);
	}

});
export default connect()(AddTodo);
