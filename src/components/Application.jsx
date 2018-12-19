import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Import redux actions
import { userAuthorized, userUnauthorized } from '../actions/user'

// Import layouts
import GuestLayout from './layouts/GuestLayout'
import ProtectedLayout from './layouts/ProtectedLayout'

// Import pages
import Home from './pages/Home/Home'
import SignInContainer from './pages/SignIn/SignIn'
import UsersContainer from './pages/Users/Users'
import NotFound from './pages/NotFound/NotFound'

// Import stylesheets
import './Application.css'

// Import axios
import { request } from '../request'

// Import font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far, fas)

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
          this.props.userUnauthorized()
          localStorage.removeItem('auth')
          alert('Sesja wygasła, nastąpiło wylogowanie')
        })
    } else {
      this.props.userUnauthorized()
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="h-100">
          <Switch>
            <ProtectedLayout exact path="/" component={Home} />
            <GuestLayout exact path="/login" component={SignInContainer} />
            <ProtectedLayout exact path="/users" component={UsersContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  userAuthorized, userUnauthorized
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
