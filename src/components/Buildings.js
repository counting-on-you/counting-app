import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { InlineChart } from "./";
import { inject, observer } from "mobx-react";
import { toJS } from 'mobx';


@inject("dataStore")
@observer
class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buildingData } = this.props;
    const business = Math.random() * 3;
    const busy = business > 1 ? business > 2 ? "Busy" : "Normal" : "Quiet";

    if (buildingData) {
      // const chartData = [...this.props.dataStore.aggregate.campus.chartData.slice()];

      return (
        <Col>
          <Row id="title" className="justify-content-center font-white" style={{ marginTop: 10, marginBottom: 2, fontSize: 20 }}>Buildings</Row>
          <Row>
            <ListGroup className="w-100">
              {buildingData.map(building => {
                const bid = building.id;
                let chartData = this.props.dataStore.aggregate[bid] ? [...this.props.dataStore.aggregate[bid].chartData ]: [];
                // console.log(toJS(chartData));
                return (
                  <ListGroupItem key={bid} className='color-lightgray'>
                    <Link to={`/building/${bid}`}>
                      <div className="d-flex flex-direction-row justify-content-between align-items-center font-white">
                        <div className="d-flex flex-column">
                          <div>{building.name}</div>
                          <small className="font-busycolor">{busy}</small>
                        </div>
                        <div>
                          <InlineChart data={chartData} />
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

export { Buildings };
