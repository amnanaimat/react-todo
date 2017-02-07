import * as redux from 'redux';
import thunk from 'redux-thunk'
import {searchTextReducer,showCompeletedReducer,addTodoReducer} from 'reducers';

export var configure =(initialState = {})=>{

	var reducer = redux.combineReducers({
	searchText : searchTextReducer,
	showCompleted : showCompeletedReducer,
	todos: addTodoReducer
});

var store = redux.createStore(reducer,initialState, redux.compose(
	redux.applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


return store;
}
