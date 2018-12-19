import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'reactstrap'

export default class UserRow extends Component {

  handleDelete = (id) => {
    this.props.onDelete(id)
  }

  render() {
    const { id, first_name, last_name, email, admin } = this.props
    return (
      <tr>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td className="text-center">
          {admin && <FontAwesomeIcon icon={['fas', 'check']} className="text-primary" />}
          {!admin && <FontAwesomeIcon icon={['fas', 'times']} className="text-secondary" />}
        </td>
        <td className="text-center">
          <Button size="sm" color="danger" disabled={admin} onClick={() => this.handleDelete(id)}>
            <FontAwesomeIcon icon={['fas', 'trash-alt']} />
          </Button>
        </td>
      </tr>
    )
  }
}
