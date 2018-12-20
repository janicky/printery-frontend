import React, { Component } from 'react'

import { Col } from 'reactstrap'

import moment from 'moment'
moment.locale('pl')

export default class ActiveUser extends Component {
  render() {
    const { first_name, last_name, admin, last_activity } = this.props
    return (
      <Col xs="4" className="bg-white rounded shadow-lg p-4 m-1">
        <div className="d-flex justify-content-between">
          <strong>{first_name} {last_name}</strong>
          {!admin && <span className="badge badge-secondary d-flex align-items-center">pracownik</span>}
          {admin && <span className="badge badge-primary d-flex align-items-center">admin</span>}
        </div>
        <small className="text-secondary">aktywny(a) {moment(last_activity).fromNow()}</small>
      </Col>
    )
  }
}
