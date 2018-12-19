import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

import { request } from '../../../request'

// Import modules
import EmptyState from '../../modules/EmptyState'
import UserRow from '../../modules/Users/UserRow'

// Import redux actions
import { setUsers, deleteUser } from '../../../actions/users'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Users extends Component {

  handleDelete = (id) => {
    this.props.onDelete(id)
  }

  render() {
    const { users } = this.props
    if (users.length === 0) {
      return <EmptyState icon={['fas', 'users']} title="Brak pracowników" message="Ale jeszcze może będą..." />
    } 
    return (
      <div className="shadow-lg rounded bg-white p-4">
        <h2 className="mb-3">
          <FontAwesomeIcon icon={['fas', 'users']} className="text-secondary mr-3" />
          Pracownicy
        </h2>
        <Table bordered>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Adres e-mail</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <UserRow key={user.id} {...user} onDelete={this.handleDelete} />)}
          </tbody>
        </Table>
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

  handleDelete = (id) => {
    var accept = window.confirm(`Czy aby na pewno chcesz usunąć pracownika o id ${id}?`)
    if (accept) {
      this.props.deleteUser(id)
    }
  }

  render() {
    const { users } = this.props
    return (
      <Users users={users} onDelete={this.handleDelete} />
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {
  setUsers, deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
