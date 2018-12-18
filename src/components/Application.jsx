import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Import redux actions
import { userAuthorized } from '../actions/user'

// Import layouts
import GuestLayout from './layouts/GuestLayout'
import ProtectedLayout from './layouts/ProtectedLayout'

// Import pages
import Home from './pages/Home/Home'
import SignInContainer from './pages/SignIn/SignIn'

// Import stylesheets
import './Application.css'

// Import axios
import { request } from '../request'

export class Application extends Component {

  componentWillMount() {
    this.authorization()
  }

  authorization() {
    if (localStorage.getItem('auth')) {
      request.get('me')
        .then(response => {
          this.props.userAuthorized(response.data)
        })
        .catch((e) => {
          localStorage.removeItem('auth')
          alert('Sesja wygasła, nastąpiło wylogowanie')
        })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="h-100">
          <ProtectedLayout exact path="/" component={Home} />
          <GuestLayout exact path="/login" component={SignInContainer} />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  userAuthorized
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
