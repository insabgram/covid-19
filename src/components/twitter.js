import React, { Component } from 'react'
import Slider from 'react-slick'
import Loader from '../components/loader'

class Twitter extends Component {
  render() {
    const settings = {
      slidesToShow: 2.1,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
      arrows: false,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 737,
        settings: {
          slidesToShow: 1.08,
          slidesToScroll: 1
        }
      }]
    }
    return (
      <section className="container-fluid mb-5 px-0">
        <Slider {...settings}>
          <div className="px-3 py-4">
            <div className="card border-0 shadow">
              <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center p-2">KKMPutrajaya <i className="material-icons small">swap_vert</i></div>
              <a className="twitter-timeline p-2" 
                href="https://twitter.com/KKMPutrajaya?ref_src=twsrc%5Etfw" 
                data-height="400" 
                data-chrome="noheader nofooter noborders noscrollbar">
                <Loader />
              </a>
              <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between align-items-center p-2"><a className="text-uppercase small" href="https://twitter.com/KKMPutrajaya" target="_blank" rel="noopener noreferrer">View on Twitter</a> <i className="material-icons small">swap_horiz</i></div>
            </div>
          </div>

          <div className="px-3 py-4">
            <div className="card border-0 shadow">
              <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center p-2">Jabatan Perdana Menteri <i className="material-icons small">swap_vert</i></div>
              <a className="twitter-timeline p-2" 
                href="https://twitter.com/jpmgov_?ref_src=twsrc%5Etfw" 
                data-height="400" 
                data-chrome="noheader nofooter noborders noscrollbar">
                <Loader />
              </a>
              <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between align-items-center p-2"><a className="text-uppercase small" href="https://twitter.com/jpmgov_" target="_blank" rel="noopener noreferrer">View on Twitter</a> <i className="material-icons small">swap_horiz</i></div>
            </div>
          </div>

          <div className="px-3 py-4">
            <div className="card border-0 shadow">
              <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center p-2">Majlis Keselamatan Negara <i className="material-icons small">swap_vert</i></div>
              <a className="twitter-timeline p-2" 
                href="https://twitter.com/MKNJPM?ref_src=twsrc%5Etfw" 
                data-height="400" 
                data-chrome="noheader nofooter noborders noscrollbar">
                <Loader />
              </a>
              <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between align-items-center p-2"><a className="text-uppercase small" href="https://twitter.com/MKNJPM" target="_blank" rel="noopener noreferrer">View on Twitter</a> <i className="material-icons small">swap_horiz</i></div>
            </div>
          </div>

          <div className="px-3 py-4">
            <div className="card border-0 shadow">
              <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center p-2">BERNAMA <i className="material-icons small">swap_vert</i></div>
              <a className="twitter-timeline p-2" 
                href="https://twitter.com/bernamadotcom?ref_src=twsrc%5Etfw" 
                data-height="400" 
                data-chrome="noheader nofooter noborders noscrollbar">
                <Loader />
              </a>
              <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between align-items-center p-2"><a className="text-uppercase small" href="https://twitter.com/bernamadotcom" target="_blank" rel="noopener noreferrer">View on Twitter</a> <i className="material-icons small">swap_horiz</i></div>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default Twitter