import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { request } from '../../../request'

// Import redux actions
import { setOrders, deleteOrder } from '../../../actions/orders'
import EmptyState from '../../modules/EmptyState';

// Import modules
import OrderRow from '../../modules/Orders/OrderRow'

import { Table, Row, Col } from 'reactstrap'

class Orders extends Component {

  handleDelete = (id) => {
    this.props.onDelete(id)
  }

  render() {
    const { orders, user } = this.props
    if (orders.length === 0) {
      return <EmptyState icon={['fas', 'folder']} title="Brak zleceń" message="Ale jeszcze może będą..." />
    }

    return (
      <div className="shadow-lg rounded bg-white p-4">
        <Row>
          <Col className="mb-3">
            <h2>
              <FontAwesomeIcon icon={['fas', 'folder']} className="text-secondary mr-3" />
              Zlecenia
            </h2>
          </Col>
          <Col className="text-right">
            <Link to="/orders/add" className="btn btn-success">
              <FontAwesomeIcon icon={['fas', 'play']} className="mr-1" /> Rozpocznij nowe zlecenie
            </Link>
          </Col>
        </Row>
        <Table bordered>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Firma</th>
              <th>Opis</th>
              <th>Cena</th>
              <th>Nakład</th>
              <th>Termin</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => <OrderRow key={order.id} {...order} onDelete={this.handleDelete} admin={user.admin} />)}
          </tbody>
        </Table>
      </div>
    )
  }
}

export class OrdersContainer extends Component {

  componentDidMount() {
    request.get('orders')
      .then(response => this.props.setOrders(response.data))
  }

  handleDelete = (id) => {
    var accept = window.confirm(`Czy aby na pewno chcesz usunąć zlecenie o id ${id}?`)
    if (accept) {
      request.delete(`orders/${id}`)
        .then(() => {
          this.props.deleteOrder(id)
        })
        .catch(() => {
          alert('Nie udało się usunąć zlecenia')
        })
    }
  }

  render() {
    const { orders, user } = this.props
    return (
      <Orders orders={orders} user={user} onDelete={this.handleDelete} />
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  user: state.user
})

const mapDispatchToProps = {
  setOrders, deleteOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer)
