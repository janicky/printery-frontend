import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

export default class CompanyRow extends Component {

  handleDelete = (id) => {
    this.props.onDelete(id)
  }

  render() {
    const { id, name, address, admin } = this.props
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td className="text-center">
          <Link to={`/companies/${id}`} className="btn btn-sm btn-dark m-1">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </Link>
          <Button size="sm" className="m-1" disabled={admin} color="danger" onClick={() => this.handleDelete(id)}>
            <FontAwesomeIcon icon={['fas', 'trash-alt']} />
          </Button>
        </td>
      </tr>
    )
  }
}
