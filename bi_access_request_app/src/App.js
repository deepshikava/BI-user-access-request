// ReactJS Imports
import React from "react";

//CSS Imports
import "./App.css";

//Component Imports
import NavBar from "./Containers/NavBar/NavBar";

class App extends React.Component {
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <NavBar />
      </div>
    );
  }
}

export default App;
