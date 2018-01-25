import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem eventKey={2} href="/auth/google">
            Login With Google
          </NavItem>
        );
      default:
        return (
          <NavDropdown title={this.props.auth.name} id="bg-nested-dropdown-1">
            <MenuItem eventKey="1">detail</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2" href="/api/logout">
              logout
            </MenuItem>
          </NavDropdown>
        );
    }
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link
                to={this.props.auth ? '/teamHome' : '/'}
                className="left brand-logo"
              >
                Stella
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>{this.renderContent()}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
