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
	
});
