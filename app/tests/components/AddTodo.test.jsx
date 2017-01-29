var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var AddTodo = require('AddTodo');



describe('AddTodo',()=>{
	
	it('should Exist',()=>{
		
		expect(AddTodo).toExist();
	});
	
	it('should called with valid input field',()=>{
		var spy = expect.createSpy();
		var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		
		var $el = $(ReactDOM.findDOMNode(addtodo));
		addtodo.refs.item.value = 'abc';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith('abc');
	});
	it('should not called with invalid input field',()=>{
		var spy = expect.createSpy();
		var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		
		var $el = $(ReactDOM.findDOMNode(addtodo));
		addtodo.refs.item.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
	
});
