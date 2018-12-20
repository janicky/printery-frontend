import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { request } from '../../../request'

import EmptyState from '../../modules/EmptyState'
import Operations from '../../modules/Operations/Operations'

import { Table, Row, Col } from 'reactstrap'

import moment from 'moment'
moment.locale('pl')

export class Order extends Component {
  render() {
    const { order } = this.props
    return (
      <div>
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
                <th>Utworzono</th>
                <td>
                  {moment(order.created_at).format('LLLL')}
                  <span className="badge text-secondary ml-1">
                    ({moment(order.created_at).fromNow()})
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
        <Row>
          <Col className="bg-white shadow-lg rounded p-3 m-3">
            <h5>Papier</h5>
            <Table>
              <tbody>
                <tr>
                  <th>Nazwa (gramatura)</th>
                  <td>{order.paper.name} ({order.paper.grammage}g)</td>
                </tr>
                <tr>
                  <th>Rozmiar</th>
                  <td>{order.paper_size.name} ({order.paper_size.width}mm x {order.paper_size.height}mm)</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="bg-white shadow-lg rounded p-3 m-3">
            <h5>Paleta barw</h5>
            <Table>
              <tbody>
                <tr>
                  <th>Nazwa</th>
                  <td>{order.color_palette.name}</td>
                </tr>
                <tr>
                  <th>Cena</th>
                  <td>{order.color_palette.price} PLN</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Operations operations={order.operations} />
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
