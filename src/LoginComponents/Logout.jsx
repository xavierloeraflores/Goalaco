import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import { auth } from "../firebase";
const Logout = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  console.log(user);

  return <div></div>;
};
//test

/*
Do No Edit anything on this page!!!!




Log out has be moved to the navBar

*/

export default Logout;
