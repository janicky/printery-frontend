import React, { Component } from 'react'
import { connect } from 'react-redux'

class Companies extends Component {
  render() {
    return <div></div>
  }
}

export class CompaniesContainer extends Component {
  render() {
    return (
      <Companies />
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer)
