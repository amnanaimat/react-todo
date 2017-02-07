var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
import {AddTodo} from 'AddTodo';
var actions =  require('Action');


describe('AddTodo',()=>{

	it('should Exist',()=>{

		expect(AddTodo).toExist();
	});

	it('should dispatch with valid input field',()=>{
		var spy = expect.createSpy();
		var todo = 'abc';
		var action = actions.startAddTodo(todo)
		var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);

		var $el = $(ReactDOM.findDOMNode(addtodo));
		addtodo.refs.item.value = todo;
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(action);
	});
	it('should not dispatch with invalid input field',()=>{
		var spy = expect.createSpy();
		var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);

		var $el = $(ReactDOM.findDOMNode(addtodo));
		addtodo.refs.item.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});

});
