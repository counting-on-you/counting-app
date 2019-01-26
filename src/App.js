import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";
import { Home, Header, BuildingDetail } from "./components";
import { Container, Row, Col } from 'reactstrap';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.database();
    this.ref = this.db.ref("/building/");
    // console.log(this.ref);
    this.state = {
      data: {}
    };
    this.syncData();
  }

  syncData = () => {
    const ref = this.ref;
    ref.on("value", snapshot => {
      const val = snapshot.val();
      this.setState({
        data: val
      });
    });
  };

  render() {
    return (
      <Router>
        <Container fluid style={{padding: 0}}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/building/:id'
              render={props => <BuildingDetail {...props} data={this.state.data} />}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
