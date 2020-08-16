import React, { useContext } from "react";
import { Router } from "@reach/router";
import { Cards, Search, Progress } from "./components";
import Styles from "./App.module.css";

//User Provider-> login section; will add nav bar later

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
