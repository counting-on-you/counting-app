import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { CampusChart, Buildings } from "./";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs="auto">
          <CampusChart />
          <Buildings/>
        </Col>
      </Row>
    );
  }
}
