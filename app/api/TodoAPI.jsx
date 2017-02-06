var $ = require("jQuery");
module.exports = {
	setTodos:function(todos){
		if($.isArray(todos)){
			localStorage.setItem('todos',JSON.stringify(todos));
			return todos
		}

	},
	getTodos:function(){

		var stringTodos = localStorage.getItem('todos');
		var todos = [];
		try{
			todos = JSON.parse(stringTodos);

		} catch(e){}
		if($.isArray(todos)){
			return todos
		} else{
		return [];
		}
	},
	filterTodos:function(todos,showCompleted,searchText){
	console.log(todos);
		var filteredTodos = todos;
		filteredTodos = todos.filter((todo)=>{
			if(showCompleted){
			return todo;
		} else {
			return !todo.done
		}
		});

		filteredTodos = filteredTodos.filter((todo)=>{
		var text = todo.text.toLowerCase();

		return searchText.length === 0 || text.indexOf(searchText)> -1;
		});

		filteredTodos.sort((a,b)=>{
			if(!a.done && b.done){
				return -1;
			} else if(a.done && !b.done){
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;

	}

}
