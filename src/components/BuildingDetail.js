import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CampusChart, FloorList } from "./";

export class BuildingDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { match } = this.props;
    let buildingData = this.props.data[match.params.id];

    if (buildingData) {
      console.log(buildingData);
      const floorsData = buildingData.floors;
      const floorsElement = Object.keys(floorsData)
        .map(f => floorsData[f])
        .map(floor => {
          return <p key={floor.name}>{floor.name}</p>;
        });

      return (
        <Container>
          <CampusChart {...this.props} />
					<FloorList />
          <Row className="justify-content-md-center">
            <Col xs="auto">{floorsElement}</Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Row className="justify-content-md-center">
          <Col xs="auto">Loading ...</Col>
        </Row>
      );
    }
  }
}
