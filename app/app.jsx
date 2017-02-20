var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');




var action = require('Action');
var store = require('configureStore').configure();
import firebase  from 'app/firebase';
import router from 'app/router';


firebase.auth().onAuthStateChanged((user)=>{
if(user){
store.dispatch(action.logIn(user.uid));
store.dispatch(action.startaddTodos());
hashHistory.push('/todos');
} else {
store.dispatch(action.logOut());
hashHistory.push('/');
}
});


// Subscribe to changes


$(document).foundation();
//App Custom CSS
require('style!css!sass!ApplicationCustomStyle');
ReactDOM.render(
  <Provider store={store}>
  {router}

  </Provider>,
  document.getElementById('app')
);
