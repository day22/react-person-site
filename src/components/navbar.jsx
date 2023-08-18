import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark sticky" data-offset={500}>
        <div className="container">
          <a href className="navbar-brand">AD</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
            <span className="ti-menu" />
          </button>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="#home" className="nav-link" data-animate="scrolling">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" data-animate="scrolling">About</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link" data-animate="scrolling">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" data-animate="scrolling">Contact</a>
              </li>
            </ul>
            <ul className="nav ml-auto">
              <li className="nav-item">
                <button className="btn btn-fab btn-theme no-shadow">En</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}