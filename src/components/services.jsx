import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <div className="vg-page page-service">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="badge badge-subhead">Service</div>
          </div>
          <h1 className="fw-normal text-center wow fadeInUp">What can i do?</h1>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service wow fadeInUp">
                <div className="icon">
                  <span className="ti-paint-bucket" />
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Web Design</h4>
                  <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service wow fadeInUp">
                <div className="icon">
                  <span className="ti-search" />
                </div>
                <div className="caption">
                  <h4 className="fg-theme">SEO</h4>
                  <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service wow fadeInUp">
                <div className="icon">
                  <span className="ti-vector" />
                </div>
                <div className="caption">
                  <h4 className="fg-theme">UI/UX Design</h4>
                  <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service wow fadeInUp">
                <div className="icon">
                  <span className="ti-desktop" />
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Web Development</h4>
                  <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}