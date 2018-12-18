import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export class SignIn extends Component {
  render() {
    return (
      <div className="d-flex p-2 justify-content-center align-items-center h-100 bg-light">
        <div className="p-3 border rounded shadow-sm bg-white">
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Wprowadź adres email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Hasło</Label>
              <Input type="password" name="password" id="password" placeholder="Wprowadź hasło" />
            </FormGroup>
            <div className="d-flex justify-content-center">
              <Button>Zaloguj się</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export class SignInContainer extends Component {
  render() {
    return <SignIn />
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
