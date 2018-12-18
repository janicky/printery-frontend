import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export class SignIn extends Component {
  render() {
    return (
      <div className="p-3 rounded shadow-lg bg-white">
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
    )
  }
}

export class SignInContainer extends Component {

  componentDidMount() {
    console.log(this.props.user)
  }

  render() {
    return <SignIn />
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
