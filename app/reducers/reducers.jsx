var uuId = require('node-uuid');
var moment = require('moment');
export var searchTextReducer = (state='',action)=>{
switch (action.type) {
  case "SET_SEARCH_TEXT":
  return action.searchText;
  default:
  return state;

}

};

 export var showCompeletedReducer = (state=false,action)=>{
switch (action.type) {
  case 'TOGGLE_SHOW_COMPLETED':
  return !state;
  default:
  return state;

}

 };
export var addTodoReducer = (state=[],action)=>{
  switch (action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {id: uuId(),
			text: action.text,
			done: false,
			createdAt: moment().unix(),
			completedAt: undefined
			}
    ];

    case 'TOGGLE_TODO':
  return state.map((todo)=>{
			if(todo.id === action.id){
				var newDone = !todo.done;

			return {...todo,
        done: newDone,
        completedAt: newDone? moment().unix():undefined
      }
      };
		});


    default:
      return state;
  }
};