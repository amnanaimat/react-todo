var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var moment = require('moment');
import * as actions from 'Action';
import {Todo} from 'Todo';


describe('Todo',()=>{

	it('should Exist',()=>{

		expect(Todo).toExist();
	});

	it('should  TOGGLE_TODO when todo is clicked',()=>{

		var todoData = {id:111,done: false};

		var action  = actions.startToggleTodo(todoData.id,!todoData.done);
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

		var $el = $(ReactDOM.findDOMNode(todo));
		//addtodo.refs.item.value = '';
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(action);
	});

});
