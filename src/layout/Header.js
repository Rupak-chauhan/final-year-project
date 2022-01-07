import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
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
    return (
      <div>
        <Navbar className="continer" color="light" light expand="md">
          <NavbarBrand href="/">Appointment</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{marginLeft:'auto'}}>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              
              <NavItem>
              <NavLink href="#">Support</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="#">AboutUS</NavLink>
              </NavItem>
              <NavItem>
              
                  <Button color="warning" > 
                  Sign In
                  </Button>
                 
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
