import React, { Component } from 'react'
import { Table } from 'reactstrap'

import OperationRow from './OperationRow'

export default class Operations extends Component {
  render() {
    const { operations } = this.props
    return (
      <div className="bg-white rounded shadow-lg p-4">
        <h5>Procesy</h5>
        <Table>
          <thead className="thead-dark">
            <th>#</th>
            <th>Maszyna</th>
            <th>Status</th>
            <th>Priorytet</th>
          </thead>
          <tbody>
            {operations.map(operation => <OperationRow key={operation.id} {...operation} />)}
          </tbody>
        </Table>
      </div>
    )
  }
}
