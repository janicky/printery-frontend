import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// Import layouts
import GuestLayout from './layouts/GuestLayout'

// Import pages
import Home from './pages/Home/Home'

export default class Application extends Component {
  render() {
    return (
      <BrowserRouter>
        <GuestLayout exact path="/" component={Home} />
      </BrowserRouter>
    )
  }
}
