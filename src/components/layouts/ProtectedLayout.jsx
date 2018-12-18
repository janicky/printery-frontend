import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

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
      return <div></div>
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

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedLayout)
