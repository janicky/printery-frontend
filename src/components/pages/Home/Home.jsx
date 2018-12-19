import React, { Component } from 'react'

import { Row, Col } from 'reactstrap'

// Import modules
import OrderBadge from '../../modules/Orders/OrderBadge'

import { request } from '../../../request';

export class Home extends Component {
  render() {
    const { count, orders } = this.props
    return (
      <div>
        <Row>
          <Col>
            <Row>
              <Col className="bg-secondary m-1 p-4 text-white text-center rounded shadow-lg">
                <div className="display-4">{count.not_started}</div>
                <small>Nierozpoczętych zleceń</small>
              </Col>
              <Col className="bg-primary m-1 p-4 text-white text-center rounded shadow-lg">
                <div className="display-4">{count.in_progress}</div>
                <small>Zleceń w trakcie realizacji</small>
              </Col>
            </Row>
            <Row>
              <Col className="bg-success m-1 p-4 text-white text-center rounded shadow-lg">
                <div className="display-4">{count.finished}</div>
                <small>Ukończonych zleceń</small>
              </Col>
              <Col className="bg-dark m-1 p-4 text-white text-center rounded shadow-lg">
                <div className="display-4">{count.canceled}</div>
                <small>Anulowanych zleceń</small>
              </Col>
            </Row>
          </Col>
          <Col className="p-4 bg-white shadow-lg m-1 rounded">
            <h5>Zlecenia w trakcie realizacji</h5>
            <hr/>
            <div>
              {orders.map(order => <OrderBadge {...order} />)}
            </div>
            {count.in_progress > orders.length && <small className="p-2 text-secondary">oraz {count.in_progress - orders.length} innych, nowszych zleceń w trakcie realizacji</small> }
          </Col>
        </Row>
      </div>
    )
  }
}

export default class HomeContainer extends Component {

  state = {
    orders: [],
    count: {
      not_started: 0,
      in_progress: 0,
      finished: 0,
      canceled: 0
    }
  }

  componentDidMount() {
    request.get('dashboard')
      .then(response => {
        this.setState({
          orders: response.data.orders,
          count: response.data.count
        })
      })
  }

  render() {
    const { count, orders } = this.state
    return <Home count={count} orders={orders} />
  }
}
