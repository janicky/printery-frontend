import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class FullscreenLoading extends Component {
  render() {
    return (
      <div className="fullscreen-loading d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={['fas', 'circle-notch']} spin={true} />
      </div>
    )
  }
}
