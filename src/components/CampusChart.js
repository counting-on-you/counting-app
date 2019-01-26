import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Button
} from "reactstrap";
import { LineChart } from './'

export class CampusChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 3
    };
  }

  render() {
    const { selected } = this.state;
    return (
      <Container>
        <Card className="w-100">
          <CardBody className="w-100">
            <CardTitle>Campus Total</CardTitle>
          </CardBody>
          <div className="d-flex justify-content-center w-100">
            <LineChart/>
          </div>
          <CardBody>
            <div className="d-flex flex-row">
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected == 0 ? "primary" : "link"}
                onClick={() => {this.setState({
                    selected: 0
                })}}
              >
                1M
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected == 1 ? "primary" : "link"}
                onClick={() => {this.setState({
                    selected: 1
                })}}
              >
                1W
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected == 2 ? "primary" : "link"}
                onClick={() => {this.setState({
                    selected: 2
                })}}
              >
                1D
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected == 3 ? "primary" : "link"}
                onClick={() => {this.setState({
                    selected: 3
                })}}
              >
                1H
              </Button>
            </div>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
