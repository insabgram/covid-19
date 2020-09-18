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
  const [date, setDate] = useState('')
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
    // axios
    // .get('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=MY', { timeout: 5000 })
    // .then(response => {
    //   setLoading(false)
    //   setData(response.data[0])
    //   setDate(moment(response.data[0]).fromNow())
    // })
    // .catch(error => {
    //   console.log(error)
    //   setLoading(false)
    //   setError(true)
    // })
    axios
    .all([axios.get('https://corona.lmao.ninja/v2/all'), axios.get('https://corona.lmao.ninja/v2/countries/malaysia')])
    .then(axios.spread(function (all, country) {
      setLoading(false)
      setDate(moment(all.data.updated).fromNow())
      setData(country.data)
    }))
    .catch(error => {
      setLoading(false)
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
          <img src='https://www.countryflags.io/MY/flat/64.png' alt={data.country} />
          <h1>{data.country}</h1>

          <div className="d-flex justify-content-center">
            <p className="small text-secondary mb-4">Data updated {date}</p>
          </div>

          <div className="d-flex justify-content-center">
            <h2 className="font-weight-light">Overall</h2>
          </div>

          <div className="row">
            <div className="col">
              <p>Case<br />
                <span className="text-info h1">{data.cases}</span><br />
                <span className="text-info">&#43; {data.todayCases}</span>
              </p>
            </div>
            <div className="col">
              <p>Recovered<br /><span className="text-success h1">{data.recovered}</span></p>
            </div>
            <div className="col">
              <p>Death<br />
                <span className="text-danger h1">{data.deaths}</span><br />
                <span className="text-danger">&#43; {data.todayDeaths}</span>
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <h2 className="font-weight-light">Today</h2>
          </div>

          <div className="row">
            <div className="col">
              <p>Active<br /><span className="text-info h1">{data.active}</span></p>
            </div>
            <div className="col">
              <p>Critical<br /><span className="text-warning h1">{data.critical}</span></p>
            </div>
          </div>
        </div>
      )}
      </section>

      <section className="twitter container-fluid mb-5 px-0">
        <Slider {...settings}>
          <Card title="KKMPutrajaya" handle="KKMPutrajaya" />
          <Card title="MYSumber Official" handle="mysumber" />
          <Card title="Jabatan Perdana Menteri" handle="jpmgov_" />
          <Card title="Majlis Keselamatan Negara" handle="MKNJPM" />
          <Card title="BERNAMA" handle="bernamadotcom" />
        </Slider>
      </section>
    </Layout>
  )
}

export default Index