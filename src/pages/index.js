import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Loader from '../components/loader'

const Index = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

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

      <section className="container">
        <div className="card-deck my-4">
          <div className="card border-0 shadow mb-4 mb-md-0">
            <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center p-2">@KKMPutrajaya <i className="material-icons small">unfold_more</i></div>
            <a className="twitter-timeline p-2" 
              href="https://twitter.com/KKMPutrajaya?ref_src=twsrc%5Etfw" 
              data-height="400" 
              data-chrome="noheader nofooter noborders noscrollbar">
              <Loader />
            </a>
            <div className="card-footer bg-transparent border-top-0 d-flex justify-content-start align-items-center p-2"><a className="text-uppercase small" href="https://twitter.com/KKMPutrajaya" target="_blank" rel="noopener noreferrer">View on Twitter</a></div>
          </div>

          <div className="card border-0 shadow mb-4 mb-md-0">
            <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center p-2">@bernamadotcom <i className="material-icons small">unfold_more</i></div>
            <a className="twitter-timeline p-2" 
              href="https://twitter.com/bernamadotcom?ref_src=twsrc%5Etfw" 
              data-height="400" 
              data-chrome="noheader nofooter noborders noscrollbar">
              <Loader />
            </a>
            <div className="card-footer bg-transparent border-top-0 d-flex justify-content-start align-items-center p-2"><a className="text-uppercase small" href="https://twitter.com/bernamadotcom" target="_blank" rel="noopener noreferrer">View on Twitter</a></div>
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
