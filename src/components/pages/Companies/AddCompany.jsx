import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export class AddCompany extends Component {
  render() {
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
            <Input type="text" name="name" id="name" placeholder="Wprowadź nazwę klienta" />
          </FormGroup>
          <FormGroup>
            <Label for="address">Adres</Label>
            <Input type="text" name="address" id="address" placeholder="Wprowadź adres" />
          </FormGroup>
          <FormGroup>
            <Label for="tax_number">Numer podatkowy</Label>
            <Input type="text" name="tax_number" id="tax_number" placeholder="Wprowadź numer NIP" />
          </FormGroup>
          <div className="text-right">
            <Link to="/companies" className="btn btn-secondary mr-1">
              <FontAwesomeIcon icon={['fas', 'arrow-left']} className="mr-1" /> Anuluj
            </Link>
            <Button type="submit" color="success">
                Dodaj klienta
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default class AddCompanyContainer extends Component {
  render() {
    return <AddCompany />
  }
}
