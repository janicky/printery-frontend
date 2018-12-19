import React, { Component } from 'react'

import Status from '../../modules/Orders/Status'

export default class OrderRow extends Component {
  render() {
    const { id, company, description, price, count, deadline, status } = this.props
    return (
      <tr>
        <td>{id}</td>
        <td>{company.name}</td>
        <td>{description}</td>
        <td>
          <span className="badge badge-light border shadow-sm">
            {price} PLN
          </span>
        </td>
        <td>
          <span className="badge badge-light border shadow-sm">
            {count} szt
          </span>
        </td>
        <td>{deadline}</td>
        <td>
          <Status status={status} />
        </td>
      </tr>
    )
  }
}
