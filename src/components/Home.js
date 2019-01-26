import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { CampusChart, Buildings } from "./";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
      <Row className="justify-content-center">
        <Col xs="auto">
          <CampusChart {...this.props} title="Campus Total"/>
          <Buildings buildingData={this.props.data} {...this.props}/>
        </Col>
      </Row>
    );
  }
}
