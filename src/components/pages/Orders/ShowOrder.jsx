import React, { Component } from 'react'

import EmptyState from '../../modules/EmptyState'

export class Order extends Component {
  render() {
    return (
      <div>
        ...order...
      </div>
    )
  }
}

export default class OrderContainer extends Component {

  state = {
    order: null
  }

  componentDidMount() {

  }

  render() {
    const { order } = this.state

    if (!order) {
      return <EmptyState icon={['fas', 'exclamation-triangle']} title="Nie odnaleziono zlecenia" message="Zlecenie o podanym numerze nie istnieje" />
    }

    return (
      <Order order={order} />
    )
  }
}
