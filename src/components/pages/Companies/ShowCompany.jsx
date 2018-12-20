import React, { Component } from 'react'

import EmptyState from '../../modules/EmptyState'

export class ShowCompany extends Component {
  render() {
    return (
      <div>
        ...show...
      </div>
    )
  }
}

export default class ShowCompanyContainer extends Component {

  state = {
    company: null
  }

  componentDidMount() {
    
  }

  render() {
    const { company } = this.state
    
    if (!company) {
      return <EmptyState icon={['fas', 'exclamation-triangle']} title="Nie odnaleziono klienta" message="Klient o podanym numerze nie istnieje" />
    }

    return (
      <ShowCompany company={company} />
    )
  }
}
