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
