import React, { Component } from 'react'

export default class UserRow extends Component {
  render() {
    const { id, first_name, last_name, email } = this.props
    return (
      <tr>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }
}
