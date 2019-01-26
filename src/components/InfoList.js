import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export class InfoList extends React.Component {
  render() {
    const { buildings } = this.props;
    if (!buildings) {
      return <div>Loading</div>;
    } else {
      return (
        <ListGroup>
          {buildings.map(b => (
            <ListGroupItem key={b.name}>{b.name}</ListGroupItem>
          ))}
        </ListGroup>
      );
    }
  }
}
