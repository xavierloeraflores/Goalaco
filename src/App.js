import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./LoginComponents/SignIn";
import SignUp from "./LoginComponents/SignUp";
import Application from "./LoginComponents/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./LoginComponents/ProfilePage";
import { UserContext } from "./providers/UserProvider";

import { Cards, Search } from "./components";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Cards />
      </div>
    );
  }

  /*
Login component
function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
  
}
*/
}
export default App;
