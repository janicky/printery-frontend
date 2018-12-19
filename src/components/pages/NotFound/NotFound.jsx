import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

export default class NotFound extends Component {
  render() {
    return (
      <div className="h-100 w-100 bg-primary d-flex justify-content-center align-items-center flex-column">
        <div className="text-white display-1">
          <FontAwesomeIcon icon={['fas', 'dizzy']} /> 404
        </div>
        <div className="text-white h2">
          Nie odnaleziono strony
        </div>
        <Link to="/">
          <Button color="link" className="bg-white text-primary" style={{ textDecoration: 'none' }}>Przejdź do strony głównej</Button>
        </Link>
      </div>
    )
  }
}
