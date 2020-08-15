import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./LoginComponents/SignIn";
import SignUp from "./LoginComponents/SignUp";
import Application from "./LoginComponents/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./LoginComponents/ProfilePage";
import { UserContext } from "./providers/UserProvider";

import { Cards, Search, Progress } from "./components";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Search</h3>
        <Search />
        <h2>Cards</h2>
        <Cards />
        <h1>Progress Bar</h1>
        <Progress value={80} max={100} />
      </div>
    );
  }
}
export default App;
