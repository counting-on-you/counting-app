import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { InlineChart } from "./";

export class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buildingData } = this.props;
    console.log(buildingData);
    if (buildingData) {
      console.log(buildingData);
      return (
        <Col>
          <Row id="title">Buildings</Row>
          <Row>
            <ListGroup className="w-100">
              {buildingData.map(building => {
                return (
                  <ListGroupItem key={building.id}>
                    <Link to={`/building/${building.id}`}>
                      <div className="d-flex flex-direction-row justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          <div>{building.name}</div>
                          <small className="text-muted">Busy</small>
                        </div>
                        <div>
                          <InlineChart data={building.data} />
                        </div>
                      </div>
                    </Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Row>
        </Col>
      );
    } else {
      return (
        <Col>
          <Row id="title">Buildings</Row>
          <Row>No data yet</Row>
        </Col>
      );
    }
  }
}
