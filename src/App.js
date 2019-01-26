import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";
import { Home, Header } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.database();
    this.ref = this.db.ref("/building/");
    // console.log(this.ref);
    this.state = {
      data: undefined
    };
    this.syncData();
  }

  syncData = () => {
    const ref = this.ref;
    ref.on("value", snapshot => {
      const val = snapshot.val();
      let buildings = Object.keys(val).map(building => {
        return Object.assign({ name: building }, val[building]);
      });
      this.setState({
        data: buildings
      });
    });
  };

  render() {
    return (
      <div style={{ flex: 1 }}>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
