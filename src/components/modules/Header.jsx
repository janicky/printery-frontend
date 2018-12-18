import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink, withRouter } from 'react-router-dom'

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import redux actions
import { userUnauthorized } from '../../actions/user'

// Import logo
import logo from '../../images/logo.png'

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
            <Link to="/" className="mr-4">
              <img src={logo} alt="Logo" width="100px" />
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink exact to="/" className="nav-link">
                    <FontAwesomeIcon icon={['fas', 'home']} /> Przegląd
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/orders" className="nav-link">
                    <FontAwesomeIcon icon={['fas', 'folder']} /> Zlecenia
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <FontAwesomeIcon icon={['fas', 'network-wired']} /> Produkcja
                  </DropdownToggle>
                  <DropdownMenu right>
                    <NavLink exact to="/production/machines" className="dropdown-item">
                      <FontAwesomeIcon icon={['fas', 'network-wired']} className="mr-1" /> Maszyny
                    </NavLink>
                    <NavLink exact to="/production/operations" className="dropdown-item">
                      <FontAwesomeIcon icon={['fas', 'microchip']} className="mr-1" /> Procesy
                    </NavLink>
                    <DropdownItem divider />
                    <NavLink exact to="/production/stats" className="dropdown-item">
                      <FontAwesomeIcon icon={['fas', 'chart-bar']} className="mr-1" /> Statystyki
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink exact to="/machines" className="nav-link">
                    <FontAwesomeIcon icon={['fas', 'archive']} /> WZ
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Zarządzanie
                  </DropdownToggle>
                  <DropdownMenu right>
                    <NavLink exact to="/reports" className="dropdown-item">
                      <FontAwesomeIcon icon={['fas', 'chart-line']} className="mr-1" /> Raporty
                    </NavLink>
                    <NavLink exact to="/users" className="dropdown-item">
                      <FontAwesomeIcon icon={['fas', 'user-tie']} className="mr-1" /> Pracownicy
                    </NavLink>
                    <DropdownItem divider />
                    <NavLink exact to="/info" className="dropdown-item">
                      <FontAwesomeIcon icon={['far', 'question-circle']} className="mr-1" /> Informacje
                    </NavLink>
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
