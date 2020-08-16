import React, { useContext } from "react";
import { Router } from "@reach/router";
import { Cards, Search, Progress, Nav } from "./components";
import Styles from "./App.module.css";
import MediaCard from "./components/Cards/Cards";

//User Provider-> login section; will add nav bar later

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Progress Bar</h1>
        <Progress value={80} max={100} />
      </div>
    );
  }
}
export default App;
