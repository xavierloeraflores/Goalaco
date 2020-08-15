import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./LoginComponents/SignIn";
import SignUp from "./LoginComponents/SignUp";
import Application from "./LoginComponents/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./LoginComponents/ProfilePage";
import { UserContext } from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
