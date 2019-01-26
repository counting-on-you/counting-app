import React, { Component } from "react";
import { Col, Row } from "reactstrap";


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row className="justify-content-md-center">
         <Col xs="auto">test</Col>
      </Row>
    );
  }
}
