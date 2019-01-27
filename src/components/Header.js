import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Form, FormGroup, Input } from "reactstrap";
import { FaSearch } from "react-icons/fa";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar style={{backgroundColor:"#B39DDB"}}>
          <NavbarBrand href="/" className="font-headercolor">Counting On You</NavbarBrand>
          <Nav className="ml-auto"  style={{ alignItems: 'center'}} navbar>
            <NavItem>
              {isOpen ? (
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search for a building"
                      onBlur={() => {this.setState({ isOpen: false })}}
                    />
                  </FormGroup>
                </Form>
              ) : (
                <FaSearch
                  onClick={() => {
                    this.setState({ isOpen: true });
                  }}
                />
              )}
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
