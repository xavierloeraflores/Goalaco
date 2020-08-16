import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "@reach/router";
import SignIn from "./LoginComponents/SignIn";
import SignUp from "./LoginComponents/SignUp";
import Application from "./LoginComponents/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./LoginComponents/ProfilePage";
import { UserContext } from "./providers/UserProvider";
import Nav from "./components/Nav/Nav";
//Do not edit^^

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Application />
    </UserProvider>
    <Nav />

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
