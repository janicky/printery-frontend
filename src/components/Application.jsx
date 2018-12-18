import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Import layouts
import GuestLayout from './layouts/GuestLayout'

export default class Application extends Component {
  render() {
    return (
      <BrowserRouter>
        <GuestLayout exact path="/" component={null} />
      </BrowserRouter>
    )
  }
}
