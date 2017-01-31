
var expect = require('expect');
var TodoAPI = require('TodoAPI');
describe('TodoAPI',()=>{
	
	it('should Exist',()=>{
		
		expect(TodoAPI).toExist();
	});
	
	describe('filterTodos',()=>{
		var todos = [
		{
			id:1,
			text: "Some text",
			done: true
		},
		{
			id:2,
			text: "drinking",
			done: true
		},
		{
			id:3,
			text: "Eating Something",
			done: false
		},
		];
		
	it('should search todos',()=>{
		
		var filteredTodos = TodoAPI.filterTodos(todos,true,'');
		expect(filteredTodos.length).toBe(todos.length);
	});
	it('should search todos with specific text',()=>{
		
		var filteredTodos = TodoAPI.filterTodos(todos,true,'some');
		expect(filteredTodos.length).toBe(2);
	});	
	it('should return All todos when showComplted is true',()=>{
		
		var filteredTodos = TodoAPI.filterTodos(todos,true,'');
		expect(filteredTodos.length).toBe(todos.length);
	});
	it('should return uncompleted todos when showComplted is false',()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos,false,'');
			expect(filteredTodos.length).toBe(1);
		});
		
		
			
			it('should return All Sorted todos',()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos,false,'');
			expect(filteredTodos[0].done).toBe(false);
		});	
	});
});