import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase";
import { Home, Header, BuildingDetail } from "./components";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DataStore from "./Store/DataStore";
import { Provider } from "mobx-react";
import { toJS } from "mobx";
import { E2BIG } from "constants";

const dataStore = new DataStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.database();
    this.buildingRef = this.db.ref("/building/");
    // console.log(this.ref);
    this.state = {
      data: null
    };
    this.syncData();
  }

  syncData = () => {
    console.log(`Called syncData`)
    const ref = this.buildingRef;
    ref.on("value", snapshot => {
      const val = snapshot.val();
      console.log(val)
      this.setState({
        data: val
      });
      this.fetchPiData();
      console.log(val);
      this.getBuildingList(val);
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

  fetchPiData = () => {
    let pi_ids = []

    Object.keys(this.state.data).forEach(bid => {
      const buildingData = this.state.data[bid];
      const floorData = buildingData.floors;
      Object.keys(floorData).forEach(fid => {
        let floor_pi_ids = floorData[fid].pi_ids;
        if(!floor_pi_ids) return;
        const currentFloorPiids = Object.keys(floor_pi_ids).map(piid =>( { 
          piid: piid, 
          bid: bid, 
          fid: bid+"_"+fid 
        }))
        pi_ids = pi_ids.concat(currentFloorPiids);
      }); 
    });

    dataStore.pi_map = {};

    pi_ids.forEach(pi_id => {
      const ref = this.db.ref(`/data/`).child(pi_id.piid);
      ref.on("value", snapshot => {
        const val = snapshot.val();
        if(val) {
          dataStore.pi_map[pi_id.piid] = val;
          dataStore.aggregateTimestamps(val, pi_id.fid);
          dataStore.aggregateTimestamps(val, pi_id.bid);
          dataStore.aggregateTimestamps(val, "campus");
        
          console.log(toJS(dataStore.aggregate));
          console.log(toJS(dataStore.pi_map));
        }
      })
    })
  }

  getPiDataQuery = (piid, options) => {
    const NOW_SECONDS = Date.now() / 1000;
    const HOUR_SECONDS = 60 * 60;
    const DAY_SECONDS = HOUR_SECONDS * 24;
    const WEEK_SECONDS = DAY_SECONDS * 7;
    const MONTH_SECONDS = WEEK_SECONDS * 31;
    const lastTime = NOW_SECONDS - HOUR_SECONDS;
    return this.db.ref(`/data/`).child(piid).orderByKey().endAt("" + lastTime);
  }

  render() {
    return (
      <Router>
        <Provider dataStore={dataStore}>
          <div style={{ flex: 1 }} className='color-darkgray'>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home {...props} buildingData={this.state.buildingData} />
                )}
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
        </Provider>
      </Router>
    );
  }
}

export default App;
