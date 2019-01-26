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

export class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row id="title">Buildings</Row>
        <Row>
          <div>list of building</div>
        </Row>
      </Container>
    );
  }
}
