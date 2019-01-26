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
      selected: 3
    };
  }

  render() {
    const { selected } = this.state;
    const data = this.props.dataStore.aggregate.campus.data;
    let chartData;

    if(data) {
      chartData = Object.keys(data).map(ts => {
        return { x: ts, y: data[ts] };
      })
    }

    return (
      <Col>
        <Card className="w-100 ">
          <CardBody className="w-100">
            <CardTitle>{this.props.title}</CardTitle>
          </CardBody>
          <div
            className="d-flex justify-content-center w-100"
            style={{ paddingRight: 10, paddingLeft: 10 }}
          >
            <LineChart data={chartData} />
          </div>
          <CardBody>
            <div className="d-flex flex-row-reverse justify-content-center">
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 0 ? "primary" : "link"}
                onClick={() => {
                  this.setState({
                    selected: 0
                  });
                }}
              >
                1M
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 1 ? "primary" : "link"}
                onClick={() => {
                  this.setState({
                    selected: 1
                  });
                }}
              >
                1W
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 2 ? "primary" : "link"}
                onClick={() => {
                  this.setState({
                    selected: 2
                  });
                }}
              >
                1D
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 3 ? "primary" : "link"}
                onClick={() => {
                  this.setState({
                    selected: 3
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
