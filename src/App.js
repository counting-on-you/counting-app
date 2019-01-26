import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import { ListGroup, ListGroupItem } from 'reactstrap';

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

  syncData = ()  => {
    const ref = this.ref;
    ref.on("value", (snapshot) => {
      const val = snapshot.val();
      let buildings = Object.keys(val).map(building => {
        return Object.assign({name: building}, val[building]);
      });
      this.setState({
        data: buildings
      });

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Counting on you!</p>

        <InfoList buildings={this.state.data}></InfoList>
        </header>
      </div>
    );
  }
}



class InfoList extends React.Component {
  render() {
    const { buildings } = this.props;
    if(!buildings) {
      return <div>Loading</div>;
    } else {
      return (
      <ListGroup>
        {
          buildings.map(b => (
            <ListGroupItem key={b.name}>
              {b.name}
            </ListGroupItem>
          ))
        }
      </ListGroup>);
      
    }

  }
}

export default App;
