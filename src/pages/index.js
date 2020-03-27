import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Loader from '../components/loader'
import Slider from 'react-slick'
import Card from '../components/card'

const Index = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
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

  useEffect(() => {
    axios.get('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=MY')
      .then(response => {
        setLoading(false)
        setData(response.data[0])
      })
      .catch(error => {
        setError(true)
      })
  }, [])
  return (
    <Layout>
      <SEO />

      <section className="jumbotron bg-light mb-0">
      { loading ? (
        <Loader />
      ) : error ? (
        <div className="container px-md-5 text-center" role="alert">
          <h4><strong>Holy corona!</strong> Something break!</h4>
          <p>Remain calm and stay safe. You can still check out the tweets!</p>
        </div>
      ) : (
        <div className="container px-md-5 text-center">
          <img src={`https://www.countryflags.io/${data.countryCode}/flat/64.png`} alt={data.country} />
          <h1>{data.country}</h1>

          <div className="d-flex justify-content-center">
            <p className="small text-secondary mb-4">Data updated {moment(data.lastUpdated).fromNow()}</p>
          </div>

          <div className="d-flex justify-content-center">
            <h2 className="font-weight-light">Overall</h2>
          </div>

          <div className="row">
            <div className="col">
              <p>Case<br />
                <span className="text-info h1">{data.totalConfirmed}</span><br />
                <span className="text-info">&#43; {data.dailyConfirmed}</span>
              </p>
            </div>
            <div className="col">
              <p>Recovered<br /><span className="text-success h1">{data.totalRecovered}</span></p>
            </div>
            <div className="col">
              <p>Death<br />
                <span className="text-danger h1">{data.totalDeaths}</span><br />
                <span className="text-danger">&#43; {data.dailyDeaths}</span>
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <h2 className="font-weight-light">Today</h2>
          </div>

          <div className="row">
            <div className="col">
              <p>Active<br /><span className="text-info h1">{data.activeCases}</span></p>
            </div>
            <div className="col">
              <p>Critical<br /><span className="text-warning h1">{data.totalCritical}</span></p>
            </div>
          </div>
        </div>
      )}
      </section>

      <section className="twitter container-fluid mb-5 px-0">
        <Slider {...settings}>
          <Card title="KKMPutrajaya" handle="KKMPutrajaya" />
          <Card title="Jabatan Perdana Menteri" handle="jpmgov_" />
          <Card title="Majlis Keselamatan Negara" handle="MKNJPM" />
          <Card title="BERNAMA" handle="bernamadotcom" />
        </Slider>
      </section>
    </Layout>
  )
}

export default Index