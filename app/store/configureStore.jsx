var redux = require('redux');
var {searchTextReducer,showCompeletedReducer,addTodoReducer} = require('reducers');

export var configure =(initialState = {})=>{

	var reducer = redux.combineReducers({
	searchText : searchTextReducer,
	showCompleted : showCompeletedReducer,
	todos: addTodoReducer
});

var store = redux.createStore(reducer,initialState, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


return store;
}