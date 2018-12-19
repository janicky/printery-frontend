import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class UserRow extends Component {
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
      </tr>
    )
  }
}
