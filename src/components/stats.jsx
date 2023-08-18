import React, { Component } from 'react'

export default class Stats extends Component {
  render() {
    const funFactContainerStyle = {
      backgroundImage: 'url(../assets/img/bg_banner.jpg)',
    };

    return (
      <div className="vg-page page-funfact" style={funFactContainerStyle}>
        <div className="container">
          <div className="row section-counter">
            <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
              <h1 className="number" data-number={768}>768</h1>
              <span>Clients</span>
            </div>
            <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
              <h1 className="number" data-number={230}>230</h1>
              <span>Project Compleate</span>
            </div>
            <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
              <h1 className="number" data-number={97}>97</h1>
              <span>Project Ongoing</span>
            </div>
            <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
              <h1 className="number" data-number={699}>699</h1>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}