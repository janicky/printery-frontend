import React, { Component } from 'react'
import { connect } from 'react-redux'

import { request } from '../../../request'

// Import modules
import EmptyState from '../../modules/EmptyState'

// Import redux actions
import { setUsers } from '../../../actions/users'

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
      .then(response => {
        this.props.setUsers(response.data)
      })
  }

  render() {
    const { users } = this.props
    return (
      <Users users={users} />
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {
  setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
