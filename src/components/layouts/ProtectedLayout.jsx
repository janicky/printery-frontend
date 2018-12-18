import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect, withRouter } from 'react-router-dom'

// Import modules
import FullscreenLoading from '../modules/FullscreenLoading'

export class ProtectedLayout extends Component {

  state = {
    loaded: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.loaded !== this.state.loaded) {
      this.setState({ loaded: nextProps.user.loaded })
    }
  }

  render() {
    const { loaded } = this.state
    const { user} = this.props
    if (!loaded) {
      return <FullscreenLoading />
    }
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

export default withRouter(connect(mapStateToProps)(ProtectedLayout))
