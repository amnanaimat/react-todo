var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
import {TodoSearch} from 'TodoSearch';



describe('TodoSearch',()=>{

	it('should Exist',()=>{

		expect(TodoSearch).toExist();
	});

	it('should dispatch SET_SEARCH_TEXT when input field changed',()=>{
		var spy = expect.createSpy();
		var searchText = 'abc';
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

		//var $el = $(ReactDOM.findDOMNode(todosearch));
		todosearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todosearch.refs.searchText);
		var action ={type: "SET_SEARCH_TEXT",
	  searchText: searchText};
		expect(spy).toHaveBeenCalledWith(action);
	});
	it('should dispatch TOGGLE_SHOW_COMPLETED with proper Checked Value',()=>{
		var spy = expect.createSpy();
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

		//var $el = $(ReactDOM.findDOMNode(todosearch));
		todosearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todosearch.refs.showCompleted);
		var action ={
			type: 'TOGGLE_SHOW_COMPLETED'
		};
		expect(spy).toHaveBeenCalledWith(action);
	});


});
