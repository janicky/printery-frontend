import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'


// Import layouts
import GuestLayout from './layouts/GuestLayout'

// Import pages
// import Home from './pages/Home/Home'
import SignInContainer from './pages/SignIn/SignIn'

// Import stylesheets
import './Application.css'

export default class Application extends Component {
  render() {
    return (
      <BrowserRouter>
        <GuestLayout exact path="/" component={SignInContainer} />
      </BrowserRouter>
    )
  }
}
