import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class Header extends Component {
  constructor() {
    super();
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem>
            <NavLink href="/auth/google">Login with Google</NavLink>
          </NavItem>
        );
      default:
        return (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {this.props.auth.name}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>detail</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink href="/api/logout">logout</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    // do some sort of verification here if you need to
    //this.props.push(`${this.state.value}`);
    //this.context.history.push('/subjects/search');
  }

  render() {
    return (
      <div>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href={this.props.auth ? '/teamHome' : '/'}>
            Stella
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Form inline onSubmit={this.submitHandler}>
                <FormGroup>
                  <Label for="Search" hidden>
                    Search
                  </Label>
                  <Input
                    type="text"
                    name="search"
                    id="Search1"
                    placeholder="search"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </FormGroup>{' '}
                <Button type="submit">Submit</Button>
              </Form>
              {this.renderContent()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
