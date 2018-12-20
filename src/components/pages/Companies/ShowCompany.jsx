import React, { Component } from 'react'

import EmptyState from '../../modules/EmptyState'
import { request } from '../../../request';

import { Table } from 'reactstrap'

import moment from 'moment'
import OrderBadge from '../../modules/Orders/OrderBadge';
moment.locale('pl')

export class ShowCompany extends Component {
  render() {
    const { company } = this.props
    return (
      <div>
        <div className="bg-white rounded shadow-lg p-4">
          <h4 className="mb-3">#{company.id} <b>{company.name}</b></h4>
          <Table>
            <tbody>
              <tr>
                <th>Numer identyfikacyjny</th>
                <td>{company.id}</td>
              </tr>
              <tr>
                <th>Nazwa klienta</th>
                <td>{company.name}</td>
              </tr>
              <tr>
                <th>Numer identyfikacji podatkowej</th>
                <td>{company.tax_number}</td>
              </tr>
              <tr>
                <th>Data dołączenia</th>
                <td>{moment(company.created_at).format('LLLL')}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="bg-white rounded shadow-lg p-4 mt-2">
          <h5>Zlecenia dla tego klienta</h5>
          <hr/>
          {company.orders.map(order => <OrderBadge key={order.id} {...order} />)}
          {company.orders.length === 0 && <small>Brak zleceń</small>}
        </div>
      </div>
    )
  }
}

export default class ShowCompanyContainer extends Component {

  state = {
    company: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    request.get(`companies/${id}`)
      .then(response => {
        this.setState({ company: response.data })
      })
  }

  render() {
    const { company } = this.state
    
    if (!company) {
      return <EmptyState icon={['fas', 'exclamation-triangle']} title="Nie odnaleziono klienta" message="Klient o podanym numerze nie istnieje" />
    }

    return (
      <ShowCompany company={company} />
    )
  }
}
