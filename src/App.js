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
    this.setState({
      data: undefined
    });
  }

  getData = async ()  => {
    const ref = this.ref;
    const snapshot = await ref.once("value");
    this.setState({
      data: snapshot.val()
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Counting on you!</p>

        <InfoList data={this.getData()}></InfoList>
        </header>
      </div>
    );
  }
}



class InfoList extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    if(!data) {
      return "Loading";
    } else {
      return <div>test</div>
    }

  }
}

export default App;
