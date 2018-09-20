import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3">
            <FontAwesomeIcon className="footer--icon" size="lg" icon={['fab', 'facebook']} />
            <FontAwesomeIcon className="footer--icon" size="lg" icon={['fab', 'twitter']} />
            <FontAwesomeIcon className="footer--icon" size="lg" icon={['fab', 'pinterest']} />
          </div>
          <div className="col-lg-3 offset-lg-7 col-md-4 offset-md-5">
            <label>© Lucas Souza de Lima</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer