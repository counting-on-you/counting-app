import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase";
import { Home, Header, BuildingDetail } from "./components";
import { Container, Row, Col } from "reactstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.database();
    this.ref = this.db.ref("/building/");
    // console.log(this.ref);
    this.state = {
      data: null
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
      this.aggregatePiData();
      console.log(val);
      this.getBuildingList(val)
    });
  };

  getBuildingList = data => {
    const buildingData = Object.keys(data).map(buildingName => {
      return { name: data[buildingName].name, id: buildingName };
    });

    this.setState({
      buildingData
    });
  };

  aggregatePiData = () => {
    let pi_ids = Object.keys(this.state.data).map(bid => this.state.data[bid].pi_ids);
    pi_ids = pi_ids.reduce((prev, current) => {
      let ids = Object.keys(current).filter(n => current[n]);
      return prev.concat(ids);
    }, []);
    const queries = pi_ids.map(id => this.getPiDataQuery(id));
    this.setState({ queries });
  }

  getPiDataQuery = (piid, options) => {
    const NOW_SECONDS = Date.now()/1000;
    const HOUR_SECONDS = 60 * 60;
    const DAY_SECONDS =   HOUR_SECONDS* 24;
    const WEEK_SECONDS = DAY_SECONDS * 7;
    const MONTH_SECONDS = WEEK_SECONDS * 31;
    const lastTime = NOW_SECONDS - HOUR_SECONDS; 
    return this.db.ref(`/data/${piid}`).orderByKey().endAt(""+lastTime);
  }

  render() {
    return (
      <Router>
        <div style={{flex:1}}>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              getPiDataQuery={this.getPiDataQuery}
              render={props => <Home {...props} buildingData={this.state.buildingData} />}
            />
            <Route
              exact
              path="/building/:id"
              render={props => (
                <BuildingDetail {...props} data={this.state.data} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
