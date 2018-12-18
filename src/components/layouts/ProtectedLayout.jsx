import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

export class ProtectedLayout extends Component {
  render() {
    const { user } = this.props
    if (!user.logged) {
      return <Redirect to="/login" />
    }
    return (
      <Route {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedLayout)
