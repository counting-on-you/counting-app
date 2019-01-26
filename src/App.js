import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase";
import { Home, Header, BuildingDetail } from "./components";
import { Container, Row, Col } from "reactstrap";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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

  render() {
    return (
      <Router>
        <div style={{flex:1}}>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
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
