import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";
import "./UserProvider.css";
import Button from "@material-ui/core/Button";
export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <UserContext.Provider value={user}>
          {this.props.children}
        </UserContext.Provider>
      </div>
    );
  }
}

export default UserProvider;
