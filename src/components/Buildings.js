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
import { Link } from "react-router-dom";


export class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buildingData } = this.props;
    console.log(buildingData);
    if (buildingData) {
      const buildingNames = Object.keys(buildingData).map(buildingName => {
        return {...buildingData[buildingName], id: buildingName};
      });
      console.log(buildingNames);
      return (
        <Container>
          <Row id="title">Buildings</Row>
          <Row>
            
            <ListGroup className="w-100">
              {buildingNames.map(building => {
                return (
                 
                    <ListGroupItem key={building.id}>
                        <Link to={`/building/${building.id}`}>
                          <div className="d-flex flex-direction-row justify-content-between">
                            <div style={{ maxWidth: 200 }}>{building.name}</div>
                            <div>Chart</div>
                            <div>Busy</div>
                          </div>
                        </Link>
                    </ListGroupItem>
                  
                );
              })}
            </ListGroup>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Row id="title">Buildings</Row>
          <Row>No data yet</Row>
        </Container>
      );
    }
  }
}
