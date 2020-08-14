import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDwSdVqHqtr92EHTbKUfnnbDZgCzdhLlQw",
  authDomain: "goalaco.firebaseapp.com",
  databaseURL: "https://goalaco.firebaseio.com",
  projectId: "goalaco",
  storageBucket: "goalaco.appspot.com",
  messagingSenderId: "623184374444",
  appId: "1:623184374444:web:63d31fc483c14d187c4d09",
  measurementId: "G-QQFJKZBG7S",
};
firebase.initializeApp(firebaseConfig);

//Do not edit^^

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
