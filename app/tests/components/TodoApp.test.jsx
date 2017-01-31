var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var TodoApp = require('TodoApp');



describe('TodoApp',()=>{
	
	it('should Exist',()=>{
		
		expect(TodoApp).toExist();
	});
	it('should Call addNewTodo Function',()=>{
		var todoapp = TestUtils.renderIntoDocument(<TodoApp />);
		todoapp.setState({todos: []});
		
		todoapp.addNewTodo("test text");
		expect(todoapp.state.todos[0].text).toBe("test text");
		
		
	});
	it('should Call handleToggle proper',()=>{
		var todoData = {id:11, text: "text Data",done: false, createdAt:0, completedAt: undefined};
		var todoapp = TestUtils.renderIntoDocument(<TodoApp />);
		todoapp.setState({todos: [todoData]});
		expect(todoapp.state.todos[0].done).toBe(false);
		
		todoapp.handleToggle(todoData.id);
		
		expect(todoapp.state.todos[0].done).toBe(true);

		expect(todoapp.state.todos[0].completedAt).toBeA('number');
		todoapp.handleToggle(todoData.id);
		expect(todoapp.state.todos[0].done).toBe(false);
		expect(todoapp.state.todos[0].completedAt).toNotExist();
		
		
	});
	
});
