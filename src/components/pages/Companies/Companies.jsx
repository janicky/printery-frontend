import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { request } from '../../../request'

// Import redux actions
import { setCompanies, deleteCompany } from '../../../actions/companies'
import EmptyState from '../../modules/EmptyState';

// Import modules
import CompanyRow from '../../modules/Companies/CompanyRow'

import { Table, Row, Col } from 'reactstrap'

class Companies extends Component {
  render() {
    const { companies } = this.props
    if (companies.length === 0) {
      return <EmptyState icon={['fas', 'users']} title="Brak klientów" message="Ale jeszcze może będą..." />
    }

    return (
      <div className="shadow-lg rounded bg-white p-4">
        <Row>
          <Col className="mb-3">
            <h2>
              <FontAwesomeIcon icon={['fas', 'users']} className="text-secondary mr-3" />
              Klienci
            </h2>
          </Col>
          <Col className="text-right">
            <Link to="/companies/add" className="btn btn-success">
              <FontAwesomeIcon icon={['fas', 'plus']} className="mr-1" /> Dodaj nowego klienta
            </Link>
          </Col>
        </Row>
        <Table bordered>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Nazwa</th>
              <th>Adres</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => <CompanyRow key={company.id} {...company} onDelete={this.handleDelete} />)}
          </tbody>
        </Table>
      </div>
    )
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
