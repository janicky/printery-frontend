import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Status from '../../modules/Orders/Status'

export default class OperationRow extends Component {
  render() {
    const { id, machine, status, priority } = this.props
    return (
      <tr>
        <td>{id}</td>
        <td>
          <Link to={`/machines/${machine.id}`}>{machine.name}</Link>
        </td>
        <td>
          <Status status={status} />
        </td>
        <td>
          {priority}
        </td>
      </tr>
    )
  }
}
