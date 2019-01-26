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
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";

export class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buildingData } = this.props;
    const buildingNames = Object.keys(buildingData).map(buildingName => {
        return buildingData.buildingData.name;
    })
    console.log(buildingNames)
    return (
      <Container>
        <Row id="title">Buildings</Row>
        <Row>
          <ListGroup className="w-100">
            <ListGroupItem>
              <div className="d-flex flex-direction-row justify-content-between">
                <div style={{maxWidth: 200}}>Sennott Sq</div>
                <div>Chart</div>
                <div>Busy</div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Container>
    );
  }
}
