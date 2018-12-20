import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import EmptyState from '../../modules/EmptyState'
import { request } from '../../../request'

import { Table } from 'reactstrap'

import moment from 'moment'
moment.locale('pl')

export class Order extends Component {
  render() {
    const { order } = this.props
    return (
      <div className="bg-white rounded shadow-lg p-4">
        <h4 className="mb-3">#{order.id} Zlecenie dla <b>{order.company.name}</b></h4>
        <blockquote className="blockquote">
          {order.description}
        </blockquote>
        <Table>
          <tbody>
            <tr>
              <th>Numer identyfikacyjny</th>
              <td>{order.id}</td>
            </tr>
            <tr>
              <th>Zleceniodawca</th>
              <td>
                <Link to={`/companies/${order.company.id}`}>{order.company.name}</Link>
              </td>
            </tr>
            <tr>
              <th>Opis</th>
              <td>{order.description}</td>
            </tr>
            <tr>
              <th>Nakład</th>
              <td>{order.count} szt.</td>
            </tr>
            <tr>
              <th>Cena (za sztukę)</th>
              <td>
                {order.price} PLN
                <span className="badge text-secondary ml-1">
                  ({Number(order.price / order.count).toFixed(2)} PLN)
                </span>
              </td>
            </tr>
            <tr>
              <th>Termin</th>
              <td>
                {moment(order.deadline).format('LLLL')}
                <span className="badge text-secondary ml-1">
                  ({moment(order.deadline).fromNow()})
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default class OrderContainer extends Component {

  state = {
    order: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    request.get(`orders/${id}`)
      .then(response => {
        this.setState({ order: response.data })
      })
  }

  render() {
    const { order } = this.state

    if (!order) {
      return <EmptyState icon={['fas', 'exclamation-triangle']} title="Nie odnaleziono zlecenia" message="Zlecenie o podanym numerze nie istnieje" />
    }

    return (
      <Order order={order} />
    )
  }
}
