import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class BuildingDetail extends Component {
  constructor(props) {
	super(props);
	console.log(props);
    this.state = {};
  }

  render() {
	const { match } = this.props;
    return (
      <Row className="justify-content-md-center">
        <Col xs="auto">{match.params.id}</Col>
      </Row>
    );
  }
}
