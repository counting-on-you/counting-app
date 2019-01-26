import React, { Component } from "react";
import { Col, Row } from "reactstrap";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col style={{ flex: 1 }}>
        <Row>Test</Row>
      </Col>
    );
  }
}
