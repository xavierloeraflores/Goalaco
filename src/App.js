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

//User Provider-> login section; will add nav bar later

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Search</h3>
        <UserProvider>
          <Application />
        </UserProvider>

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
