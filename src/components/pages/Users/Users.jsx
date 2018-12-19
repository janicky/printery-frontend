import React, { Component } from 'react'
import { connect } from 'react-redux'

import { request } from '../../../request'

// Import modules
import EmptyState from '../../modules/EmptyState'
import UserRow from '../../modules/Users/UserRow'

// Import redux actions
import { setUsers } from '../../../actions/users'

class Users extends Component {
  render() {
    const { users } = this.props
    if (users.length === 0) {
      return <EmptyState icon={['fas', 'users']} title="Brak pracowników" message="Ale jeszcze może będą..." />
    } 
    return (
      <div>
        {users.map(user => <UserRow key={user.id} {...user} />)}
      </div>
    )
  }
}

export class UsersContainer extends Component {d

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
