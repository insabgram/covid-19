import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Loader from '../components/loader'

const Index = () => {
  const [date, setDate] = useState('')
  const [iso, setIso] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    function getAll() {
      return axios.get('https://corona.lmao.ninja/all')
    }
    function getCountry() {
      return axios.get('https://corona.lmao.ninja/countries/malaysia')
    }
    axios.all([getAll(), getCountry()])
      .then(axios.spread(function (all, country) {
        setLoading(false)
        setDate(moment(all.data.updated).fromNow())
        setData(country.data)
        setIso(country.data.countryInfo.iso2)
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
          <img src={`https://www.countryflags.io/${iso}/flat/64.png`} alt={data.country} />
          <h1>{data.country}</h1>

          <div className="d-flex justify-content-center">
            <p className="small text-secondary mb-4">Worldwide data updated {date}</p>
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

      <section className="container">
        <div className="card-deck my-4">
          <div className="card shadow-sm">
            <a className="twitter-timeline p-2" 
              href="https://twitter.com/KKMPutrajaya?ref_src=twsrc%5Etfw"
              data-tweet-limit="6">
              <Loader />
            </a>
          </div>
          <div className="card shadow-sm">
            <a className="twitter-timeline p-2" 
              href="https://twitter.com/bernamadotcom?ref_src=twsrc%5Etfw"
              data-tweet-limit="6">
              <Loader />
            </a>
          </div>
        </div>
      </section>

      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src="https://www.outbreak.my/map" title="Covid-19"></iframe>
      </div>
    </Layout>
  )
}

export default Index