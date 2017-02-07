import firebase ,{firebaseRef} from 'app/firebase/index';
var moment = require('moment');
export var setSearchText = (searchText)=>{
return {
  type: "SET_SEARCH_TEXT",
  searchText
};

};

export var toggleShowCompleted = ()=>{
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};
export var addTodos = (todos)=>{
return {
  type: "ADD_TODOS",
  todos
}

};
export var startAddTodo  =(text)=>{
return (dispatch,getState)=>{
var todo = {
text: text,
done: false,
createdAt: moment().unix(),
completedAt: null
};

var todoRef = firebaseRef.child('todos').push(todo);

return todoRef.then(()=>{
dispatch(addTodo({
...todo,
id: todoRef.key
}));
});
};
};

export var startToggleTodo  = (id, done)=>{
return (dispatch,getState)=>{
var todoRef = firebaseRef.child(`todos/${id}`);
var updates = {
  done,
  completedAt: done? moment().unix():null
};
return todoRef.update(updates).then(()=>{
  console.log('inside ' , updates);
  dispatch(updateTodo(id,updates));
});
};
};

export var addTodo = (todo)=>{
return {
  type: "ADD_TODO",
  todo
};

};

export var updateTodo = (id,updates)=>{
return {
  type: "UPDATE_TODO",
  id,
  updates
};

};
