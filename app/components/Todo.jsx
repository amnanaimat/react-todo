var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function(){
		var {id,text,done,createdAt,completedAt} = this.props;
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
			<div onClick={()=>{
				
				this.props.onToggle(id);
			}}>
			<input type="checkbox" checked={done} />
			 <p>{text}</p>
			 <p>{renderDate()}</p>
			</div>
		
		);
		
	}
	
});
module.exports = Todo;