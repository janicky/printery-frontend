import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { request } from '../../../request';

import InputError from '../../modules/InputError'

export class AddCompany extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.name.value, this.address.value, this.tax_number.value)
  }

  render() {
    const { errors } = this.props
    return (
      <div className="shadow-lg rounded bg-white p-4">
        <Row>
          <Col>
            <h2 className="text-success">
              <FontAwesomeIcon icon={['fas', 'users']} className="mr-3" />
              Dodaj nowego klienta
            </h2>
          </Col>
        </Row>
        <hr/>
        <Form>
          <FormGroup>
            <Label for="name">Nazwa klienta</Label>
            <Input invalid={errors.name} type="text" name="name" id="name" placeholder="Wprowadź nazwę klienta" innerRef={e => this.name = e}/>
            <InputError errors={errors.name} />
          </FormGroup>
          <FormGroup>
            <Label for="address">Adres</Label>
            <Input invalid={errors.address} type="text" name="address" id="address" placeholder="Wprowadź adres" innerRef={e => this.address = e} />
            <InputError errors={errors.address} />
          </FormGroup>
          <FormGroup>
            <Label for="tax_number">Numer podatkowy</Label>
            <Input invalid={errors.tax_number} type="text" name="tax_number" id="tax_number" placeholder="Wprowadź numer NIP" innerRef={e => this.tax_number = e} />
            <InputError errors={errors.tax_number} />
          </FormGroup>
          <div className="text-right">
            <Link to="/companies" className="btn btn-secondary mr-1">
              <FontAwesomeIcon icon={['fas', 'arrow-left']} className="mr-1" /> Anuluj
            </Link>
            <Button type="submit" color="success" onClick={this.handleClick}>
                Dodaj klienta
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default class AddCompanyContainer extends Component {

  state = {
    errors: []
  }

  handleSubmit = (name, address, tax_number) => {
    request.post('companies', { name, address, tax_number })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        const response = error.response
        if (response.data.errors) {
          this.setState({ errors: response.data.errors })
        } else {
          alert('Nie udało się utworzyć nowego klienta')
        }
      })
  }

  render() {
    const { errors } = this.state
    return <AddCompany onSubmit={this.handleSubmit} errors={errors} />
  }
}
