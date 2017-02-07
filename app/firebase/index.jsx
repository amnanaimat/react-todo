import firebase from 'firebase';

try {
var config = {
    apiKey: "AIzaSyBsRQvVTwrjaQlXENz8F7CmPMfz018itNk",
    authDomain: "amna-app-todo.firebaseapp.com",
    databaseURL: "https://amna-app-todo.firebaseio.com",
    storageBucket: "amna-app-todo.appspot.com",
    messagingSenderId: "556688197542"
  };
  firebase.initializeApp(config);

} catch(e){

}
export var firebaseRef = firebase.database().ref();
export default firebase;
