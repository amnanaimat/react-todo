var React = require('react');
var {connect} = require('react-redux');
var action = require('Action');
var moment = require('moment');

export var Todo = React.createClass({
	render: function(){
		var {id,text,done,createdAt,completedAt,dispatch} = this.props;
		var todoClassName = done? 'todo todo-done': 'todo';
		var renderDate = ()=>{

			if(done){
				var msg = "Completed :";
				var timestamp = completedAt;
			return msg + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
			} else {
				var msg = "Created :";
			var timestamp = createdAt;
			return msg + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
			}

		};
		return(
			<div className={todoClassName} onClick={()=>{
				console.log(done);
				dispatch(action.startToggleTodo(id,!done));
			}}>
			<div>
				<input type="checkbox" checked={done} />
			</div>
			<div>
			 <p>{text}</p>
			 <p className="todo_subtext">{renderDate()}</p>
			</div>
			</div>

		);

	}

});
export default connect()(Todo);
