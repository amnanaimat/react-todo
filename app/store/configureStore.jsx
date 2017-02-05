var redux = require('redux');
var {searchTextReducer,showCompeletedReducer,addTodoReducer} = require('reducers');

export var configure =()=>{

	var reducer = redux.combineReducers({
	searchText : searchTextReducer,
	showCompeleted : showCompeletedReducer,
	addTodo: addTodoReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


return store;
}
