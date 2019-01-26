import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";
import { Home, Header, BuildingDetail } from "./components";
import { Container, Row, Col } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
      <Router>
        <Container fluid style={{padding: 0}}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path='/building/:id' component={BuildingDetail} />
        </Container>
      </Router>
    );
  }
}

export default App;
