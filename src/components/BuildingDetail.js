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
    let buildingData = this.props.data ? this.props.data[match.params.id] : null;

    if (buildingData) {
      console.log(buildingData);
      const floorsData = buildingData.floors;


      return (
        <Col style={{marginTop: 10, paddingBottom: 10}}>
          <CampusChart {...this.props} id={match.params.id} title={buildingData.name}/>
					<FloorList floorData={floorsData} bid={match.params.id} />
        </Col>
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
