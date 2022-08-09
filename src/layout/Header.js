import React, { Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  logoutHandler() {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", Boolean(false));
  }
  render() {
    return (
      <div>
        <Navbar className="continer" color="light" light expand="md">
          <NavbarBrand href="/">Appointment</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{ marginLeft: "auto" }}>
              {/* <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              
              <NavItem>
              <NavLink href="#">Support</NavLink>
              </NavItem> */}

              {localStorage.getItem("isLoggedIn") === "true" ? (
                <Fragment>
                  <NavItem>
                    <NavLink href="/status">Status</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signout">
                      <button
                        onClick={this.logoutHandler}
                        type="button"
                        className="btn btn-warning"
                      >
                        signout
                      </button>
                    </NavLink>
                  </NavItem>
                </Fragment>
              ) : (
                <div></div>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
