import React, { Component } from 'react'
import { FormFeedback } from 'reactstrap'

export default class InputError extends Component {
  render() {
    const { errors } = this.props 

    if (!errors) {
      return null;
    }

    return errors.map(error => <FormFeedback>{error}</FormFeedback>)
  }
}
