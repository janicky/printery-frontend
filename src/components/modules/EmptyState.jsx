import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class EmptyState extends Component {

  static get defaultProps() {
    return {
      icon: ['fas', 'robot'],
      title: "Nic tutaj nie ma",
      message: "Ale jeszcze może będzie..."
    }
  }

  render() {
    const { icon, title, message } = this.props

    return (
      <div className="empty-state rounded p-5 shadow-lg bg-white d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "300px" }}>
        <FontAwesomeIcon icon={icon} className="display-3 py-2 text-primary" />
        <div className="h2 text-primary">{title}</div>
        <p className="text-secondary">{message}</p>
      </div>
    )
  }
}
