import React, { Component } from 'react'

import OperationRow from './OperationRow'

export default class Operations extends Component {
  render() {
    const { operations } = this.props
    return (
      <div>
        { operations.map(operation => <OperationRow operation={operation} />) }
      </div>
    )
  }
}
