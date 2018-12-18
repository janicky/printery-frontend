import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

export default class Application extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={null} />
      </BrowserRouter>
    )
  }
}
