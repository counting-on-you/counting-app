import React, { Component } from "react";
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
      console.log(val)
      this.setState({
        data: val
      });
    });
  };

  getPiDataQuery = (piid, options) => {
    const NOW_SECONDS = Date.now()/1000;
    const HOUR_SECONDS = 60 * 60;
    const DAY_SECONDS =   HOUR_SECONDS* 24;
    const WEEK_SECONDS = DAY_SECONDS * 7;
    const MONTH_SECONDS = WEEK_SECONDS * 31;
    const lastTime = NOW_SECONDS - HOUR_SECONDS; 
    return this.db.ref(`/data/${piid}`).orderByKey().endAt(lastTime);
  }

  render() {
    return (
      <Router>
        <Container fluid style={{padding: 0}}>
          <Header />
          <Switch>
            <Route exact path="/" 
              render={props => <Home {...props} data={this.state.data} getPiDataQuery={this.getPiDataQuery} />} />
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
