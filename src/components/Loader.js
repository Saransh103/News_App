import React, { Component } from 'react'
import Logo from '../images/Logo.png'
export default class Loader extends Component {
  render() {
    return (
        <div className="row my-0" style={{ marginLeft: '1px', marginRight: '1px' }}>
        {/* Loading state: Render 5 placeholder divs */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div className="col my-3" key={index}>
            <div className="card" style={{ width: "19rem", height: '350px' }} aria-hidden="true">
              <img src={Logo} className="card-img-top" alt="Logo" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
