var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var TodoList = require('TodoList');
var Todo = require('Todo');



describe('TodoList',()=>{
	
	it('should Exist',()=>{
		
		expect(TodoList).toExist();
	});
	it('should render on todo Component for eact todo item',()=>{
		var todos = [
			{
				id: 1,
				text: 'Cooking Food'
			},
			{
				id: 2,
				text: 'Cleaning House'
			},
			{
				id: 3,
				text: "Fruits cutting"
				
	}];
		
		var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />); 
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo); 
		expect(todosComponents.length).toBe(todos.length);
	});
	
});
