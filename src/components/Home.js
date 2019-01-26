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
      <Row className="justify-content-center" style={{margin:0}}>
        <Col xs="auto">
          <CampusChart {...this.props} title="Campus Total"/>
          <Buildings buildingData={this.props.buildingData} {...this.props}/>
        </Col>
      </Row>
    );
  }
}
