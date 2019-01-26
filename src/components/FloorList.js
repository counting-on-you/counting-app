import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Collapse
} from "reactstrap";
import { CampusChart } from ".";

export class FloorList extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const { floorData } = this.props;
    console.log(floorData);
    if (floorData || 1) {
      /*
      const buildingNames = Object.keys(buildingData).map(buildingName => {
        return {...buildingData[buildingName], id: buildingName};
      }); */
      console.log(floorData);
      return (
        <Col>
          <Row id="title">Floors</Row>
          <Row>
            <ListGroup className="w-100">
              <ListGroupItem >
                <div className="d-flex flex-direction-row justify-content-between" onClick={this.toggle}>
                  <div style={{ maxWidth: 200 }}>Floor 1</div>
                  <div>Chart</div>
                  <div>Busy</div>
                </div>
                <Collapse isOpen={this.state.collapse}>
                  
                </Collapse>
              </ListGroupItem>
            </ListGroup>
          </Row>
        </Col>
      );
    } else {
      return (
        <Col>
          <Row id="title">Floors</Row>
          <Row>No data yet</Row>
        </Col>
      );
    }
  }
}
