import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect, withRouter } from 'react-router-dom'

// Import modules
import FullscreenLoading from '../modules/FullscreenLoading'

// Import logo
import logo from '../../images/logo_light.png'

export class GuestLayout extends Component {

  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: this.props.user.loaded })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.loaded !== this.state.loaded) {
      this.setState({ loaded: nextProps.user.loaded })
    }
  }

  render() {
    const { loaded } = this.state
    const { user } = this.props

    if (!loaded) {
      return <FullscreenLoading />
    }

    if (user.logged) {
      return <Redirect to="/" />
    }

    return (
      <div className="h-100 d-flex p-2 justify-content-center align-items-center bg-light flex-column">
        <div className="p-5">
          <img src={logo} alt="Logo" className="img-responsive" width="300"/>
        </div>
        <Route {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(GuestLayout))
