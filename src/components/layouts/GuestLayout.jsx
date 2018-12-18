import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class GuestLayout extends Component {
  render() {
    return (
      <div className="h-100 d-flex p-2 justify-content-center align-items-center bg-light flex-column">
        <div className="display-4 mb-4 text-primary">printery</div>
        <Route {...this.props} />
      </div>
    )
  }
}
