import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD06RYihHPQuVOHDO3yw8JkZU_8ZemgOuA",
  authDomain: "chat-box-4fd5b.firebaseapp.com",
  databaseURL: "https://chat-box-4fd5b.firebaseio.com",
  projectId: "chat-box-4fd5b",
  storageBucket: "chat-box-4fd5b.appspot.com",
  messagingSenderId: "811988067770",
  appId: "1:811988067770:web:0677315fc22023949f2983"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();