import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Users extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
