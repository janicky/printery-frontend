import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <td>
          <Link to={`/orders/${id}`} className="btn btn-sm btn-secondary">
            <FontAwesomeIcon icon={['fas', 'cogs']} />
          </Link>
        </td>
      </tr>
    )
  }
}
