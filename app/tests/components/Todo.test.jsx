var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var Todo = require('Todo');



describe('Todo',()=>{
	
	it('should Exist',()=>{
		
		expect(Todo).toExist();
	});
	
	it('should  call OnToggle when todo is clciked',()=>{
		
		var todoData = {id:111, text: "text Data",done: false};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		
		var $el = $(ReactDOM.findDOMNode(todo));
		//addtodo.refs.item.value = '';
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(111);
	});
	
});
