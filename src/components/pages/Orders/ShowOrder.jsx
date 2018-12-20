import React, { Component } from 'react'

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
  render() {
    return (
      <Order />
    )
  }
}
