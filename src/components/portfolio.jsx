import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="vg-page page-portfolio" id="portfolio">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="badge badge-subhead">Portfolio</div>
          </div>
          <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
          <div className="filterable-button py-3 wow fadeInUp" data-toggle="selected">
            <button className="btn btn-theme-outline selected" data-filter="*">All</button>
            <button className="btn btn-theme-outline" data-filter=".apps">Apps</button>
            <button className="btn btn-theme-outline" data-filter=".template">Template</button>
            <button className="btn btn-theme-outline" data-filter=".ios">IOS</button>
            <button className="btn btn-theme-outline" data-filter=".ui-ux">UI/UX</button>
            <button className="btn btn-theme-outline" data-filter=".graphic">Graphic</button>
            <button className="btn btn-theme-outline" data-filter=".wireframes">Wireframes</button>
          </div>
          <div className="gridder my-3">
            <div className="grid-item apps wow zoomIn">
              <div className="img-place" data-src="../assets/img/work/work-1.jpg" data-fancybox data-caption="<h5 class='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>">
                <img src="../assets/img/work/work-1.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Mobile Travel App</h5>
                  <p>Travel, Discovery</p>
                </div>
              </div>
            </div>
            <div className="grid-item template wireframes wow zoomIn">
              <div className="img-place" data-src="../assets/img/work/work-2.jpg" data-fancybox data-caption="<h5 class='fg-theme'>Music App</h5> <p>Musics</p>">
                <img src="../assets/img/work/work-2.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Music App</h5>
                  <p>Musics</p>
                </div>
              </div>
            </div>
            <div className="grid-item apps ios wow zoomIn">
              <div className="img-place" data-src="../assets/img/work/work-3.jpg" data-fancybox data-caption="<h5 class='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p>">
                <img src="../assets/img/work/work-3.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Gaming Dashboard</h5>
                  <p>Games, Streaming</p>
                </div>
              </div>
            </div>
            <div className="grid-item graphic ui-ux wow zoomIn">
              <div className="img-place" data-src="../assets/img/work/work-4.jpg" data-fancybox data-caption="<h5 class='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p>">
                <img src="../assets/img/work/work-4.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Drugs Delivery App</h5>
                  <p>Health, Drugs</p>
                </div>
              </div>
            </div>
            <div className="grid-item apps ios wow zoomIn">
              <div className="img-place" data-src="../assets/img/work/work-5.jpg" data-fancybox data-caption="<h5 class='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p>">
                <img src="../assets/img/work/work-5.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Musics Discover</h5>
                  <p>Musics, Dashboard</p>
                </div>
              </div>
            </div>
            <div className="grid-item graphic ui-ux wireframes wow zoomIn">
              <div className="img-place" data-src="../assets/img/work/work-6.jpg" data-fancybox data-caption="<h5 class='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p>">
                <img src="../assets/img/work/work-6.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Game Streaming</h5>
                  <p>Games, Streaming</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center wow fadeInUp">
            <a href="javascript:void(0)" className="btn btn-theme">Load More</a>
          </div>
        </div>
      </div>
    )
  }
}