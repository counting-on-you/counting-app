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
    const { floorData, bid} = this.props;
    const { collapse } = this.state;

    console.log(floorData);
    if (floorData) {
      /*
      const buildingNames = Object.keys(buildingData).map(buildingName => {
        return {...buildingData[buildingName], id: buildingName};
      }); */
      console.log(floorData);
      return (
        <>
          <Row id="title">Floors</Row>
          <Row>
            <Col>
                <ListGroup>
                  {Object.keys(floorData).map(floorId => {
                    return <FloorItem key={floorId} floorData={{...floorData[floorId], id: bid+"_"+floorId }} floorStatus="Busy" />;
                  })}
                </ListGroup>
            </Col>
          </Row>
        </>
      );
    } else {
      return (
        <Col>
          <Row id="title">Floors</Row>
          <Row>Loading ...</Row>
        </Col>
      );
    }
  }
}
