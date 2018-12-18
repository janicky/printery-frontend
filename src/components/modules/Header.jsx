import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import redux actions
import { userUnauthorized } from '../../actions/user'

export class Header extends Component {

  state = {
    isOpen: false,
    user: {}
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('auth')
    this.props.userUnauthorized()
  }

  render() {
    const { user } = this.props.user
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Container>
            <Link to="/">
              <span className="navbar-brand">printery</span>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <span className="navbar-text">{user.first_name} {user.last_name}</span>
                </NavItem>
                <NavItem>
                  <Link to="/logout" className="nav-link" onClick={this.handleLogout}>
                    <FontAwesomeIcon icon={['fas', 'power-off']} />
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  userUnauthorized
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
