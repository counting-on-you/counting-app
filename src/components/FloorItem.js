import React, { Component } from "react";
import {
    Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Collapse
} from "reactstrap";
import { InlineChart, LineChart } from "./";

class FloorItem extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const { collapse, selected } = this.state;
    const { floorName, floorStatus } = this.props;
    const chartData = []
    return (
      <Col>
        <Row id="title">Floors</Row>
        <Row>
          <ListGroup className="w-100">
            <ListGroupItem>
              <div
                className="d-flex flex-direction-row justify-content-between"
                onClick={this.toggle}
              >
                <div className="d-flex flex-column">
                  <div>{floorName}</div>
                  {collapse ? null : <div className="text-muted">Busy</div>}
                </div>
                <div>
                  {!collapse ? (
                    <InlineChart data={null} />
                  ) : (
                    <small className="text-muted">{floorStatus}</small>
                  )}
                </div>
              </div>
              <Collapse isOpen={collapse}>
              <div
            className="d-flex justify-content-center w-100"
            style={{ paddingRight: 10, paddingLeft: 10 }}
          >
            <LineChart data={chartData} selected={selected} />
          </div>
            <div className="d-flex flex-row-reverse justify-content-center">
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 3 ? "primary" : "link"}
                onClick={() => {
                  this.setState({
                    selected: 3
                  });
                }}
              >
                1M
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 2 ? "primary" : "link"}
                onClick={() => {
                  this.setState({
                    selected: 2
                  });
                }}
              >
                1W
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 1 ? "primary" : "link"}
                onClick={() => {
                  this.setState({
                    selected: 1
                  });
                }}
              >
                1D
              </Button>
              <Button
                style={{ marginRight: 5, marginLeft: 5 }}
                color={selected === 0 ? "primary" : "link"}
                onClick={() => {
                  this.setState({
                    selected: 0
                  });
                }}
              >
                1H
              </Button>
            </div>
              </Collapse>
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Col>
    );
  }
}

export { FloorItem };
