import React, { Component } from 'react'

export default class Status extends Component {
  render() {
    const { status } = this.props
    switch (status) {
      case 1:
        return <span className="badge badge-primary">w trakcie</span>
      case 2:
        return <span className="badge badge-danger">anulowane</span>
      case 3:
        return <span className="badge badge-success">zakończone</span>
      default:
        return <span className="badge badge-secondary">nierozpoczęte</span>
    }
  }
}
