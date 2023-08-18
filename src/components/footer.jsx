import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="vg-footer">
        <h1 className="text-center">Virtual Folio</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="footer-info">
                <p>Where to find me</p>
                <hr className="divider" />
                <p className="fs-large fg-white">Portland, Oregon</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div className="float-lg-right">
                <p>Follow me</p>
                <hr className="divider" />
                <ul className="list-unstyled">
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Youtube</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div className="float-lg-right">
                <p>Contact me</p>
                <hr className="divider" />
                <ul className="list-unstyled">
                  <li>aidancday@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}