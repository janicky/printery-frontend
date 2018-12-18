import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

import { request } from '../../../request'

// Import redux actions
import { userAuthorized } from '../../../actions/user'

export class SignIn extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.email.value, this.password.value)
  }

  render() {
    const { error } = this.props
    return (
      <div className="p-3 rounded shadow-lg bg-white">
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input invalid={error} type="email" name="email" id="email" placeholder="Wprowadź adres email" innerRef={e => this.email = e} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Hasło</Label>
            <Input invalid={error} type="password" name="password" id="password" placeholder="Wprowadź hasło" innerRef={e => this.password = e} />
            <FormFeedback>Email lub hasło są niepoprawne.</FormFeedback>
          </FormGroup>
          <div className="d-flex justify-content-center">
            <Button onClick={this.handleSubmit} type="submit">Zaloguj się</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export class SignInContainer extends Component {

  state = {
    error: false
  }

  handleSubmit = (email, password) => {
    request.post('oauth/token', { email, password, grant_type: 'password' })
      .then(response => {
        localStorage.setItem('auth', response.data.access_token)
        request.get('me')
          .then(me => {
            this.props.userAuthorized(me.data)
          })
      })
      .catch(() => this.setState({ error: true }))
  }

  render() {
    const { error } = this.state
    return <SignIn onSubmit={this.handleSubmit} error={error} />
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  userAuthorized
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
