import React, { Component } from 'react'
import { connect } from 'react-redux'

export class UsersContainer extends Component {
  render() {
    return (
      <div>
        ...users...
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(UsersContainer)
