import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SignIn extends Component {
  render() {
    return (
      <div>
        ...sign_in...
      </div>
    )
  }
}

export class SignInContainer extends Component {
  render() {
    return (
      <div>
        <SignIn />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
