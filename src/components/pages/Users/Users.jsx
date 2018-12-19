import React, { Component } from 'react'
import { connect } from 'react-redux'

import { request } from '../../../request'

// Import modules
import EmptyState from '../../modules/EmptyState'

class Users extends Component {
  render() {
    return (
      <div>
        <EmptyState icon={['fas', 'users']} title="Brak pracowników" message="Ale jeszcze może będą..." />
      </div>
    )
  }
}

export class UsersContainer extends Component {

  componentDidMount() {
    request.get('users')
      .then(response => console.log(response))
  }

  render() {
    return (
      <Users />
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(UsersContainer)
