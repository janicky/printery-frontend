import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col } from 'reactstrap'

import truncate from 'truncate'

import moment from 'moment'
import 'moment/locale/pl'
moment.locale('pl')

export default class OrderBadge extends Component {
  render() {
    const { id, company, count, deadline } = this.props
    return (
      <div className="border rounded m-1 py-1 px-3">
        <Row>
          <Col xs="1">#{id}</Col>
          <Col xs="4">
            <Link to={`/companies/${company.id}`} className="font-weight-bold">{truncate(company.name, 15)}</Link>
          </Col>
          <Col xs="3">
            {count} szt.
          </Col>
          <Col xs="4">
            <small>termin {moment(deadline).fromNow()}</small>
          </Col>
        </Row>
      </div>
    )
  }
}
