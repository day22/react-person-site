import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Services from './components/services'
import Stats from './components/stats'
import Portfolio from './components/portfolio'
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    const homePageStyle = {
      backgroundImage: 'url(assets/img/bg_image_1.jpg)',
    };
    return (
      <div>
        <div class="vg-page page-home" id="home" style={homePageStyle}>
          <Navbar></Navbar>
          <Header></Header>
        </div>
        <div class="vg-page page-about" id="about">
          <About></About>
        </div>
          {/* <Services></Services> */}
          {/* <Stats></Stats> */}
          {/* <Portfolio></Portfolio> */}
          <Contact></Contact>
          
          <Footer></Footer>
      </div>

    );
  }
}

export default App;
