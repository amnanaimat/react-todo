import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBsRQvVTwrjaQlXENz8F7CmPMfz018itNk",
    authDomain: "amna-app-todo.firebaseapp.com",
    databaseURL: "https://amna-app-todo.firebaseio.com",
    storageBucket: "amna-app-todo.appspot.com",
    messagingSenderId: "556688197542"
  };
  firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
  firebaseRef.set({
    app: {
      name :'Todo App',
    version: '1.0'},
    isRunning: true,
    user:{
      name: 'Amna',
      age: 29
    }
  });

/*  firebaseRef.update({
'app/name': 'Todo Application',
'user/name': 'Naimatullah'

  })*/

  var todosRef = firebaseRef.child('todos');
  todosRef.on('child_added',(snapshot)=>{
    console.log('child_added',snapshot.key, snapshot.val());
  });
todosRef.on('child_changed',(snapshot)=>{
  console.log('child_changed',snapshot.key, snapshot.val());
});
todosRef.on('child_removed',(snapshot)=>{
  console.log('child_removed',snapshot.key, snapshot.val());
});
  var newTodosRef = todosRef.push({
    text: "walikng"
  })
