import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SignIn extends Component {
  render() {
    return (
      <div className="d-flex p-2 justify-content-center align-items-center h-100">
        ...test...
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
