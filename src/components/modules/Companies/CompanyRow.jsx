import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

export default class CompanyRow extends Component {
  render() {
    const { id, name, address } = this.props
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td className="text-center">
          <Link to={`/companies/${id}`} className="btn btn-sm btn-dark m-1">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </Link>
          <Button size="sm" className="m-1" color="danger" onClick={() => this.handleDelete(id)}>
            <FontAwesomeIcon icon={['fas', 'trash-alt']} />
          </Button>
        </td>
      </tr>
    )
  }
}
