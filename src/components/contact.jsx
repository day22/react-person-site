import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    const mapContainerStyle = {
      width: '100%',
      height: '100%',
    };

    return (
      <div className="vg-page page-contact" id="contact">
        <div className="container-fluid">
          <div className="text-center wow fadeInUp">
            <div className="badge badge-subhead">Contact</div>
          </div>
          <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
          <div className="row py-5">
            <div className="col-lg-7 px-0 pr-lg-3 wow zoomIn">
              <div className="vg-maps">
                <div id="google-maps" style={mapContainerStyle} />
              </div>
            </div>
            <div className="col-lg-5">
              <form className="vg-contact-form">
                <div className="form-row">
                  <div className="col-12 mt-3 wow fadeInUp">
                    <input className="form-control" type="text" name="Name" placeholder="Your Name" />
                  </div>
                  <div className="col-6 mt-3 wow fadeInUp">
                    <input className="form-control" type="text" name="Email" placeholder="Email Address" />
                  </div>
                  <div className="col-6 mt-3 wow fadeInUp">
                    <input className="form-control" type="text" name="Subject" placeholder="Subject" />
                  </div>
                  <div className="col-12 mt-3 wow fadeInUp">
                    <textarea className="form-control" name="Message" rows={6} placeholder="Enter message here.." defaultValue={""} />
                  </div>
                  <button type="submit" className="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}