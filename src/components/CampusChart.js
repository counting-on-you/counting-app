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

export class CampusChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Card className="w-100">
          <CardBody className="w-100">
            <CardTitle>Campus Total</CardTitle>
          </CardBody>
          <div className="d-flex justify-content-center w-100">Chart goes here</div>
          <CardBody>
            <div className="d-flex flex-row">
              <Button style={{marginRight: 5, marginLeft: 5}} href="#">1M</Button>
              <Button style={{marginRight: 5, marginLeft: 5}} href="#">1W</Button>
              <Button style={{marginRight: 5, marginLeft: 5}} href="#">1D</Button>
              <Button style={{marginRight: 5, marginLeft: 5}} href="#">1H</Button>
            </div>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
