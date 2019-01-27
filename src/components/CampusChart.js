import React, { Component } from "react";
import { Container, Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import { LineChart } from "./";
import { inject, observer } from "mobx-react";
import { toJS } from 'mobx';

@inject("dataStore")
@observer
class CampusChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }

  render() {
    const { selected } = this.state;
    const { id } = this.props;
    let chartData;

    if(id && this.props.dataStore.aggregate[id]) {
      chartData = [...this.props.dataStore.aggregate[id].chartData];
    } else {
      chartData = [...this.props.dataStore.aggregate.campus.chartData];
    }
    
    return (
      <Col style={{paddingLeft:0, paddingRight:0}}>
        <Card
          className="w-100"
          className='color-lightgray'
        >
          <CardBody className="w-100">
            <CardTitle className='font-white' style={{fontSize: 20}}>{this.props.title}</CardTitle>
          </CardBody>
          <div
            className="d-flex justify-content-center w-100"
            style={{ paddingRight: 10, paddingLeft: 10 }}
          >
            <LineChart data={chartData} selected={selected} />
          </div>
          <CardBody>
            <div className="d-flex flex-row-reverse justify-content-center">
              <Button
                color={selected === 3 ? "primary" : "link"}
                className='color-lightgray font-white'
                style={{ marginRight: 5, marginLeft: 5 }}
                onClick={() => {
                  this.setState({
                    selected: 3
                  });
                }}
              >
                1M
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 2 ? "primary" : "link"}
                className='color-lightgray font-white'
                onClick={() => {
                  this.setState({
                    selected: 2
                  });
                }}
              >
                1W
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 1 ? "primary" : "link"}
                className='color-lightgray font-white'
                onClick={() => {
                  this.setState({
                    selected: 1
                  });
                }}
              >
                1D
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 0 ? "primary" : "link"}
                className='color-lightgray font-white'
                onClick={() => {
                  this.setState({
                    selected: 0
                  });
                }}
              >
                1H
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export { CampusChart };
