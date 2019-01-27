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
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

@inject("dataStore")
@observer
class FloorItem extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false, selected: 0 };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const { collapse, selected } = this.state;
    const { floorData, floorStatus } = this.props;
    const floorName = floorData.name;
    const fid = floorData.id;

    const chartData = this.props.dataStore.aggregate[fid]
      ? [...this.props.dataStore.aggregate[fid].chartData]
      : [];
    return (
      <Col>
        <Row>
          <ListGroup className="w-100">
            <ListGroupItem className="color-lightgray font-white" style={{marginBottom:10}}>
              <div
                className="d-flex flex-direction-row justify-content-between"
                onClick={this.toggle}
              >
                <div className="d-flex flex-column">
                  <div>{floorName}</div>
                </div>
                <div>
                  <div className="font-busycolor">{floorStatus}</div>
                </div>
              </div>
              <div
                className="d-flex justify-content-center w-100"
                style={{ paddingRight: 10, paddingLeft: 10 }}
              >
                <LineChart data={chartData} selected={selected} />
              </div>
              <div className="d-flex flex-row-reverse justify-content-center">
              <Button
                color={selected === 3 ? "primary" : "link"}
                className='color-lightgray font-white'
                style={{ marginRight: 5, marginLeft: 5 }}
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
                className='color-lightgray font-white'
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
                className='color-lightgray font-white'
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
                className='color-lightgray font-white'
                onClick={() => {
                  this.setState({
                    selected: 0
                  });
                }}
              >
                1H
              </Button>
            </div>
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Col>
    );
  }
}

export { FloorItem };
