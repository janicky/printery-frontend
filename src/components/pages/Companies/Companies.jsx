import React, { Component } from 'react'
import { connect } from 'react-redux'

import { request } from '../../../request'

// Import redux actions
import { setCompanies, deleteCompany } from '../../../actions/companies'
import EmptyState from '../../modules/EmptyState';

class Companies extends Component {
  render() {
    const { companies } = this.props

    if (companies.length === 0) {
      return <EmptyState icon={['fas', 'users']} title="Brak klientów" message="Ale jeszcze może będą..." />
    }

    return <div>{companies.map(company => <div>{company.name}</div>)}</div>
  }
}

export class CompaniesContainer extends Component {

  componentDidMount() {
    request.get('companies')
      .then(response => this.props.setCompanies(response.data))
  }

  render() {
    const { companies } = this.props
    return (
      <Companies companies={companies} />
    )
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies
})

const mapDispatchToProps = {
  setCompanies, deleteCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer)
