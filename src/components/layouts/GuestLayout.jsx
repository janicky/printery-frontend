import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

export class GuestLayout extends Component {
  render() {
    const { user } = this.props
    if (user.logged) {
      return <Redirect to="/" />
    }
    return (
      <div className="h-100 d-flex p-2 justify-content-center align-items-center bg-light flex-column">
        <div className="display-4 mb-4 text-primary">printery</div>
        <Route {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(GuestLayout)
