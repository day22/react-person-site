import React, { Component } from 'react'

export default class About extends Component {

  
  
  renderSkill = (caption, width) => {
    const progressBarStyle = {
      width: `${width}%`,
      // You can add more properties to the style object if needed
    };

    return (
      <div className="progress-wrapper wow fadeInUp">
        <span className="caption">{caption}</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={progressBarStyle} aria-valuenow={width} aria-valuemin={0} aria-valuemax={100}>
            {width}%
          </div>
        </div>
      </div>
    );
  };
    
  render() {
    return (
      <div className="vg-page page-about" id="about">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="img-place wow fadeInUp">
                <img src="../assets/img/head_shot.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 wow fadeInRight">
              <h1 className="fw-light">Aidan Day</h1>
              <h5 className="fg-theme mb-3">Software Engineer &amp; Quality Expert</h5>
              <p className="text-muted">I am a compassion-driven software engineer and quality expert, weaving empathy into every line of code. With a fervent dedication to excellence, I create impactful solutions that not only meet technical standards but also resonate with genuine human needs. My journey is defined by a commitment to crafting software that makes a positive difference, combining innovation with heartfelt understanding to leave a mark on both the digital realm and the lives it touches.</p>
              <ul className="theme-list">
                <li><b>From:</b> Seattle, WA</li>
                <li><b>Lives In:</b> Portland, OR</li>
                <li><b>Age:</b> 24</li>
                <li><b>Pronouns:</b> He/Him</li>
              </ul>
              <button className="btn btn-theme-outline">Download CV</button>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
          <div className="row py-3">
            <div className="col-md-6">
              <div className="px-lg-3">
                <h4 className="wow fadeInUp">Coding skills</h4>
                {this.renderSkill('Python', 95)}
                {this.renderSkill('Terraform', 80)}
                {this.renderSkill('AWS', 90)}
                {this.renderSkill('C#', 80)}
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 wow fadeInRight">
              <h2 className="fw-normal">Education</h2>
              <ul className="timeline mt-4 pr-md-5">
                <li>
                  <div className="title">2018 - 2022</div>
                  <div className="details">
                    <h5>B.S Computer Science</h5>
                    <small className="fg-theme">University of Portland</small>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
              <h2 className="fw-normal">Experience</h2>
              <ul className="timeline mt-4 pr-md-5">
                <li>
                  <div className="title">2022 - Current</div>
                  <div className="details">
                    <h5>SDET II</h5>
                    <small className="fg-theme">SAIF</small>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                  </div>
                </li>
                <li>
                  <div className="title">2021</div>
                  <div className="details">
                    <h5>SDET Intern</h5>
                    <small className="fg-theme">Viewpoint - Trimble</small>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}