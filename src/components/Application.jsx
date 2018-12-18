import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Import layouts
import GuestLayout from './layouts/GuestLayout'
import ProtectedLayout from './layouts/ProtectedLayout'

// Import pages
import Home from './pages/Home/Home'
import SignInContainer from './pages/SignIn/SignIn'

// Import stylesheets
import './Application.css'

export class Application extends Component {
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
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
