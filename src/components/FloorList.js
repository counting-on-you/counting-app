import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Collapse
} from "reactstrap";
import { CampusChart, InlineChart, FloorItem } from "./";

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
    const { collapse } = this.state;
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
            <ListGroup>
              {floorData.map(floor => {
                return <FloorItem floorName="Floor1" floorStatus="Busy" />;
              })}
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
