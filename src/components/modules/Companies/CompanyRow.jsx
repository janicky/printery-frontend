import React, { Component } from 'react'

export default class CompanyRow extends Component {
  render() {
    const { id, name, address } = this.props
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
      </tr>
    )
  }
}
